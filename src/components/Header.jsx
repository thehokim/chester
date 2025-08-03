import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone, Headphones, Briefcase, Target, Calendar, Users, Building, Building2, Cog, ArrowRight, HelpCircle, MessageCircle, BookOpen, Users2 } from 'lucide-react';

const Header = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceItems = [
    {
      category: "Call Center Solutions",
      items: [
        { icon: Phone, title: "Outbound Calling", desc: "Expand your reach with expert assistance." },
        { icon: Headphones, title: "Inbound Support", desc: "Deliver exceptional customer service." },
        { icon: Briefcase, title: "Sales Assistance", desc: "Boost conversions with skilled teams." }
      ]
    },
    {
      category: "Sales Support",
      items: [
        { icon: Target, title: "Lead Qualification", desc: "Identify high-value prospects efficiently." },
        { icon: Calendar, title: "Appointment Setting", desc: "Schedule meetings seamlessly." },
        { icon: Users, title: "Customer Retention", desc: "Maintain long-term relationships." }
      ]
    },
    {
      category: "Communication Services",
      items: [
        { icon: Building, title: "B2B Sales", desc: "Drive enterprise growth strategies." },
        { icon: Building2, title: "B2C Sales", desc: "Connect with consumers effectively." },
        { icon: Cog, title: "CRM Integration", desc: "Streamline your existing workflows." }
      ]
    }
  ];

  const supportItems = [
    { icon: MessageCircle, title: "Get in Touch", desc: "Contact our support team" },
    { icon: Users2, title: "Community", desc: "Connect with other users" }
  ];

  const ServicesDropdown = () => (
    <div className="absolute overflow-auto top-full left-1/2 transform -translate-x-1/2 mt-2 w-[98vw] sm:w-[95vw] max-w-[1000px] min-w-[320px] bg-gray-800 border border-gray-700 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out translate-y-2 group-hover:translate-y-0 z-[60]">
      <div className="p-4  sm:p-6 lg:p-8 max-h-[80vh] overflow-y-auto">
        {/* Mobile and Tablet Layout */}
        <div className="block lg:hidden">
          {/* Services Grid for Mobile/Tablet */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {serviceItems.flatMap(section => 
              section.items.map((item, itemIdx) => (
                <div key={`${section.category}-${itemIdx}`} className="group/item cursor-pointer p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 border border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center group-hover/item:bg-blue-600 transition-colors duration-200 flex-shrink-0">
                      <item.icon className="w-5 h-5 text-gray-300 group-hover/item:text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-200 text-sm group-hover/item:text-white leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed mt-1 line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {/* Outsourcing Solutions for Mobile/Tablet */}
          <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg p-4 border border-gray-600">
            <h3 className="font-semibold text-gray-200 text-lg mb-2">
              Outsourcing Solutions
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Comprehensive services designed to optimize your business operations.
            </p>
            <button onClick={() => scrollToSection('about')} className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {serviceItems.map((section, sectionIdx) => (
            <div key={sectionIdx} className="space-y-4">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
                {section.category}
              </h3>
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="group/item cursor-pointer p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center group-hover/item:bg-blue-600 transition-colors duration-200 flex-shrink-0">
                      <item.icon className="w-5 h-5 text-gray-300 group-hover/item:text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-200 text-sm group-hover/item:text-white leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
          
          <div className="bg-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-gray-200 text-lg mb-3">
              Outsourcing Solutions
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Comprehensive services designed to optimize your business operations.
            </p>
            <button onClick={() => scrollToSection('about')} className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const SupportDropdown = () => (
    <div className="absolute top-full right-0 mt-2 w-80 max-w-[95vw] bg-gray-800 border border-gray-700 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out translate-y-2 group-hover:translate-y-0 z-[60]">
      <div className="p-4 lg:p-6">
        {supportItems.map((item, idx) => (
          <div key={idx} className="group/item cursor-pointer p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center group-hover/item:bg-blue-600 transition-colors duration-200 flex-shrink-0">
                <item.icon className="w-4 h-4 text-gray-300 group-hover/item:text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-200 text-sm group-hover/item:text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-400 truncate">
                  {item.desc}
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover/item:text-blue-400 transition-colors duration-200 flex-shrink-0 ml-2" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/60 backdrop-blur-sm border-b border-gray-800 shadow-sm' 
          : 'bg-gray-900/60 border-b border-gray-800'
      }`}>
        <nav className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.prod.website-files.com/67fa38ea4d1466d740505645/67fc93edd95521ad2723f514_NO%20BG.png"
                alt="Chester Frontline Logo"
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain"
              />
              <span className="text-lg sm:text-xl font-bold text-gray-200 tracking-tight">
                CHESTER FRONTLINE
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-200 hover:text-gray-300 font-medium text-sm py-2 px-3 rounded-lg hover:bg-gray-700 transition-all duration-200">
                  Our Services
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <ServicesDropdown />
              </div>

              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-200 hover:text-gray-300 font-medium text-sm py-2 px-3 rounded-lg hover:bg-gray-700 transition-all duration-200"
              >
                About Us
              </button>

              <button 
                onClick={() => scrollToSection('answers')}
                className="text-gray-200 hover:text-gray-300 font-medium text-sm py-2 px-3 rounded-lg hover:bg-gray-700 transition-all duration-200"
              >
                Insights
              </button>

              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-200 hover:text-gray-300 font-medium text-sm py-2 px-3 rounded-lg hover:bg-gray-700 transition-all duration-200">
                  Support
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <SupportDropdown />
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button 
                onClick={() => scrollToSection('booking')}
                className="bg-gray-700 text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Start Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-200" />
              ) : (
                <Menu className="w-6 h-6 text-gray-200" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="border-t border-gray-700 bg-gray-900/95 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="space-y-4">
                <div>
                  <button 
                    className="flex items-center justify-between w-full text-left font-medium text-gray-200 py-2"
                    onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                  >
                    Our Services
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-gray-200 ${
                      activeDropdown === 'services' ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  <div className={`transition-all duration-300 ease-in-out ${
                    activeDropdown === 'services' 
                      ? 'max-h-96 opacity-100 mt-3' 
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <div className="space-y-3 pl-4">
                      {serviceItems.flatMap(section => section.items).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 py-2">
                          <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-gray-300" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-200 text-sm">{item.title}</h4>
                            <p className="text-xs text-gray-400">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    scrollToSection('about');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block font-medium text-gray-200 py-2 text-left w-full"
                >
                  About Us
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('answers');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block font-medium text-gray-200 py-2 text-left w-full"
                >
                  Insights
                </button>
                
                <div>
                  <button 
                    className="flex items-center justify-between w-full text-left font-medium text-gray-200 py-2"
                    onClick={() => setActiveDropdown(activeDropdown === 'support' ? null : 'support')}
                  >
                    Support
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-gray-200 ${
                      activeDropdown === 'support' ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  <div className={`transition-all duration-300 ease-in-out ${
                    activeDropdown === 'support' 
                      ? 'max-h-48 opacity-100 mt-3' 
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <div className="space-y-2 pl-4">
                      {supportItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 py-2">
                          <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
                            <item.icon className="w-3 h-3 text-gray-300" />
                          </div>
                          <span className="text-sm text-gray-200">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <button 
                    onClick={() => {
                      scrollToSection('booking');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-gray-700 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors duration-200"
                  >
                    Start Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;