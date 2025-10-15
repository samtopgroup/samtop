import React from 'react';
import { Mail, Phone, Globe, Facebook, Twitter, Linkedin, ChevronRight, MapPin } from 'lucide-react';

// Footer component
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400">SAMTOP GROUP LIMITED</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Providing exceptional business solutions and strategic guidance to enterprises worldwide since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-300 hover:text-amber-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-amber-300 hover:text-amber-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-amber-300 hover:text-amber-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-amber-400 flex items-center gap-1 transition-colors">
                  <ChevronRight size={14} className="text-amber-400" /> Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-amber-400 flex items-center gap-1 transition-colors">
                  <ChevronRight size={14} className="text-amber-400" /> About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-amber-400 flex items-center gap-1 transition-colors">
                  <ChevronRight size={14} className="text-amber-400" /> Services
                </a>
              </li>
              <li>
                <a href="/about#leadership" className="text-gray-300 hover:text-amber-400 flex items-center gap-1 transition-colors">
                  <ChevronRight size={14} className="text-amber-400" /> Our Team
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-amber-400 flex items-center gap-1 transition-colors">
                  <ChevronRight size={14} className="text-amber-400" /> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Global Business Solutions',
                'Strategic Consulting',
                'Risk Management',
                'Talent Development',
                'Digital Transformation',
                'Financial Advisory'
              ].map((item, index) => (
                <li key={index}>
                  <a href="/services" className="text-gray-300 hover:text-amber-400 flex items-center gap-1 transition-colors">
                    <ChevronRight size={14} className="text-amber-400" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-amber-400 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">123 Business Avenue, Central District, London, EC1A 2BN, United Kingdom</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-amber-400 flex-shrink-0" size={18} />
                <a href="tel:+442071234567" className="text-gray-300 hover:text-amber-400 transition-colors">+44 (0) 20 7123 4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-amber-400 flex-shrink-0" size={18} />
                <a href="mailto:info@samtopgroup.com" className="text-gray-300 hover:text-amber-400 transition-colors">info@samtopgroup.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="text-amber-400 flex-shrink-0" size={18} />
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">www.samtopgroup.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SAMTOP GROUP LIMITED. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}