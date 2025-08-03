import React from 'react';
import { Quote, User, ArrowRight, CheckCircle, Shield, Clock, Target } from 'lucide-react';

const Outsource = ({ scrollToSection }) => {
  const mainServices = [
    {
      icon: Quote,
      title: "Expert call handling",
      description: "Our trained agents deliver exceptional customer support and sales solutions tailored to your needs.",
      features: [
        "Professionally trained agents",
        "Industry-specific expertise", 
        "Quality assurance protocols",
        "Multilingual support available"
      ]
    },
    {
      icon: User,
      title: "Seamless integration",
      description: "We ensure smooth integration with your existing systems for efficient operations and transparent reporting.",
      features: [
        "CRM system integration",
        "Real-time data synchronization",
        "Custom reporting dashboards",
        "API-first architecture"
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with full compliance standards"
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock service ensuring global coverage"
    },
    {
      icon: Target,
      title: "Performance Focus",
      description: "KPI-driven approach with measurable results"
    }
  ];

  const metrics = [
    { value: "95%", label: "Client Retention" },
    { value: "4.8/5", label: "Customer Rating" },
    { value: "< 2min", label: "Response Time" },
    { value: "99.9%", label: "Service Uptime" }
  ];

  return (
    <section id="outsource" className="relative py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Outsource with confidence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Providing top-tier call center services to enhance your customer 
            engagement and sales performance.
          </p>
        </div>

        {/* Main Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/15 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Why choose our outsourcing solutions
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Built on years of experience and industry best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  <benefit.icon className="w-10 h-10 text-white/80" strokeWidth={1.5} />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300">
                  {benefit.title}
                </h4>
                
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Section */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-3">
              Performance metrics that matter
            </h3>
            <p className="text-gray-300">
              Real results from real partnerships
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-400 text-sm font-medium uppercase tracking-wide">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom blur overlay with darkening transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900 to-transparent backdrop-blur-sm"></div>
      </div>
    </section>
  );
};

export default Outsource;