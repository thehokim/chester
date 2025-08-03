import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Eye, Lock, Users, FileText, Clock, Mail, Globe, Database, Scale, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'introduction', title: '1. Introduction', icon: Shield },
    { id: 'data-collection', title: '2. What Data We Collect', icon: Database },
    { id: 'data-usage', title: '3. How We Use Your Data', icon: Eye },
    { id: 'legal-basis', title: '4. Legal Basis for Processing', icon: Scale },
    { id: 'data-sharing', title: '5. Data Sharing with Third Parties', icon: Users },
    { id: 'international-transfer', title: '6. International Data Transfers', icon: Globe },
    { id: 'data-storage', title: '7. Data Storage and Protection', icon: Lock },
    { id: 'your-rights', title: '8. Your Rights', icon: Users },
    { id: 'cookies', title: '9. Cookies Policy', icon: FileText },
    { id: 'minors', title: '10. Minors', icon: Users },
    { id: 'policy-changes', title: '11. Policy Changes', icon: Clock },
    { id: 'contact', title: '12. Contact Information', icon: Mail }
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
            <Shield className="w-8 h-8 text-blue-400" />
            <h1 className="text-4xl lg:text-5xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            We are committed to protecting your privacy and ensuring the security of your personal data. 
            This policy explains how Chester Frontline collects, uses, and protects your information.
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
                
                {/* Introduction */}
                <section id="introduction" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-blue-600" />
                    1. Introduction
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Chester Frontline ("we," "our," "us") respects your privacy and is committed to protecting your personal data. 
                      This Privacy Policy explains how we collect, use, process, and protect your information when you use our call center services.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      This policy applies to all personal data we process in connection with our services, whether you are a business client 
                      or an end user whose data we process on behalf of our clients.
                    </p>
                  </div>
                </section>

                {/* Data Collection */}
                <section id="data-collection" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Database className="w-6 h-6 text-blue-600" />
                    2. What Data We Collect
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">2.1 Business Client Data</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                          Contact information (name, email, phone, address)
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                          Company information and business details
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                          Billing and payment information
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                          Communication preferences
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">2.2 End User Data (Your Customers)</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                          Contact details for support requests
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                          Interaction history and support tickets
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                          Call recordings (with consent)
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                          Transaction data (when necessary)
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">2.3 Technical Data</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-gray-600 flex-shrink-0" />
                          IP addresses and device information
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-gray-600 flex-shrink-0" />
                          Browser and operating system details
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-gray-600 flex-shrink-0" />
                          Cookies and similar technologies
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-gray-600 flex-shrink-0" />
                          Website activity logs
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Data Usage */}
                <section id="data-usage" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Eye className="w-6 h-6 text-blue-600" />
                    3. How We Use Your Data
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900">3.1 Service Delivery</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Processing customer inquiries</li>
                        <li>• CRM and workflow management</li>
                        <li>• Technical support provision</li>
                        <li>• Billing and payments</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900">3.2 Quality Improvement</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Service effectiveness analysis</li>
                        <li>• Staff training and development</li>
                        <li>• Quality control (call recordings)</li>
                        <li>• Performance analytics</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Legal Basis */}
                <section id="legal-basis" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Scale className="w-6 h-6 text-blue-600" />
                    4. Legal Basis for Processing
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <FileText className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Contract Performance</h3>
                        <p className="text-gray-700">Processing necessary to fulfill our service obligations</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Consent</h3>
                        <p className="text-gray-700">Explicit consent for data processing activities</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Legitimate Interests</h3>
                        <p className="text-gray-700">For service improvement and security purposes</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Data Sharing */}
                <section id="data-sharing" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Users className="w-6 h-6 text-blue-600" />
                    5. Data Sharing with Third Parties
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="font-semibold text-gray-900 mb-2">We may share data with:</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Partners:</strong> For technical support and integrations</li>
                        <li>• <strong>Service Providers:</strong> Hosting, CRM, payment systems</li>
                        <li>• <strong>Government Authorities:</strong> When legally required</li>
                        <li>• <strong>Business Transactions:</strong> In case of sale or reorganization</li>
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Protection Guarantees:</h3>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Confidentiality agreements</li>
                        <li>• Security standard compliance</li>
                        <li>• Data minimization principles</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* International Transfer */}
                <section id="international-transfer" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Globe className="w-6 h-6 text-blue-600" />
                    6. International Data Transfers
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When transferring data outside your jurisdiction, we ensure adequate protection through:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-gray-900 mb-1">Adequate Protection</h3>
                      <p className="text-sm text-gray-600">Ensuring proper safeguards</p>
                    </div>
                    
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <FileText className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-gray-900 mb-1">Standard Clauses</h3>
                      <p className="text-sm text-gray-600">Contractual protections</p>
                    </div>
                    
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <Lock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-gray-900 mb-1">Certifications</h3>
                      <p className="text-sm text-gray-600">International standards</p>
                    </div>
                  </div>
                </section>

                {/* Data Storage */}
                <section id="data-storage" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Lock className="w-6 h-6 text-blue-600" />
                    7. Data Storage and Protection
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Retention Periods</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <div className="font-medium text-gray-900">Client Data</div>
                          <div className="text-sm text-gray-600">Contract duration + 3 years</div>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg">
                          <div className="font-medium text-gray-900">Call Recordings</div>
                          <div className="text-sm text-gray-600">Up to 2 years</div>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-lg">
                          <div className="font-medium text-gray-900">Financial Data</div>
                          <div className="text-sm text-gray-600">As per legal requirements</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Security Measures</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-2">
                          <Lock className="w-4 h-4 text-green-600" />
                          Data encryption in transit and at rest
                        </li>
                        <li className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-green-600" />
                          Access control and authorization
                        </li>
                        <li className="flex items-center gap-2">
                          <Database className="w-4 h-4 text-green-600" />
                          Regular backup procedures
                        </li>
                        <li className="flex items-center gap-2">
                          <Eye className="w-4 h-4 text-green-600" />
                          24/7 security monitoring
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Your Rights */}
                <section id="your-rights" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Users className="w-6 h-6 text-blue-600" />
                    8. Your Rights
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-gray-900 mb-2">Access & Information</h3>
                      <p className="text-sm text-gray-600">Get copies of your processed data and understand how it's used</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-gray-900 mb-2">Correction & Updates</h3>
                      <p className="text-sm text-gray-600">Correct inaccurate data and update incomplete information</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-gray-900 mb-2">Data Deletion</h3>
                      <p className="text-sm text-gray-600">Request deletion of your data under certain conditions</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-gray-900 mb-2">Processing Restriction</h3>
                      <p className="text-sm text-gray-600">Limit how we process your data in specific circumstances</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-gray-900 mb-2">Data Portability</h3>
                      <p className="text-sm text-gray-600">Receive your data in a machine-readable format</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-gray-900 mb-2">Object to Processing</h3>
                      <p className="text-sm text-gray-600">Object to marketing activities and automated decision-making</p>
                    </div>
                  </div>
                </section>

                {/* Cookies */}
                <section id="cookies" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-blue-600" />
                    9. Cookies Policy
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-red-50 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                        <p className="text-sm text-gray-600">Required for website functionality</p>
                      </div>
                      
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                        <p className="text-sm text-gray-600">Help us understand website usage</p>
                      </div>
                      
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                        <p className="text-sm text-gray-600">Enhance user experience</p>
                      </div>
                      
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                        <p className="text-sm text-gray-600">For targeted advertising</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700">
                        You can manage cookie preferences through your browser settings or our consent management platform.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Contact */}
                <section id="contact" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Mail className="w-6 h-6 text-blue-600" />
                    12. Contact Information
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900">Data Protection Officer</h3>
                      <div className="space-y-2 text-gray-700">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-blue-600" />
                          <span>privacy@chesterfrontline.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span>Response time: Up to 30 days</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900">General Support</h3>
                      <div className="space-y-2 text-gray-700">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-green-600" />
                          <span>support@chesterfrontline.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-green-600" />
                          <span>Available: 24/7</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Complaints & Disputes:</strong> If you disagree with our data processing practices, 
                      you can contact us directly, file a complaint with your local data protection authority, 
                      or seek legal remedies under applicable law.
                    </p>
                  </div>
                </section>

                {/* Footer Note */}
                <div className="pt-8 border-t border-gray-200">
                  <p className="text-center text-gray-500 text-sm">
                    This Privacy Policy is effective as of March 2024 and applies to all Chester Frontline services.
                  </p>
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

export default PrivacyPolicyPage;