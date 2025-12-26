import { useEffect, useState } from "react";
import api from "../api";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await api.get("/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        setError("Failed to load user data");
      }
    };
    fetchUser();
  }, []);

  if (error) return <div className="text-red-500 p-8 text-center">{error}</div>;
  if (!user) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
    </div>
  );

  // Calculate BMI category for visualization
  const getBMICategory = (bmi) => {
    if (!bmi) return null;
    if (bmi < 18.5) return { category: "Underweight", color: "bg-yellow-400" };
    if (bmi < 25) return { category: "Normal", color: "bg-green-500" };
    if (bmi < 30) return { category: "Overweight", color: "bg-orange-400" };
    return { category: "Obese", color: "bg-red-500" };
  };

  const bmiData = user.bmi ? getBMICategory(user.bmi) : null;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome back, {user.name}!</h1>
          <p className="text-gray-600">Track your nutrition journey and health progress</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`py-3 px-6 font-medium ${activeTab === "overview" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`py-3 px-6 font-medium ${activeTab === "progress" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"}`}
            onClick={() => setActiveTab("progress")}
          >
            Progress
          </button>
          <button
            className={`py-3 px-6 font-medium ${activeTab === "goals" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"}`}
            onClick={() => setActiveTab("goals")}
          >
            Goals
          </button>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Content Area */}
          <div className="md:col-span-2">
            {/* Health Metrics Card */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Health Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-700 mb-1">BMI</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {user.bmi ? Number(user.bmi).toFixed(1) : "N/A"}
                  </p>
                  {bmiData && (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${bmiData.color}`}
                          style={{ width: `${Math.min(100, (user.bmi / 40) * 100)}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">{bmiData.category}</p>
                    </div>
                  )}
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-700 mb-1">BMR</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {user.bmr ? `${Math.round(user.bmr)} kcal` : "N/A"}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">Daily calorie needs at rest</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-purple-700 mb-1">Weight</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {user.weight ? `${user.weight} kg` : "N/A"}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">Current weight</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-700 mb-1">Height</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {user.height ? `${user.height} cm` : "N/A"}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">Your height</p>
                </div>
              </div>
            </div>

            {/* Weekly Progress Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Weekly Progress</h2>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <p className="text-gray-600">Progress charts will appear here</p>
                <button className="mt-3 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm">
                  Track New Measurement
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* User Profile Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl text-green-600 font-bold">{user.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{user.name}</h3>
                  <p className="text-sm text-gray-600">{user.email}</p>
                  <span className="inline-block mt-1 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {user.role}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div className="flex justify-between">
                  <span className="text-gray-600">Age</span>
                  <span className="font-medium">{user.age ?? "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gender</span>
                  <span className="font-medium">{user.gender ?? "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Member since</span>
                  <span className="font-medium">Jan 2023</span>
                </div>
              </div>
              
              <button className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg text-sm">
                Edit Profile
              </button>
            </div>

            {/* Daily Tips Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Nutrition Tip of the Day</h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-800">
                  Remember to stay hydrated! Drinking water before meals can help with portion control and digestion.
                </p>
              </div>
              <button className="w-full mt-4 text-green-600 hover:text-green-800 text-sm">
                View More Tips
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}