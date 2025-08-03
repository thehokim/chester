import React from "react";
import { Calendar, Clock, ArrowRight, CheckCircle } from "lucide-react";

const Booking = () => {
  const meetingTypes = [
    {
      icon: Calendar,
      title: "Discovery Call",
      duration: "30 minutes",
      description:
        "Perfect for understanding your needs and exploring how we can help",
    },
    {
      icon: Clock,
      title: "Strategy Session",
      duration: "60 minutes",
      description:
        "In-depth discussion about implementation and custom solutions",
    },
  ];

  const benefits = [
    "No commitment required",
    "Expert consultation included",
    "Tailored recommendations",
    "Immediate next steps",
  ];

  return (
    <section id="booking" className="relative bg-gray-950">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/3 right-1/3 w-80 h-80 border border-white rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 border border-white rounded-full"></div>
      </div>
      <div className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Book a meeting
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-12">
              Choose a convenient date and time to discuss service details,
              pricing, or your specific needs.
            </p>
            <div className="mb-16">
              <a href="https://tally.so/r/n0YA7j" className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-xl">
                Book a meeting
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            {meetingTypes.map((type, index) => (
              <div
                key={index}
                className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:bg-gray-900/70 hover:border-gray-700 transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300 flex-shrink-0">
                    <type.icon
                      className="w-8 h-8 text-gray-400 group-hover:text-gray-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-white group-hover:text-gray-100 transition-colors duration-300">
                        {type.title}
                      </h3>
                      <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                        {type.duration}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {type.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-12 lg:p-16 max-w-4xl mx-auto mb-16">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                What to expect from our meeting
              </h3>
              <p className="text-gray-400 text-lg">
                Every consultation is designed to provide maximum value
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-gray-400" />
                  </div>
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                <span>Flexible scheduling</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                <span>Expert guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent"></div>
    </section>
  );
};

export default Booking;
