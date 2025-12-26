import { useEffect, useState } from "react";
import api from "../../api";

export default function AdminConsults() {
  const [consults, setConsults] = useState([]);
  const [reply, setReply] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("pending");
  const [sending, setSending] = useState({});

  useEffect(() => {
    const fetchConsults = async () => {
      try {
        setLoading(true);
        const res = await api.get("/api/consult");
        setConsults(res.data);
      } catch (err) {
        console.error("Failed to fetch consultations:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchConsults();
  }, []);

  const sendReply = async (id) => {
    try {
      setSending({ ...sending, [id]: true });
      await api.post(`/api/consult/${id}/reply`, { reply: reply[id] });
      setConsults(consults.map(c => c._id === id ? { ...c, reply: reply[id], repliedAt: new Date().toISOString() } : c));
      setReply({ ...reply, [id]: "" });
    } catch {
      alert("Failed to send reply");
    } finally {
      setSending({ ...sending, [id]: false });
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Filter consultations based on active tab
  const filteredConsults = consults.filter(consult => {
    if (activeTab === "pending") return !consult.reply;
    if (activeTab === "replied") return consult.reply;
    return true;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Consultation Management</h1>
          <p className="text-gray-600">Manage and respond to user consultation requests</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-5">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Requests</p>
                <p className="text-2xl font-bold text-gray-800">{consults.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending Replies</p>
                <p className="text-2xl font-bold text-gray-800">{consults.filter(c => !c.reply).length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Replied</p>
                <p className="text-2xl font-bold text-gray-800">{consults.filter(c => c.reply).length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-md mb-6">
          <div className="flex border-b border-gray-200">
            <button
              className={`py-4 px-6 font-medium ${activeTab === "all" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"}`}
              onClick={() => setActiveTab("all")}
            >
              All Requests
            </button>
            <button
              className={`py-4 px-6 font-medium ${activeTab === "pending" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"}`}
              onClick={() => setActiveTab("pending")}
            >
              Pending
            </button>
            <button
              className={`py-4 px-6 font-medium ${activeTab === "replied" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"}`}
              onClick={() => setActiveTab("replied")}
            >
              Replied
            </button>
          </div>
        </div>

        {/* Consultation List */}
        <div className="space-y-6">
          {filteredConsults.length > 0 ? (
            filteredConsults.map(consult => (
              <div key={consult._id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className={`p-5 ${consult.reply ? "bg-green-50" : "bg-yellow-50"}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-800">{consult.user?.name}</h3>
                      <p className="text-sm text-gray-600">{consult.user?.email}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block text-xs px-2 py-1 rounded-full ${consult.reply ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                        {consult.reply ? "Replied" : "Pending"}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{formatDate(consult.createdAt)}</p>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">User's Message:</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-800">{consult.message}</p>
                    </div>
                  </div>

                  {consult.reply ? (
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Your Reply:</h4>
                      <div className="bg-green-50 border border-green-100 p-4 rounded-lg">
                        <p className="text-green-800">{consult.reply}</p>
                        {consult.repliedAt && (
                          <p className="text-xs text-green-600 mt-2">Replied on: {formatDate(consult.repliedAt)}</p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Send Reply:</h4>
                      <textarea
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        rows="4"
                        placeholder="Type your response here..."
                        value={reply[consult._id] || ""}
                        onChange={e => setReply({ ...reply, [consult._id]: e.target.value })}
                      />
                      <button
                        onClick={() => sendReply(consult._id)}
                        disabled={!reply[consult._id] || sending[consult._id]}
                        className="mt-3 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                      >
                        {sending[consult._id] ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          "Send Reply"
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {activeTab === "pending" ? "No Pending Requests" : 
                 activeTab === "replied" ? "No Replied Requests" : "No Consultation Requests"}
              </h3>
              <p className="text-gray-600">
                {activeTab === "pending" ? "All consultation requests have been addressed." : 
                 "There are no consultation requests to display."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}