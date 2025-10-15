import { motion } from "framer-motion";
import { Users, Briefcase, Globe, ShieldCheck, TrendingUp, Award, ChevronRight } from "lucide-react";

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

const aboutHistory = [
  { year: "2010", event: "SAMTOP GROUP LIMITED founded in London" },
  { year: "2013", event: "Expanded operations to Asia Pacific region" },
  { year: "2016", event: "Established North American headquarters" },
  { year: "2019", event: "Achieved 100+ global clients milestone" },
  { year: "2022", event: "Launched innovative digital transformation services" },
  { year: "2025", event: "Continued global expansion and excellence" }
];

const coreValues = [
  {
    title: "Integrity",
    description: "We conduct business with the highest ethical standards and transparency.",
    icon: <ShieldCheck className="h-10 w-10 text-amber-500" />
  },
  {
    title: "Excellence",
    description: "We strive for exceptional quality in everything we do for our clients.",
    icon: <Award className="h-10 w-10 text-amber-500" />
  },
  {
    title: "Innovation",
    description: "We embrace creativity and forward-thinking to solve complex challenges.",
    icon: <TrendingUp className="h-10 w-10 text-amber-500" />
  },
  {
    title: "Global Perspective",
    description: "We leverage our international presence to provide comprehensive solutions.",
    icon: <Globe className="h-10 w-10 text-amber-500" />
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Business%20team%20collaboration%20executives%20meeting%20gold%20accent&sign=0e764cade31673c7a25b22a10c34321e')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
              About Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              A Legacy of Excellence and Global Leadership
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">A Journey of Excellence</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 2010, SAMTOP GROUP LIMITED began with a vision to provide exceptional business solutions to enterprises seeking to navigate the complexities of the global marketplace.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                From our headquarters in London, we have expanded our presence to major business hubs across Asia Pacific and North America, building a diverse team of industry experts dedicated to client success.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Today, we stand as a trusted partner to over 200 clients worldwide, delivering innovative solutions that drive growth, enhance efficiency, and create sustainable competitive advantages.
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern%20corporate%20headquarters%20building%20exterior%20architecture%20gold%20accent&sign=e0d6220c5607cf0266062593de96b1b7" 
                alt="SAMTOP GROUP Headquarters" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </motion.div>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200"></div>
            
            {/* Timeline Events */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="relative z-10"
            >
              {aboutHistory.map((item, index) => (
                <motion.div
                  key={index}
                  variants={slideUp}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <h3 className="text-xl font-bold text-amber-600 mb-2">{item.year}</h3>
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                  <div className="z-10 h-10 w-10 rounded-full bg-amber-500 border-4 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{index + 1}</span>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Business%20team%20working%20together%20in%20modern%20office%20gold%20accent&sign=b29b2838e1328bb62f2b16e3f690d3fe" 
                alt="Our Team" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To empower businesses worldwide with innovative solutions, strategic guidance, and unparalleled support that drive sustainable growth and success in an ever-evolving global marketplace.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the premier global business solutions provider, recognized for our excellence, integrity, and transformative impact on the organizations we serve.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
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
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-amber-400">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

        {/* Leadership Section */}
      <section id="leadership" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leaders who drive our commitment to excellence and innovation.
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Executive Team Members - Using more realistic profiles */}
            {[
              { name: "Robert Tan", position: "Chief Executive Officer", image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Asian%20business%20executive%20CEO%20portrait%20confident%20gold%20accent&sign=ef492a6412a73fd9b1aead5583c53453" },
              { name: "Claire Montague", position: "Chief Operating Officer", image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Caucasian%20business%20executive%20COO%20portrait%20confident%20gold%20accent&sign=c0e618bfc34258382c8be720ffbe0225" },
              { name: "Amit Patel", position: "Chief Financial Officer", image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Indian%20business%20executive%20CFO%20portrait%20confident%20gold%20accent&sign=f6b9795667e671a73d3e17b3bd9d6050" },
              { name: "Sophia Rodriguez", position: "Chief Strategy Officer", image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Hispanic%20business%20executive%20CSO%20portrait%20confident%20gold%20accent&sign=5ac2d96c8a1237d9cdcf336c48cdb977" }
            ].map((member, index) => (
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
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-amber-600 font-medium">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Business%20partnership%20handshake%20agreement%20concept%20gold%20accent&sign=acc78030f4c717d10df959ee302d5c5d')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl mb-8 text-gray-300">
              Partner with SAMTOP GROUP and experience the difference of working with a truly global business solutions provider.
            </p>
            <a 
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mx-auto"
            >
              Contact Us Today <ChevronRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}