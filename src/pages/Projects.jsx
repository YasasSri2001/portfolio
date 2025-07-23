import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform with product listings, cart functionality, and user authentication.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      githubLink: "https://github.com/YasasSri2001/E---Commerce-Site",
      image: "/ecommerce.jpg"
    },
    {
      title: "Mobile Task Manager",
      description: "A cross-platform mobile application for managing daily tasks with reminders and priority settings.",
      technologies: ["Android Studio(java)", "Firebase"],
      githubLink: "https://github.com/YasasSri2001/HNS-APP",
      image: "/taskmanager.jpg"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["REACT JS", "TailwindCSS", "JavaScript"],
      githubLink: "https://github.com/YasasSri2001/portfolio",
      image: "/portfolio.jpg"
    },
    {
      title: "Smart City Application",
      description: "A smart city application that supports urban planning and helps citizens stay prepared for environmental changes.",
      technologies: ["JavaScript", "API Integration"],
      githubLink: "https://github.com/YasasSri2001/Smart-City-Now",
      image: "/weather.jpg"
    },
    {
      title: "Student Management System",
      description: "A desktop application for managing student records, grades, and attendance.",
      technologies: ["Java", "MySQL"],
      githubLink: "#",
      image: "/student-system.jpg"
    },
    {
      title: "Blog Platform",
      description: "A content management system for creating and publishing blog posts with user comments.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
      githubLink: "#",
      image: "/blog.jpg"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">My Projects</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one represents a unique challenge and learning opportunity.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            variants={item}
            whileHover={{ y: -5 }}
          >
            <ProjectCard 
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              image={project.image}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-16"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Have a project in mind?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition-colors"
        >
          Let's Talk
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Projects;