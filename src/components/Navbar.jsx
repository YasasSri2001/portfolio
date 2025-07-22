import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0">
            <span className="text-xl font-bold text-blue-600">UDULA MADAWALA</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none">
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white pb-3 px-4">
          <Link to="/" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to="/about" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">About</Link>
          <Link to="/projects" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Projects</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;