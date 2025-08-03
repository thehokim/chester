import React from 'react';
import { ArrowRight, CheckCircle, Users, Award, Globe } from 'lucide-react';

const PartnerSection = () => {
  const trustIndicators = [
    {
      icon: Users,
      title: "Expert Team",
      description: "500+ trained professionals"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "99.8% client satisfaction rate"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "24/7 multilingual support"
    }
  ];

  const keyBenefits = [
    "Seamless system integration",
    "Dedicated account management", 
    "Real-time performance monitoring",
    "Scalable solutions that grow with you"
  ];

  return (
    <section className="relative bg-gray-950">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-white rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 border border-white rounded-full"></div>
      </div>

      <div className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Content */}
          <div className="text-center mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-5 py-2.5 mb-8">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span className="text-gray-300 text-sm font-medium">Trusted Partnership</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Partner with a
              <span className="block text-gray-400">trusted team</span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 font-medium">
              Expert call center solutions for your business
            </p>

            {/* Description */}
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
              Our skilled agents provide seamless customer support and sales services, 
              fully integrated with your systems.
            </p>

            {/* CTA Button */}
            <div className="mb-20">
              <button className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-xl">
                Start now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {trustIndicators.map((indicator, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="w-20 h-20 bg-gray-900 border border-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-800 group-hover:border-gray-700 transition-all duration-300 group-hover:scale-105">
                  <indicator.icon className="w-10 h-10 text-gray-400 group-hover:text-gray-300" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                  {indicator.title}
                </h3>
                
                <p className="text-gray-400 text-sm">
                  {indicator.description}
                </p>
              </div>
            ))}
          </div>

          {/* Key Benefits */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-12 lg:p-16 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why businesses choose us as their partner
              </h3>
              <p className="text-gray-400 text-lg">
                Built for scale, designed for success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {keyBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-gray-400" />
                  </div>
                  <span className="text-gray-300 font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Smooth transition to light section below */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent"></div>
    </section>
  );
};

export default PartnerSection;