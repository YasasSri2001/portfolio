import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">UDULA MADAWALA</h3>
            <p className="text-gray-400 mt-2">Software Engineer & Web Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/UdulAM13868" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="mailto:udulamadawala789@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <FaEnvelope size={24} />
            </a>
            <a href="tel:+94776529679" className="text-gray-400 hover:text-white transition-colors">
              <span className="text-sm">077-6529679</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Udula Madawala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;