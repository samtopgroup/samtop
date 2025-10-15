import { motion } from "framer-motion";
import { ArrowRight, Globe, BarChart3, Shield, Users, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/Card";

// Mock data for sections
const services = [
  {
    title: "Global Business Solutions",
    description: "Comprehensive services tailored to meet your international business needs.",
    icon: <Globe className="h-12 w-12 text-blue-600" />,
    bgColor: "bg-blue-50"
  },
  {
    title: "Strategic Consulting",
    description: "Expert guidance to navigate complex business challenges and opportunities.",
    icon: <BarChart3 className="h-12 w-12 text-indigo-600" />,
    bgColor: "bg-indigo-50"
  },
  {
    title: "Risk Management",
    description: "Proactive approaches to identify, assess, and mitigate business risks.",
    icon: <Shield className="h-12 w-12 text-purple-600" />,
    bgColor: "bg-purple-50"
  },
  {
    title: "Talent Development",
    description: "Building high-performance teams through strategic HR solutions.",
    icon: <Users className="h-12 w-12 text-cyan-600" />,
    bgColor: "bg-cyan-50"
  }
];

const stats = [
  { number: "15+", label: "Years of Experience" },
  { number: "50+", label: "Countries Served" },
  { number: "200+", label: "Satisfied Clients" },
  { number: "100+", label: "Expert Team Members" }
];

const testimonials = [
  {
    quote: "SAMTOP GROUP has transformed our business operations with their strategic insights and global perspective.",
    author: "Sarah Johnson",
    position: "CEO, TechVision Inc."
  },
  {
    quote: "The level of professionalism and expertise at SAMTOP GROUP is unmatched in the industry.",
    author: "Michael Chen",
    position: "Managing Director, Global Enterprises"
  }
];

const images = [
  "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern%20business%20team%20meeting%20in%20corporate%20boardroom&sign=02b516c7fe8fe4848e9c2cd53c2a88f3",
  "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Global%20business%20network%20connection%20visualization&sign=17bac3de59d36c760b97837216544bb1",
  "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Corporate%20headquarters%20modern%20building%20architecture&sign=abbb6bd969acd490cb40664d0f93b3d6"
];

export default function Home() {
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
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Business%20world%20global%20network%20connection%20abstract%20gold%20accent&sign=2cb6c40738bac9741e21adec5c951a8f')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
              SAMTOP GROUP LIMITED
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Global Business Excellence <span className="hidden md:inline">•</span> <br className="md:hidden" />
              Strategic Innovation <span className="hidden md:inline">•</span> <br className="md:hidden" />
              Exceptional Results
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Our Services <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 font-semibold rounded-full hover:bg-yellow-500/10 transition-all"
              >
                About Us
              </motion.button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About SAMTOP GROUP</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
              className="order-2 md:order-1"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">A Legacy of Excellence</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 2010, SAMTOP GROUP LIMITED has established itself as a global leader in providing comprehensive business solutions to enterprises of all sizes. With a focus on innovation, integrity, and client success, we have built a reputation for excellence across industries.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our multinational team of experts brings diverse perspectives and deep industry knowledge to every project, ensuring that our clients receive tailored solutions that drive real business results.
              </p>
            <a href="/about" className="flex items-center text-amber-600 font-medium gap-2 hover:text-amber-800 transition-colors">
              <span>Learn more about our journey</span>
              <ChevronRight size={18} />
            </a>
          </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
              className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-2 gap-2">
                {images.slice(0, 3).map((image, index) => (
                  <div key={index} className={`aspect-square overflow-hidden ${index === 0 ? 'col-span-2 row-span-2' : ''}`}>
                    <img 
                      src={image} 
                      alt={`SAMTOP GROUP corporate image ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }
                }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2 text-amber-400">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to address the unique challenges of modern businesses in a global marketplace.
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
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
                className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6 bg-gray-100">
                  <div className="text-amber-500">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                   <a href="/services" className="text-amber-600 font-medium flex items-center gap-2 hover:text-amber-800 transition-colors">
                     Learn more <ChevronRight size={16} />
                   </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
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
                    transition: { duration: 0.7, delay: index * 0.2 }
                  }
                }}
                className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100"
              >
                <div className="text-4xl text-amber-200 mb-6">"</div>
                <p className="text-gray-700 mb-8 italic leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-semibold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Business%20success%20strategy%20planning%20concept%20gold%20accent&sign=c73911bdcb7889e0c5e86d686cb4447c')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Partner with SAMTOP GROUP and unlock your business's full potential in the global marketplace.
            </p>
             <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all inline-block text-center"
              >
                Contact Us Today
              </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}