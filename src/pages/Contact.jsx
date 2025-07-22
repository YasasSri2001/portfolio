import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  const contactItems = [
    {
      icon: <FaPhone className="text-blue-600 text-xl" />,
      title: "Call Me",
      info: "+94 77 652 9679",
      secondaryInfo: "+94 74 231 5794",
      link: "tel:+94776529679"
    },
    {
      icon: <FaEnvelope className="text-blue-600 text-xl" />,
      title: "Email Me",
      info: "udulamadawala789@gmail.com",
      link: "mailto:udulamadawala789@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-blue-600 text-xl" />,
      title: "Location",
      info: "Nugahinna, Kalapitiya",
      secondaryInfo: "Hedunuwewa, Sri Lanka"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      name: "GitHub",
      url: "https://github.com/UdulAM13868",
      color: "bg-gray-800 hover:bg-gray-700"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      name: "LinkedIn",
      url: "#",
      color: "bg-blue-700 hover:bg-blue-600"
    },
    {
      icon: <FaTwitter className="text-xl" />,
      name: "Twitter",
      url: "https://twitter.com/UdulAM13868",
      color: "bg-sky-500 hover:bg-sky-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {contactItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className="text-blue-600 hover:underline">
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.info}</p>
                    )}
                    {item.secondaryInfo && (
                      <p className="text-gray-600 mt-1">{item.secondaryInfo}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media Links */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -3 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white p-3 rounded-full transition-colors`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Location Map Placeholder */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">My Location</h3>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.715949034913!2d80.6356743153635!3d7.268443994753282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae368a77d5cbf91%3A0xba828c0e203b5306!2sColombo!5e0!3m2!1sen!2slk!4v1620000000000!5m2!1sen!2slk"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Location Map"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h2>
            
            {submitMessage && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg"
              >
                {submitMessage}
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Hi Udula, I'd like to talk about..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} transition-colors`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FaPaperPlane className="ml-2" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;