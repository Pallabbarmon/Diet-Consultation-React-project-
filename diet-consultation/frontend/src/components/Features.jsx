// Features.jsx - New component
export default function Features() {
  const features = [
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Track your progress with detailed insights and personalized recommendations."
    },
    {
      icon: "🍎",
      title: "Meal Planning",
      description: "Get customized meal plans based on your dietary preferences and goals."
    },
    {
      icon: "💪",
      title: "Workout Plans",
      description: "Access personalized workout routines tailored to your fitness level."
    },
    {
      icon: "👨‍⚕️",
      title: "Expert Support",
      description: "Connect with certified nutritionists and fitness experts 24/7."
    },
    {
      icon: "📱",
      title: "Mobile App",
      description: "Access your health data and plans anywhere with our mobile application."
    },
    {
      icon: "🔒",
      title: "Secure Data",
      description: "Your health data is encrypted and protected with enterprise-grade security."
    }
  ];

  return (
    <section className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need for Your Health Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and support you need to achieve your health goals
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50K+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">100+</div>
            <div className="text-gray-600">Experts</div>
          </div>
        </div>
      </div>
    </section>
  );
}