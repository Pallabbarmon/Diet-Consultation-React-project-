import { Link, useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate("/register");
  };

  const handleDemo = () => {
    // You can implement demo scheduling functionality here
    console.log("Schedule demo clicked");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Animated gradient blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-200 to-green-200 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl animate-pulse-slow delay-1000"></div>

      <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="text-left">
              {/* Status Badge - Enhanced */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-8 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Live Health Monitoring • 10,000+ Active Users
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900">
                Transform Your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-teal-600 animate-gradient">
                  Health Journey
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                AI-powered personalized nutrition plans, expert guidance, and seamless health tracking 
                all in one platform designed for your wellness success.
              </p>

              {/* Feature List - Enhanced */}
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-lg font-semibold text-gray-800">24/7 Health Monitoring</span>
                    <p className="text-gray-600 text-sm mt-1">Real-time tracking and insights</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-lg font-semibold text-gray-800">Expert Consultations</span>
                    <p className="text-gray-600 text-sm mt-1">Certified nutritionists on demand</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-lg font-semibold text-gray-800">Personalized Plans</span>
                    <p className="text-gray-600 text-sm mt-1">Tailored to your unique needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-lg font-semibold text-gray-800">Secure Data Protection</span>
                    <p className="text-gray-600 text-sm mt-1">Enterprise-grade security</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons - Enhanced */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button 
                  onClick={handleGetStarted}
                  className="group relative bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span className="flex items-center justify-center">
                    Start Free Trial
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-xl"></div>
                </button>
                
                <button 
                  onClick={handleDemo}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center">
                    Schedule Demo
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Social Proof - Enhanced */}
              <div className="flex items-center">
                <div className="flex -space-x-3 mr-4">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">JD</div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">SM</div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">AL</div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-gray-600 text-xs font-bold shadow-sm">+997</div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700">Trusted by 10,000+ professionals</p>
                  <p className="text-xs text-gray-500">4.9/5 rating from 2,000+ reviews</p>
                </div>
              </div>
            </div>

            {/* Right Visual - Enhanced */}
            <div className="relative">
              <div className="relative">
                {/* Main Visual Container */}
                <div className="relative z-10 w-full h-96 sm:h-[500px] lg:h-[600px] bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl border border-gray-100 flex items-center justify-center overflow-hidden">
                  
                  {/* Healthcare Dashboard Illustration */}
                  <div className="text-center p-8">
                    <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl">
                      <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Smart Health Dashboard</h3>
                    <p className="text-gray-600">Real-time insights and analytics</p>
                  </div>

                  {/* Animated decorative elements */}
                  <div className="absolute top-8 left-8 w-6 h-6 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
                  <div className="absolute top-16 right-12 w-8 h-8 bg-purple-400 rounded-full opacity-40 animate-bounce delay-300"></div>
                  <div className="absolute bottom-12 left-16 w-4 h-4 bg-green-400 rounded-full opacity-70 animate-bounce delay-700"></div>
                  <div className="absolute bottom-8 right-8 w-7 h-7 bg-yellow-400 rounded-full opacity-50 animate-bounce delay-1000"></div>
                </div>

                {/* Floating Cards - Enhanced */}
                <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-20 animate-float">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Health Score: 95%</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-20 animate-float delay-1000">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-xs text-gray-500">Expert Support</div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-20 hidden lg:block animate-float delay-2000">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-lg">💊</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Medication</div>
                      <div className="text-xs text-gray-500">Due in 2 hours</div>
                    </div>
                  </div>
                </div>

                {/* Background Decorations */}
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-20 blur-3xl"></div>
              </div>
            </div>
          </div>

          {/* Bottom Stats - Enhanced */}
          <div className="mt-20 pt-12 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-gray-600 font-medium">Active Users</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600 font-medium">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Support</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">100+</div>
                <div className="text-gray-600 font-medium">Experts</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}