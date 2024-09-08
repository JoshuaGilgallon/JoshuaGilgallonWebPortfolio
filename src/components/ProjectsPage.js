import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projectsData from './ProjectsData';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-gray-800 p-4">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Joshua Gilgallon</Link>
          <Link to="/" className="text-blue-400 hover:text-blue-300">Back to Home</Link>
        </nav>
      </header>
      <main className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </main>
      <footer className="absolute bottom-0 w-full bg-gray-800 text-center p-4">
        <p>&copy; 2024 Joshua Gilgallon. All rights reserved.</p>
      </footer>
    </div>
  );
};

const ProjectCard = ({ id, title, briefDescription, image }) => (
  <motion.div 
    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 flex-1">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-300 mb-4">{briefDescription}</p>
    </div>
    <div className="p-6">
      <Link 
        to={`/projects/${id}`}
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Learn More
      </Link>
    </div>
  </motion.div>
);

export default ProjectsPage;
