import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaLaptopCode, FaBrain, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const stats = [
    { value: "1", label: "Years Learning" },
    { value: "4+", label: "Projects Completed" },
    { value: "5", label: "Technologies" },
    { value: "100%", label: "Dedication" }
  ];

  const services = [
    {
      icon: <FaCode className="text-3xl mb-4 text-blue-600" />,
      title: "Web Development",
      description: "Building responsive and interactive websites using modern technologies."
    },
    {
      icon: <FaMobileAlt className="text-3xl mb-4 text-blue-600" />,
      title: "Mobile Apps",
      description: "Creating cross-platform mobile applications with React Native."
    },
    {
      icon: <FaLaptopCode className="text-3xl mb-4 text-blue-600" />,
      title: "UI/UX Design",
      description: "Designing intuitive and visually appealing user interfaces."
    },
    {
      icon: <FaBrain className="text-3xl mb-4 text-blue-600" />,
      title: "Problem Solving",
      description: "Developing efficient solutions to complex technical challenges."
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex flex-col md:flex-row items-center"
        >
          <motion.div 
            variants={item}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <motion.h1 
              variants={item}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Hi, I'm <motion.span 
                className="text-blue-600"
                animate={{ 
                  color: ['#3B82F6', '#1E40AF', '#3B82F6'],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >Udula Madawala</motion.span>
            </motion.h1>
            
            <motion.h2 
              variants={item}
              className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6"
            >
              Software Engineering Student & Developer
            </motion.h2>
            
            <motion.p 
              variants={item}
              className="text-gray-600 mb-8 text-lg"
            >
              I'm passionate about creating web and mobile applications with modern technologies.
              Currently pursuing my Bachelor's degree in Software Engineering.
            </motion.p>
            
            <motion.div 
              variants={item}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <motion.a 
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View My Work <FaArrowRight className="ml-2" />
              </motion.a>
              
              <motion.a 
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Contact Me <FaArrowRight className="ml-2" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={item}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 0.9, 0.7]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-4 bg-blue-100 rounded-full"
              ></motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative bg-white rounded-full p-2 shadow-xl"
              >
                <img 
                  src="/profile.jpg" 
                  alt="Udula Madawala" 
                  className="rounded-full w-64 h-64 object-cover border-4 border-white"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 bg-blue-600 text-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="p-4"
              >
                <motion.p 
                  className="text-4xl font-bold mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What I Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I provide comprehensive development services to bring your digital ideas to life.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">My Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I work with regularly
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05
                }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {[
              { name: 'HTML', level: '90%' },
              { name: 'CSS', level: '85%' },
              { name: 'JavaScript', level: '80%' },
              { name: 'Java', level: '75%' },
              { name: 'React', level: '80%' },
              { name: 'UI Design', level: '70%' },
              { name: 'Mobile Dev', level: '70%' },
              { name: 'Problem Solving', level: '85%' },
              { name: 'Team Work', level: '90%' },
              { name: 'Data Entry', level: '95%' },
              { name: 'Word', level: '90%' },
              { name: 'Excel', level: '85%' }
            ].map((skill, index) => (
              <motion.div 
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { type: "spring", stiffness: 300 }
                  }
                }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="relative pt-1 mb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mt-2 text-xs flex rounded bg-blue-200">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-blue-600 text-white"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Start a Project?</h2>
          <p className="text-xl mb-8">
            I'm available for freelance work and collaborations. Let's discuss how I can help bring your ideas to life.
          </p>
          <motion.a 
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Get In Touch <FaArrowRight className="ml-2" />
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;