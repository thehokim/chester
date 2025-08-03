import React from 'react';
import { HelpCircle, ArrowRight, CheckCircle } from 'lucide-react';

const Answers = ({ scrollToSection }) => {
  const faqs = [
    {
      question: "What services are available?",
      answer: "We offer call center solutions, sales support, and customer communication services tailored to your needs."
    },
    {
      question: "How is quality maintained?",
      answer: "Our team is trained to provide top-notch service with excellent English skills and cultural understanding."
    },
    {
      question: "Why choose us?",
      answer: "Fluent in English agents. Trained in service and sales. Cost-efficient. We operate in a growing market with lower labor cost, strong education, and a Western work ethic. Your advantage - our foundation"
    },
    {
      question: "How to begin?",
      answer: "Reach out to discuss your needs and see how we can help your business grow."
    },
    {
      question: "Are solutions customizable?",
      answer: "Absolutely, we customize our services to fit each client's specific requirements."
    },
    {
      question: "Which industries do you support?",
      answer: "We serve various industries, focusing on enhancing customer interactions in both B2B and B2C sectors."
    }
  ];

  const additionalInfo = [
    "24/7 customer support availability",
    "Multilingual agents for global reach", 
    "Advanced CRM integration capabilities",
    "Real-time performance monitoring"
  ];

  return (
    <section id="answers" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 border border-white/15 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 border border-white/10 rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-white/80" />
            <span className="text-white/80 text-sm font-medium uppercase tracking-wide">
              Common Questions
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Find Your Answers Here
          </h2>

          <p className="text-xl text-white/70 max-w-4xl leading-relaxed">
            Discover detailed responses to frequently asked questions about our outsourcing services.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                {faq.question}
              </h3>
              <p className="text-white/70 leading-relaxed text-lg group-hover:text-white/80 transition-colors duration-300">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              What else you get with our services
            </h3>
            <p className="text-white/60 text-lg">
              Additional benefits included in every partnership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalInfo.map((info, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-white/80 font-medium">
                  {info}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gray-900 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900 to-transparent backdrop-blur-sm"></div>
      </div>
    </section>
  );
};

export default Answers;