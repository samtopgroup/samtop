import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe, Mail, Phone, Facebook, Twitter, Linkedin } from 'lucide-react';

// Navbar component
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
  ];

  // Animation variants
  const navbarVariants = {
    scrolled: { backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' },
    default: { backgroundColor: 'transparent', backdropFilter: 'blur(0px)', boxShadow: 'none' },
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      variants={navbarVariants}
      style={isScrolled ? navbarVariants.scrolled : navbarVariants.default}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              SAMTOP GROUP
            </motion.div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className={`font-medium hover:text-amber-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {link.name}
              </motion.a>
            ))}
           <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
                 className={`px-5 py-2 rounded-full font-medium ${
                   isScrolled 
                     ? 'bg-gray-900 text-white hover:bg-gray-800' 
                     : 'bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 hover:from-yellow-500 hover:to-amber-600'
                 } transition-colors`}>
              Contact Us
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden ${isScrolled ? 'bg-white shadow-lg' : 'bg-gray-900'}`}
            >
              <div className="px-4 py-3 space-y-2">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`block py-2 font-medium ${
                      isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 pb-3">
                 <a href="/contact" className={`w-full px-5 py-2 rounded-full font-medium ${
                   isScrolled 
                     ? 'bg-gray-900 text-white hover:bg-gray-800' 
                     : 'bg-white text-gray-900 hover:bg-gray-50'
                 } transition-colors text-center inline-block`}>
                   Contact Us
                 </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}