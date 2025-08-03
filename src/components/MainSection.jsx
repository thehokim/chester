import React from "react";
import { ArrowRight, Play } from "lucide-react";

const MainSection = ({ scrollToSection }) => {
  const partners = [
    {
      name: "Asaxiy",
      logo: (
        <img
          src="https://clone-asaxiy-six.vercel.app/logo-icon.png"
          alt="Asaxiy"
          className="h-10 w-auto object-contain"
          style={{ maxHeight: 43 }}
        />
      ),
    },
    {
      name: "OLX",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/OLX_blue_logo.svg/1280px-OLX_blue_logo.svg.png"
          alt="OLX"
          className="h-10 w-auto object-contain"
          style={{ maxHeight: 43 }}
        />
      ),
    },
    {
      name: "Saber",
      logo: (
        <img
          src="https://challenge-samarkand.com/wp-content/uploads/sites/64/2024/06/7-saber.png"
          alt="Saber"
          className="h-10 w-auto object-contain"
          style={{ maxHeight: 43 }}
        />
      ),
    },
    {
      name: "FeedUp",
      logo: (
        <img
          src="http://feedup.uz/images/feedup/logo.svg"
          alt="FeedUp"
          className="h-10 w-auto object-contain"
          style={{ maxHeight: 40 }}
        />
      ),
    },
    {
      name: "QazPost",
      logo: (
        <img
          src="https://qazpost.kz/images/logo-short.svg"
          alt="QazPost"
          className="h-10 w-auto object-contain"
          style={{ maxHeight: 40 }}
        />
      ),
    },
    {
      name: "KEGOC",
      logo: (
        <img
          src="https://www.kegoc.kz/public/img/logo.svg"
          alt="KEGOC"
          className="h-10 w-auto object-contain"
          style={{ maxHeight: 40 }}
        />
      ),
    },
    {
      name: "Kloop",
      logo: (
        <img
          src="https://kloop.kg/wp-content/uploads/2023/09/kloop_logo_544.jpg"
          alt="Kloop"
          className="h-10 w-auto object-contain"
          style={{ maxHeight: 40 }}
        />
      ),
    },
  ];

  const PartnerLogo = ({ logo, name }) => (
    <div className="text-white/70 hover:text-white/90 transition-colors duration-200 flex items-center">
      {logo}
    </div>
  );
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-40 w-64 h-64 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 border border-white/15 rounded-full"></div>
        <div className="absolute bottom-40 left-40 w-48 h-48 border border-white/10 rounded-full"></div>

        {/* Geometric shapes */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-white/10 rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-white/15 rotate-12"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/5 rotate-45"></div>
      </div>

      {/* Wings Image */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
        <div className="relative w-full h-full flex items-center justify-end">
          <img
            src="https://cdn.prod.website-files.com/67fa38ea4d1466d740505645/67fc9661deb4420edc87458c_%D0%BA%D1%80%D1%8B%D0%BB%D1%8F.png"
            alt="Wings"
            className="hidden lg:block w-auto h-[100vh] max-w-7xl object-contain opacity-30 mix-blend-screen"
            style={{
              filter: "brightness(1.2) contrast(1.1)",
            }}
          />

          {/* For tablets */}
          <img
            src="https://cdn.prod.website-files.com/67fa38ea4d1466d740505645/67fc9661deb4420edc87458c_%D0%BA%D1%80%D1%8B%D0%BB%D1%8F.png"
            alt="Wings"
            className="hidden md:block lg:hidden w-auto h-[60vh] max-w-xl object-contain opacity-25 mix-blend-screen absolute right-0 top-1/2 transform -translate-y-1/2"
            style={{
              filter: "brightness(1.2) contrast(1.1)",
            }}
          />

          {/* For mobile - smaller and positioned differently */}
          <img
            src="https://cdn.prod.website-files.com/67fa38ea4d1466d740505645/67fc9661deb4420edc87458c_%D0%BA%D1%80%D1%8B%D0%BB%D1%8F.png"
            alt="Wings"
            className="block md:hidden w-auto h-[40vh] max-w-sm object-contain opacity-20 mix-blend-screen absolute right-0 top-2/3 transform -translate-y-1/2"
            style={{
              filter: "brightness(1.2) contrast(1.1)",
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center lg:min-h-[80vh]">
          <div className="lg:col-span-7 max-w-4xl lg:max-w-none">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">
                Trusted by 500+ companies
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
              The Frontline
              <br />
              <span className="text-white/80">of Customer</span>
              <br />
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                care
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-white/70 mb-12 leading-relaxed max-w-2xl">
              Providing top-tier call center services to enhance your customer
              engagement and sales.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 lg:mb-20">
              <button
                onClick={() => scrollToSection("booking")}
                className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Get started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="group inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-white/50 hover:bg-white/5 transition-all duration-200 backdrop-blur-sm"
              >
                <Play className="w-5 h-5" />
                Learn more
              </button>
            </div>

            {/* Partners Section */}
            <div className="space-y-6">
              <p className="text-white/50 text-sm font-medium uppercase tracking-wider">
                Trusted by industry leaders
              </p>

              <div className="flex flex-wrap items-center gap-8 lg:gap-8">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer transition-all duration-300 hover:scale-110"
                  >
                    <PartnerLogo logo={partner.logo} name={partner.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column for desktop - placeholder for wings positioning */}
          <div className="hidden lg:block lg:col-span-5 relative">
            {/* This space is reserved for the wings image */}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl lg:max-w-none lg:grid-cols-3">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-white/60 text-sm">Active Clients</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-white mb-2">99.8%</div>
            <div className="text-white/60 text-sm">Uptime Guarantee</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/60 text-sm">Support Available</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-10 lg:transform-none">
        <div className="flex flex-col items-center gap-2">
          <div className="text-white/40 text-sm">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
};

export default MainSection;
