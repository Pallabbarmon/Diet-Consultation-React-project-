import { useEffect, useState } from "react";
import api from "../../api";

export default function AdminPlans() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [meals, setMeals] = useState([""]);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    api.get("/api/users")
      .then(res => setUsers(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const addMealField = () => setMeals([...meals, ""]);
  
  const updateMeal = (i, val) => {
    const copy = [...meals];
    copy[i] = val;
    setMeals(copy);
  };

  const submitPlan = async () => {
    setIsSubmitting(true);
    setMsg("");
    
    try {
      await api.post(`/api/plans/${selectedUser}`, { meals });
      setMsg("Plan created successfully!");
      setMeals([""]);
      setSelectedUser("");
    } catch (e) {
      setMsg("Failed to create plan. Please try again.");
      console.error("Plan creation error:", e);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Diet Plan</h1>
          <p className="text-gray-600">Design personalized nutrition plans for your clients</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-md p-6">
          {/* User Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Client
            </label>
            <div className="relative">
              <select 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none"
                value={selectedUser} 
                onChange={e => setSelectedUser(e.target.value)}
              >
                <option value="">-- Select a Client --</option>
                {users.filter(u => u.role !== "admin").map(u => (
                  <option key={u._id} value={u._id}>
                    {u.name} ({u.email})
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Meal Inputs */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Meal Plan
              </label>
              <button
                onClick={addMealField}
                className="text-sm text-green-600 hover:text-green-800 font-medium flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Meal
              </button>
            </div>

            <div className="space-y-3">
              {meals.map((meal, i) => (
                <div key={i} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-3">
                    <span className="text-xs font-medium text-green-600">{i + 1}</span>
                  </div>
                  <input
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder={`Meal ${i + 1} (e.g., Oatmeal with berries)`}
                    value={meal}
                    onChange={e => updateMeal(i, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={submitPlan}
            disabled={!selectedUser || isSubmitting}
            className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-700 hover:to-teal-700 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Plan...
              </>
            ) : (
              "Create Diet Plan"
            )}
          </button>

          {/* Status Message */}
          {msg && (
            <div className={`mt-4 p-3 rounded-lg text-center ${
              msg.includes("success") 
                ? "bg-green-50 text-green-800 border border-green-200" 
                : "bg-red-50 text-red-800 border border-red-200"
            }`}>
              {msg}
            </div>
          )}

          {/* Help Text */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-600">
              <strong>Tip:</strong> Create detailed meal descriptions including ingredients, portions, and preparation instructions for best results.
            </p>
          </div>
        </div>

        {/* Example Plans */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="font-semibold text-blue-800 mb-3">Example Meal Plans</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Weight Loss Plan</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Breakfast: Greek yogurt with berries</li>
                <li>• Lunch: Grilled chicken salad</li>
                <li>• Dinner: Baked salmon with vegetables</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Muscle Building Plan</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Breakfast: Protein oatmeal with nuts</li>
                <li>• Lunch: Quinoa with chicken and avocado</li>
                <li>• Dinner: Lean beef with sweet potato</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}