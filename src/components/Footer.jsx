import React from "react";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

// Кастомная иконка X
const XIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/chester.frontline?igsh=YWdid201b3I0Y3ph",
      label: "Follow us on Instagram",
    },
    {
      name: "X",
      icon: XIcon,
      href: "https://x.com/ch_frontline?s=21",
      label: "Follow us on X",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/chester-frontline-6a70b4348/",
      label: "Connect with us on LinkedIn",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61579092538790",
      label: "Connect with us on Facebook",
    },
  ];

  const contactEmails = [
    {
      label: "General Inquiries",
      email: "info@chesterfrontline.com",
    },
    {
      label: "Support",
      email: "support@chesterfrontline.com",
    },
  ];

  const footerLinks = [
    { name: "Privacy", href: "/privacy-policy" },
    { name: "Terms", href: "/terms-of-service" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
          {/* Left Section - Contact Info */}
          <div className="space-y-4">
            {/* Contact Emails */}
            <div className="space-y-2">
              {contactEmails.map((contact, index) => (
                <div key={index}>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
                  >
                    {contact.email}
                  </a>
                </div>
              ))}
            </div>

            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.prod.website-files.com/67fa38ea4d1466d740505645/67fc93edd95521ad2723f514_NO%20BG.png"
                alt="Chester Frontline Logo"
                className="w-30 h-30 object-contain"
              />
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                CHESTER FRONTLINE
              </span>
            </div>
          </div>

          {/* Right Section - Social Links */}
          <div className="flex flex-col items-start lg:items-end gap-4">
            {/* Social Media */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent size={18} />
                    <span className="font-medium text-sm">{social.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Footer Links */}
            <div className="flex items-center gap-6">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Chester Frontline. All rights reserved.
            </p>

            {/* Additional Info */}
            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <span>Professional call center solutions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;