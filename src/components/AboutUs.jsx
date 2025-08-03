import React from 'react';
import { MessageCircle, Quote, User, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

const AboutUs = ({ scrollToSection }) => {
  const services = [
    {
      icon: MessageCircle,
      title: "Efficient call center solutions",
      description: "Discover our comprehensive call center services designed to enhance customer engagement and streamline communication.",
      features: ["24/7 Support", "Multi-channel", "AI-powered"]
    },
    {
      icon: Quote,
      title: "Sales support excellence",
      description: "Explore our tailored sales support services that drive performance and boost your bottom line.",
      features: ["Lead Generation", "Conversion Optimization", "CRM Integration"]
    },
    {
      icon: User,
      title: "Customer communication mastery",
      description: "Learn how our expert team can improve your customer interactions and retention strategies.",
      features: ["Expert Training", "Quality Assurance", "Personalized Approach"]
    },
    {
      icon: TrendingUp,
      title: "Integrated performance analytics",
      description: "Utilize our advanced analytics tools for transparent reporting and enhanced decision-making.",
      features: ["Real-time Dashboards", "Custom Reports", "Performance Metrics"]
    }
  ];

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "99.8%", label: "Success Rate" },
    { value: "50M+", label: "Calls Handled" }
  ];

  return (
    <section id="about" className="relative bg-white">
      {/* Smooth transition from dark section above */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-900/5 to-transparent"></div>
      
      <div className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-gray-200">
              <CheckCircle className="w-4 h-4" />
              About Our Services
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Excellence in every
              <span className="block text-gray-600">customer interaction</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We deliver comprehensive solutions that transform how businesses connect with their customers, 
              combining cutting-edge technology with human expertise.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 shadow-sm"
              >
                <div className="mb-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 group-hover:shadow-lg transition-all duration-300">
                    <service.icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-gray-900 transition-colors duration-300"></div>
                      <span className="text-gray-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors duration-200 cursor-pointer group/link font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gray-50 rounded-2xl p-12 lg:p-16 border border-gray-100 mb-20">
            <div className="text-center mb-16">
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Trusted by industry leaders
              </h3>
              <p className="text-gray-600 text-xl">
                Our track record speaks for itself
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gray-900 rounded-2xl p-12 lg:p-16">
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                Ready to transform your 
                <span className="block text-gray-300">customer experience?</span>
              </h3>
              <p className="text-gray-400 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                Join hundreds of companies that trust us with their customer communications. 
                Let's discuss how we can help your business grow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Smooth transition to dark section below */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900/5 to-transparent"></div>
    </section>
  );
};

export default AboutUs;