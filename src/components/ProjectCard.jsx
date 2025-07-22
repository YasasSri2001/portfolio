const ProjectCard = ({ title, description, technologies, githubLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="skill-badge">{tech}</span>
          ))}
        </div>
        
        {githubLink && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;