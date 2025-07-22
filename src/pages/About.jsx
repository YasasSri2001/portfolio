import { FaGraduationCap, FaLaptopCode, FaAward, FaUserTie } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const About = () => {
  const education = [
    {
      icon: <FaGraduationCap className="text-blue-500 text-2xl" />,
      degree: "Bachelor of Software Engineering (Following)",
      institution: "The Open University of Sri Lanka, Kandy",
      year: "2023 - Present",
      description: "Currently pursuing undergraduate degree with focus on modern software development practices."
    },
    {
      icon: <FaAward className="text-blue-500 text-2xl" />,
      degree: "G.C.E Advanced Level Examination",
      institution: "Harangala National School",
      year: "2021",
      description: "Completed with good results in Mathematics stream."
    },
    {
      icon: <FaAward className="text-blue-500 text-2xl" />,
      degree: "G.C.E Ordinary Level Examination",
      institution: "Harangala National School",
      year: "2017",
      description: "Achieved excellent results with distinctions in key subjects."
    }
  ];

  const courses = [
    {
      title: "Computer Application Assistant",
      institution: "Vocational Training Authority of Sri Lanka",
      year: "2022"
    },
    {
      title: "English Course",
      institution: "Kekirawa English Academy",
      year: "2018"
    },
    {
      title: "Java Programming",
      institution: "Online Certification",
      year: "2023"
    },
    {
      title: "Web Development (HTML/CSS/JS)",
      institution: "Online Certification",
      year: "2023"
    },
    {
      title: "Mobile App Development",
      institution: "Online Certification",
      year: "2024"
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-16 px-4 max-w-6xl mx-auto"
    >
      {/* Hero Section */}
      <motion.div 
        variants={itemVariants}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          About <span className="text-blue-600">Me</span>
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          I'm a passionate software engineering student with expertise in web and mobile development, 
          dedicated to creating efficient and user-friendly digital solutions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Personal Info Card */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-1"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-8">
            <div className="bg-blue-600 py-4 px-6">
              <h2 className="text-xl font-bold text-white flex items-center">
                <FaUserTie className="mr-2" /> Personal Information
              </h2>
            </div>
            <div className="p-6">
              <motion.div 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="text-center mb-6"
              >
                <div className="inline-block relative">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.7, 0.9, 0.7]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3,
                      ease: "easeInOut"
                    }}
                    className="absolute -inset-1 bg-blue-100 rounded-full"
                  ></motion.div>
                  <img 
                    src="/profile.jpg" 
                    alt="Udula Madawala" 
                    className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-md mx-auto"
                  />
                </div>
              </motion.div>

              <div className="space-y-4">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaUserTie className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Full Name</h3>
                    <p className="text-gray-600">Madawala Gedara Udula Indumina Yasas Sri Rathmal Bandara Madawala</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <IoLocationOutline className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Location</h3>
                    <p className="text-gray-600">Nugahinna, Kalapitiya, Hedunuwewa, Sri Lanka</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <MdOutlineEmail className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Email</h3>
                    <p className="text-gray-600">udulamadawala789@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <MdOutlinePhone className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Phone</h3>
                    <p className="text-gray-600">077-6529679 / 074-2315794</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4 border-t border-gray-200"
                >
                  <h3 className="font-medium text-gray-700 mb-2">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <motion.span 
                      whileHover={{ y: -3 }}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      Sinhala (Native)
                    </motion.span>
                    <motion.span 
                      whileHover={{ y: -3 }}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      English (Fluent)
                    </motion.span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="md:col-span-2">
          {/* About Me Section */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
          >
            <div className="bg-blue-600 py-4 px-6">
              <h2 className="text-xl font-bold text-white">My Story</h2>
            </div>
            <div className="p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="prose max-w-none"
              >
                <p className="text-gray-700 mb-4">
                  I'm a dedicated software engineering student with a passion for creating digital solutions that make an impact. 
                  My journey in technology began during my school years, where I first discovered my love for problem-solving 
                  through programming.
                </p>
                <p className="text-gray-700 mb-4">
                  Currently pursuing my Bachelor's degree at The Open University of Sri Lanka, I've complemented my formal 
                  education with numerous certifications and practical projects that have honed my skills in web and mobile 
                  application development.
                </p>
                <p className="text-gray-700">
                  What drives me is the opportunity to transform ideas into functional, user-friendly applications. I take pride 
                  in writing clean, efficient code and designing intuitive interfaces that provide seamless user experiences.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
          >
            <div className="bg-blue-600 py-4 px-6">
              <h2 className="text-xl font-bold text-white flex items-center">
                <FaGraduationCap className="mr-2" /> Education
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex"
                  >
                    <div className="flex-shrink-0 mr-4 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.degree}</h3>
                      <p className="text-gray-600">{item.institution} | {item.year}</p>
                      <p className="text-gray-700 mt-2">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Courses & Certifications */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
          >
            <div className="bg-blue-600 py-4 px-6">
              <h2 className="text-xl font-bold text-white flex items-center">
                <FaLaptopCode className="mr-2" /> Courses & Certifications
              </h2>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {courses.map((course, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -5 }}
                    className="border-l-4 border-blue-500 pl-4 py-2"
                  >
                    <h3 className="font-medium text-gray-800">{course.title}</h3>
                    <p className="text-gray-600 text-sm">{course.institution}</p>
                    <p className="text-blue-600 text-xs mt-1">{course.year}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="bg-blue-600 py-4 px-6">
              <h2 className="text-xl font-bold text-white flex items-center">
                <GiSkills className="mr-2" /> Technical Skills
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-800 mb-3">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {['HTML', 'CSS', 'JavaScript', 'Java'].map((skill, index) => (
                      <motion.span 
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-3">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Tailwind CSS', 'Bootstrap', 'Node.js'].map((skill, index) => (
                      <motion.span 
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-3">Tools & Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'VS Code', 'Figma', 'Android Studio'].map((skill, index) => (
                      <motion.span 
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-3">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Problem Solving', 'Team Leadership', 'Communication', 'Time Management'].map((skill, index) => (
                      <motion.span 
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;