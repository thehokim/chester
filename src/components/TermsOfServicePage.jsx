import React, { useState, useEffect } from 'react';
import { ChevronRight, FileText, Users, CreditCard, Shield, AlertTriangle, Scale, Phone, Headphones, BarChart3, Settings, Clock, Mail, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const TermsOfServicePage = () => {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'general', title: '1. General Provisions', icon: FileText },
    { id: 'services', title: '2. Service Description', icon: Headphones },
    { id: 'registration', title: '3. Registration & Access', icon: Users },
    { id: 'financial', title: '4. Financial Terms', icon: CreditCard },
    { id: 'obligations', title: '5. Obligations of Parties', icon: CheckCircle },
    { id: 'intellectual', title: '6. Intellectual Property', icon: Shield },
    { id: 'confidentiality', title: '7. Confidentiality & Security', icon: Shield },
    { id: 'liability', title: '8. Liability & Warranties', icon: Scale },
    { id: 'termination', title: '9. Termination', icon: AlertTriangle },
    { id: 'force-majeure', title: '10. Force Majeure', icon: AlertTriangle },
    { id: 'disputes', title: '11. Dispute Resolution', icon: Scale },
    { id: 'final', title: '12. Final Provisions', icon: FileText }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="w-8 h-8 text-blue-400" />
            <h1 className="text-4xl lg:text-5xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            These Terms of Service govern your use of Chester Frontline's call center services. 
            Please read them carefully as they form a legally binding agreement between you and us.
          </p>
          <div className="mt-8 flex items-center gap-2 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            <span>Last updated: March 2024</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-12">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section) => {
                    const IconComponent = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
                          activeSection === section.id
                            ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <IconComponent className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm font-medium">{section.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-8 lg:p-12">
                
                {/* General Provisions */}
                <section id="general" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-blue-600" />
                    1. General Provisions
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">1.1 Agreement</h3>
                      <p className="text-gray-700 leading-relaxed">
                        These Terms of Service ("Terms") govern the use of Chester Frontline's services ("Company," "we," "us") 
                        and form a legally binding agreement between the Company and the client ("Client," "you").
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900">1.2 Acceptance of Terms</h3>
                      <p className="text-gray-700 leading-relaxed">By using our services, you confirm that you:</p>
                      <ul className="space-y-2 text-gray-700 ml-6">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                          Have read and agree to these Terms
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                          Have the legal capacity to enter into contracts
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                          Are acting on behalf of an organization (for B2B partnerships)
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">1.3 Changes to Terms</h3>
                      <p className="text-gray-700">
                        We reserve the right to modify these Terms with 30 days' notice before changes take effect.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Service Description */}
                <section id="services" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Headphones className="w-6 h-6 text-blue-600" />
                    2. Service Description
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Phone className="w-5 h-5 text-blue-600" />
                          2.1 Call Center Services
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• <strong>Inbound Calls:</strong> Customer support and inquiries</li>
                          <li>• <strong>Outbound Calls:</strong> Sales, surveys, notifications</li>
                          <li>• <strong>Multi-channel Support:</strong> Phone, email, chat, social media</li>
                          <li>• <strong>CRM Integration:</strong> Sync with client systems</li>
                          <li>• <strong>Analytics:</strong> Detailed performance reporting</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Settings className="w-5 h-5 text-green-600" />
                          2.2 Additional Services
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• 24/7 Technical support</li>
                          <li>• Training and consultations</li>
                          <li>• Integration setup</li>
                          <li>• Custom solutions</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                        2.3 Service Limitations
                      </h3>
                      <p className="text-gray-700 mb-3">We do not provide services for:</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-1 text-gray-700">
                          <li>• Illegal activities</li>
                          <li>• Spam or mass mailings</li>
                          <li>• Adult content</li>
                        </ul>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Gambling (where prohibited)</li>
                          <li>• Activities violating third-party rights</li>
                          <li>• Harmful or malicious content</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Registration */}
                <section id="registration" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Users className="w-6 h-6 text-blue-600" />
                    3. Registration & Access
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900">3.1 Account Setup</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-blue-600 text-xs font-bold">1</span>
                          </div>
                          <p className="text-gray-700">Provide accurate contact information</p>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-green-600 text-xs font-bold">2</span>
                          </div>
                          <p className="text-gray-700">Choose a secure password</p>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-purple-600 text-xs font-bold">3</span>
                          </div>
                          <p className="text-gray-700">Maintain updated account data</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900">3.2 Client Verification</h3>
                      <p className="text-gray-700 mb-3">We reserve the right to:</p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                          Verify provided information
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                          Request additional documentation
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                          Refuse service without explanation
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Financial Terms */}
                <section id="financial" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                    4. Financial Terms
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-blue-50 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 mb-3">4.1 Pricing</h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li>• Current rates on website</li>
                          <li>• 30-day notice for changes</li>
                          <li>• Custom rates available</li>
                          <li>• Taxes not included</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 mb-3">4.2 Payment</h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li>• Bank transfer, cards, e-wallets</li>
                          <li>• Prepaid or postpaid options</li>
                          <li>• USD, EUR, local currency</li>
                          <li>• 1.5% late fee per day</li>
                        </ul>
                      </div>
                      
                      <div className="bg-purple-50 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 mb-3">4.3 Refunds</h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li>• Unused prepaid services</li>
                          <li>• Technical failures (our fault)</li>
                          <li>• SLA guarantee breaches</li>
                          <li>• Setup fees non-refundable</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Obligations */}
                <section id="obligations" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                    5. Obligations of Parties
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="font-semibold text-gray-900 text-lg">Company Obligations</h3>
                      
                      <div className="space-y-4">
                        <div className="p-4 border border-blue-200 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Service Delivery</h4>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Provide services per SLA</li>
                            <li>• Ensure data confidentiality</li>
                            <li>• Offer technical support</li>
                            <li>• Notify of significant changes</li>
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">SLA Guarantees</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="font-medium text-gray-900">Uptime</div>
                              <div className="text-blue-600">99.8%</div>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Response Time</div>
                              <div className="text-blue-600">&lt; 30 sec</div>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Support</div>
                              <div className="text-blue-600">4 hours</div>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Recovery</div>
                              <div className="text-blue-600">2 hours</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="font-semibold text-gray-900 text-lg">Client Obligations</h3>
                      
                      <div className="space-y-4">
                        <div className="p-4 border border-green-200 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Payment & Compliance</h4>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Timely payment of services</li>
                            <li>• Provide necessary information</li>
                            <li>• Follow security requirements</li>
                            <li>• Respect third-party rights</li>
                          </ul>
                        </div>
                        
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Prohibited Activities</h4>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Illegal content or activities</li>
                            <li>• System interference</li>
                            <li>• Unauthorized access attempts</li>
                            <li>• Violation of usage policies</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Liability */}
                <section id="liability" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Scale className="w-6 h-6 text-blue-600" />
                    8. Liability & Warranties
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          Our Warranties
                        </h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li>• Professional service delivery</li>
                          <li>• Compliance with stated standards</li>
                          <li>• Defect resolution at our cost</li>
                          <li>• SLA-based compensation</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-orange-600" />
                          Liability Limits
                        </h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li>• Limited to 12 months of fees</li>
                          <li>• Direct damages only</li>
                          <li>• Gross negligence exceptions</li>
                          <li>• Force majeure exclusions</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                          Exclusions
                        </h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li>• Third-party actions</li>
                          <li>• Force majeure events</li>
                          <li>• Misuse of services</li>
                          <li>• Recommendation-based decisions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Termination */}
                <section id="termination" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-blue-600" />
                    9. Termination
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">9.1 Grounds for Termination</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <Clock className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                            Contract expiration
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 mt-1 text-orange-600 flex-shrink-0" />
                            Material breach of terms
                          </li>
                          <li className="flex items-start gap-2">
                            <CreditCard className="w-4 h-4 mt-1 text-red-600 flex-shrink-0" />
                            Non-payment for 30+ days
                          </li>
                          <li className="flex items-start gap-2">
                            <Users className="w-4 h-4 mt-1 text-gray-600 flex-shrink-0" />
                            Liquidation of either party
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">9.2 Termination Process</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-blue-600 text-xs font-bold">1</span>
                            </div>
                            <p className="text-gray-700 text-sm">30-day written notice</p>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-green-600 text-xs font-bold">2</span>
                            </div>
                            <p className="text-gray-700 text-sm">Complete current projects</p>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-purple-600 text-xs font-bold">3</span>
                            </div>
                            <p className="text-gray-700 text-sm">Data transfer & final settlement</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Contact */}
                <section id="contact" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Mail className="w-6 h-6 text-blue-600" />
                    Contact Information
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="p-6 bg-blue-50 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-4">Legal & Compliance</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-blue-600" />
                            <span className="text-gray-700">legal@chesterfrontline.com</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Clock className="w-4 h-4 text-blue-600" />
                            <span className="text-gray-700">Business hours: 9 AM - 6 PM UTC</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 bg-green-50 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-4">Technical Support</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-green-600" />
                            <span className="text-gray-700">support@chesterfrontline.com</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Clock className="w-4 h-4 text-green-600" />
                            <span className="text-gray-700">Available: 24/7</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="p-6 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-4">Company Details</h3>
                        <div className="space-y-2 text-gray-700">
                          <p><strong>Chester Frontline</strong></p>
                          <p>[Business Address]</p>
                          <p>[Registration Number]</p>
                          <p>[Tax ID]</p>
                        </div>
                      </div>
                      
                      <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">Dispute Resolution</h3>
                        <p className="text-gray-700 text-sm">
                          For any disputes, please contact us directly first. If unresolved, 
                          matters will be handled according to the jurisdiction specified in Section 11.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Footer Note */}
                <div className="pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-gray-500 text-sm mb-2">
                      These Terms of Service are effective as of March 2024 and apply to all Chester Frontline services.
                    </p>
                    <p className="text-gray-400 text-xs">
                      By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;