import { motion } from "framer-motion";
import { Globe, BarChart3, Shield, Users, TrendingUp, Briefcase, Award, ChevronRight, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/Card";

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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Services data
const services = [
  {
    id: 1,
    title: "Global Business Solutions",
    description: "Comprehensive services tailored to meet your international business needs, including market entry strategies, cross-border operations, and global expansion planning.",
    icon: <Globe className="h-12 w-12 text-amber-500" />,
    features: [
      "Market Entry Strategies",
      "International Expansion Planning",
      "Cross-Border Operations Management",
      "Global Supply Chain Optimization"
    ],
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Global%20business%20team%20meeting%20world%20map%20gold%20accent&sign=60841ac92825c5a1f97ec25a4945cd0e"
  },
  {
    id: 2,
    title: "Strategic Consulting",
    description: "Expert guidance to navigate complex business challenges and opportunities, helping you make informed decisions that drive growth and profitability.",
    icon: <BarChart3 className="h-12 w-12 text-amber-500" />,
    features: [
      "Business Strategy Development",
      "Market Analysis & Research",
      "Competitive Intelligence",
      "Growth Strategy Implementation"
    ],
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Business%20strategy%20planning%20meeting%20chart%20data%20gold%20accent&sign=32a66e7919e483a256518097b5de8473"
  },
  {
    id: 3,
    title: "Risk Management",
    description: "Proactive approaches to identify, assess, and mitigate business risks, ensuring continuity and resilience in an unpredictable global environment.",
    icon: <Shield className="h-12 w-12 text-amber-500" />,
    features: [
      "Risk Assessment & Analysis",
      "Business Continuity Planning",
      "Compliance & Regulatory Advisory",
      "Crisis Management Strategies"
    ],
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Risk%20management%20business%20security%20concept%20gold%20accent&sign=74d8c3d7b0c73f0e96992b71ca26055e"
  },
  {
    id: 4,
    title: "Talent Development",
    description: "Building high-performance teams through strategic HR solutions, leadership development, and organizational design optimized for success.",
    icon: <Users className="h-12 w-12 text-amber-500" />,
    features: [
      "Leadership Development Programs",
      "Talent Acquisition Strategy",
      "Organizational Design",
      "Performance Management Systems"
    ],
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Business%20team%20workshop%20talent%20development%20gold%20accent&sign=5eec73e06a774fc7a77167c60a43b578"
  },
  {
    id: 5,
    title: "Digital Transformation",
    description: "Leveraging the latest technologies to transform your business processes, enhance customer experiences, and drive digital innovation.",
    icon: <TrendingUp className="h-12 w-12 text-amber-500" />,
    features: [
      "Digital Strategy Development",
      "Process Automation",
      "Data Analytics & Insights",
      "Technology Implementation"
    ],
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Digital%20transformation%20business%20technology%20concept%20gold%20accent&sign=415ca668010356fc7e230fb7e3b03c17"
  },
  {
    id: 6,
    title: "Financial Advisory",
    description: "Comprehensive financial guidance to optimize your business performance, improve cash flow, and maximize profitability.",
    icon: <Briefcase className="h-12 w-12 text-amber-500" />,
    features: [
      "Financial Planning & Analysis",
      "Cash Flow Optimization",
      "Investment Strategy",
      "Mergers & Acquisitions Support"
    ],
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Financial%20advisory%20business%20investment%20gold%20accent&sign=92d889353522c2ea69b65f83ced0cce1"
  }
];

// Client industries
const industries = [
  "Technology & Innovation",
  "Financial Services",
  "Healthcare & Pharmaceuticals",
  "Manufacturing & Industrial",
  "Retail & Consumer Goods",
  "Energy & Natural Resources",
  "Transportation & Logistics",
  "Real Estate & Construction"
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Business%20services%20collaboration%20team%20meeting%20gold%20accent&sign=f3ec6f938090173b6d81d49bce7d75f4')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Comprehensive Solutions for Your Business Success
            </p>
            <a 
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all inline-block text-center"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Service Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Business Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a complete suite of services designed to address the unique challenges of modern businesses in a competitive global marketplace.
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={slideUp}
                whileHover={{ y: -5 }}
                className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-6">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                   <a href="/services" className="text-amber-600 font-medium flex items-center gap-2 hover:text-amber-800 transition-colors">
                     Learn more <ChevronRight size={16} />
                   </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Service Details */}
      {services.slice(0, 3).map((service, index) => (
        <section 
          key={service.id} 
          className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={slideUp}
                className={index % 2 === 0 ? 'order-2 md:order-2' : 'order-2 md:order-1'}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <div className="w-16 h-1 bg-amber-500 mb-6"></div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                 <a 
                  href="/services"
                  className="px-6 py-2.5 bg-gray-900 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-gray-800 transition-all flex items-center gap-2"
                >
                  Learn more <ArrowRight size={16} />
                </a>
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={slideUp}
                className={`order-1 md:order-${index % 2 === 0 ? 1 : 2} rounded-2xl overflow-hidden shadow-2xl`}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
              Industries We Serve
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Our expertise spans across diverse industries, providing tailored solutions to meet specific sector challenges.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 text-center"
              >
                <h3 className="text-lg font-semibold text-amber-400">{industry}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose SAMTOP GROUP</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
              className="order-2 md:order-2"
            >
              <div className="space-y-6">
                {[
                  {
                    title: "Global Expertise",
                    description: "With operations across three continents, we bring a truly international perspective to your business challenges."
                  },
                  {
                    title: "Industry Experience",
                    description: "Our team of experts has deep domain knowledge across multiple industries, ensuring relevant and effective solutions."
                  },
                  {
                    title: "Customized Approach",
                    description: "We tailor our services to meet your specific needs, recognizing that every business has unique challenges and goals."
                  },
                  {
                    title: "Proven Results",
                    description: "With over 200 satisfied clients worldwide, our track record of success speaks for itself."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="bg-amber-100 text-amber-600 rounded-full p-2 h-fit mt-1">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
              className="order-1 md:order-1 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Business%20success%20team%20celebration%20collaboration%20gold%20accent&sign=d324396af752c2c49f9162f5b7443097" 
                alt="Why Choose Us" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Service Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured approach to delivering exceptional results for our clients.
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
          </motion.div>
          
    <div className="relative max-w-4xl mx-auto">
      {/* Process Steps */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-amber-200 -translate-x-1/2"></div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {[
          {
            title: "Discovery & Assessment",
            description: "We begin by understanding your business goals, challenges, and unique requirements through in-depth consultations and analysis."
          },
          {
            title: "Strategy Development",
            description: "Our team of experts develops a customized strategy tailored to your specific needs and objectives, leveraging our industry knowledge and global perspective."
          },
          {
            title: "Implementation",
            description: "We execute the agreed-upon strategy with precision, providing ongoing support and guidance throughout the implementation process."
          },
          {
            title: "Monitoring & Optimization",
            description: "We continuously monitor results, gather feedback, and make adjustments to ensure optimal performance and maximum return on investment."
          }
        ].map((step, index) => (
          <motion.div
            key={index}
            variants={slideUp}
            className="mb-12 md:mb-20 relative"
          >
            <div className="flex md:block items-center">
              {/* Dot - always on the left for mobile, alternating for desktop */}
              <div className="w-12 h-12 rounded-full bg-amber-500 border-4 border-white flex items-center justify-center z-10 md:absolute"
                   style={{ 
                     left: index % 2 === 0 ? '50%' : '50%',
                     transform: 'translateX(-50%)'
                   }}>
                <span className="text-xs font-bold text-white">{index + 1}</span>
              </div>
              
              {/* Content - always below dot for mobile, alternating for desktop */}
              <div className={`ml-6 md:ml-0 md:w-[45%] ${
                index % 2 === 0 
                  ? 'md:text-right md:pr-12 md:mr-auto md:relative md:after:absolute md:after:top-6 md:after:right-0 md:after:w-10 md:after:h-0.5 md:after:bg-amber-200' 
                  : 'md:pl-12 md:ml-auto md:relative md:after:absolute md:after:top-6 md:after:left-0 md:after:w-10 md:after:h-0.5 md:after:bg-amber-200'
              }`}>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Business%20partnership%20agreement%20handshake%20gold%20accent&sign=b7b6dd1e42c931263bc4ca68e46c898e')] bg-cover bg-center"></div>
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
              Partner with SAMTOP GROUP and unlock your business's full potential with our comprehensive suite of services.
            </p>
            <a 
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all inline-block text-center"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}