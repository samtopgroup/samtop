  import { motion } from "framer-motion";
  import { useRef } from "react";
  import { MapPin, Mail, Phone, Globe, Clock, Facebook, Twitter, Linkedin, Instagram, Send, Plus, Minus } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { toast } from 'sonner';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8 }
  }
};

// Contact information
const contactInfo = {
  address: "123 Business Avenue, Central District, London, EC1A 2BN, United Kingdom",
  phone: "+44 (0) 20 7123 4567",
  email: "info@samtopgroup.com",
  website: "www.samtopgroup.com",
  hours: "Monday - Friday: 9:00 AM - 6:00 PM GMT"
};

// Office locations
const officeLocations = [
  {
    location: "London Headquarters",
    address: "123 Business Avenue, Central District, London, EC1A 2BN, United Kingdom",
    phone: "+44 (0) 20 7123 4567",
    email: "london@samtopgroup.com"
  },
  {
    location: "New York Office",
    address: "456 Wall Street, Financial District, New York, NY 10004, United States",
    phone: "+1 (212) 555-7890",
    email: "newyork@samtopgroup.com"
  },
  {
    location: "Hong Kong Office",
    address: "789 Queen's Road, Central, Hong Kong SAR",
    phone: "+852 2888 1234",
    email: "hongkong@samtopgroup.com"
  }
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success("Thank you for your message! We'll get back to you soon.");
    
    // Reset form
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Modern%20office%20reception%20area%20gold%20accent&sign=5b075c4c1c6c76d1e01f3b06e9306363')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Let's Connect and Discuss How We Can Help Your Business Grow
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 text-amber-600 p-3 rounded-xl">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-700">{contactInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 text-amber-600 p-3 rounded-xl">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href={`tel:${contactInfo.phone}`} className="text-gray-700 hover:text-amber-600 transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 text-amber-600 p-3 rounded-xl">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-700 hover:text-amber-600 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 text-amber-600 p-3 rounded-xl">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Website</h3>
                    <a href={`https://${contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 transition-colors">
                      {contactInfo.website}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 text-amber-600 p-3 rounded-xl">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-700">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-900 text-white p-3 rounded-full hover:bg-amber-600 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-900 text-white p-3 rounded-full hover:bg-amber-600 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-900 text-white p-3 rounded-full hover:bg-amber-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-900 text-white p-3 rounded-full hover:bg-amber-600 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
            >
              <div className="bg-gray-50 p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={18} />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Global Presence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With offices strategically located around the world, we're ready to serve your business wherever you are.
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, delay: index * 0.1 }
                  }
                }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{office.location}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-700">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="text-gray-700 hover:text-amber-600 transition-colors">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-gray-700 hover:text-amber-600 transition-colors">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Interactive Map</h2>
            <p className="text-gray-600">Click on markers to view our office locations</p>
          </motion.div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] relative bg-blue-50">
            {/* Interactive Map */}
            <div id="interactive-map" className="absolute inset-0 bg-[url('https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=World%20map%20with%20gold%20accent%20and%20pinpoints%20on%20major%20cities&sign=31f7ee0e4e96f14598c78d755fbed000')] bg-cover bg-center">
              {/* Map Overlay for Interactivity */}
              <div className="absolute inset-0 bg-blue-900/5"></div>
              
              {/* Map Markers */}
              {[
                { name: "London", top: "40%", left: "25%", address: "123 Business Avenue, Central District, London, EC1A 2BN, United Kingdom" },
                { name: "New York", top: "40%", left: "70%", address: "456 Wall Street, Financial District, New York, NY 10004, United States" },
                { name: "Hong Kong", top: "65%", left: "85%", address: "789 Queen's Road, Central, Hong Kong SAR" }
              ].map((location, index) => (
                <motion.div 
                  key={index}
                  className="absolute cursor-pointer group"
                  style={{ top: location.top, left: location.left }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="bg-amber-500 text-white p-2 rounded-full shadow-lg relative">
                    <MapPin className="h-5 w-5" />
                    {/* Location Info Popup */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white rounded-lg shadow-xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                      <h4 className="font-semibold text-gray-900">{location.name} Office</h4>
                      <p className="text-xs text-gray-600 mt-1">{location.address}</p>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Map Controls */}
              <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                <button className="bg-white p-2 rounded-md shadow-md hover:bg-gray-100 transition-colors">
                  <Plus className="h-5 w-5 text-gray-700" />
                </button>
                <button className="bg-white p-2 rounded-md shadow-md hover:bg-gray-100 transition-colors">
                  <Minus className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Business%20handshake%20agreement%20partnership%20gold%20accent&sign=41e07a7c9cb6c3642512ce4e82d2a099')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Contact us today to schedule a consultation and discover how we can help your business achieve its goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <a
                href={`tel:${contactInfo.phone}`}
                className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                 Call Us Now
               </a>
               <a
                href={`mailto:${contactInfo.email}`}
                className="px-8 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 font-semibold rounded-full hover:bg-yellow-500/10 transition-all flex items-center justify-center gap-2">
                 Email Us
               </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}