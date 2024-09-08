import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Menu, X } from 'lucide-react';

const ProjectDetails = ({ projects }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { projectId } = useParams();

  // Find the project that matches the projectId
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-gray-800 p-4">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Joshua Gilgallon</Link>
          <div className="md:hidden">
            <motion.button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMenuOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
          <AnimatePresence>
            {(isMenuOpen || window.innerWidth >= 768) && (
              <motion.ul
                className="md:flex md:space-x-4 absolute md:relative top-full left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0 z-10"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <li>
                  <Link to="/" className="block py-2 md:py-0 hover:text-blue-400 transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/projects" className="block py-2 md:py-0 hover:text-blue-400 transition-colors">Projects</Link>
                </li>
                <li>
                  <Link to="/about" className="block py-2 md:py-0 hover:text-blue-400 transition-colors">About</Link>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4">
        <Link to="/projects" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Back to Projects
        </Link>
        
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-8" />
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
          <p>{project.description}</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <ul className="list-disc list-inside">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
          <p>{project.challenges}</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Outcome</h2>
          <p>{project.outcome}</p>
        </section>
      </main>

      <footer className="bg-gray-800 text-center p-4">
        <p>&copy; 2024 Joshua Gilgallon. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProjectDetails;
