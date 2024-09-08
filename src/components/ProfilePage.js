import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Camera, Code, Music, ChevronDown, ArrowRight  } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const projectsSection = document.getElementById('about');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToInterests = () => {
    const interestsSection = document.getElementById('interests');
    interestsSection.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="fixed w-full bg-gray-800 p-4 z-10">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">Joshua Gilgallon</h1>
          <ul className="flex space-x-4">
            <li><a onClick={scrollToAbout} style={{ cursor: 'pointer' }} className="hover:text-blue-400 transition-colors">About</a></li>
            <li><a onClick={scrollToInterests} style={{ cursor: 'pointer' }} className="hover:text-blue-400 transition-colors">Interests</a></li>
            <li><a onClick={scrollToProjects} style={{ cursor: 'pointer' }} className="hover:text-blue-400 transition-colors">Projects</a></li>
            <li><a href="photography" className="hover:text-blue-400 transition-colors">Photography</a></li>
          </ul>
        </nav>
      </header>

      <main className="pt-20">
        <section id="about" className="min-h-screen flex flex-col justify-center items-center text-center p-4">
          <motion.h2 
            className="text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hello, I'm Josh
          </motion.h2>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            15-year-old coding enthusiast, photographer, and music lover
          </motion.p>
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Code size={48} />
            <Camera size={48} />
            <Music size={48} />
          </motion.div>
        </section>
       <section id="interests" className="min-h-screen flex flex-col justify-center items-center p-4 bg-gray-800">
          <h2 className="text-4xl font-bold mb-8">My Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <InterestCard 
              icon={<Code size={32} />} 
              title="Coding" 
              description="I love creating and problem-solving through code."
              buttonText="View Projects"
              onClick={scrollToProjects}
            />
            <InterestCard 
              icon={<Camera size={32} />} 
              title="Photography" 
              description="Capturing moments and expressing creativity through images."
              buttonText="View Gallery"
              to="/photography"
            />
            <InterestCard 
              icon={<Music size={32} />} 
              title="Music" 
              description="Exploring various genres and creating my own melodies."
            />
          </div>
        </section>
        <section id="projects" className="min-h-screen flex flex-col justify-center items-center p-4">
          <h2 className="text-4xl font-bold mb-8">My Projects</h2>
          <p className="text-xl mb-4">Check out some of my recent work:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <ProjectCard title="Project 1" description="A brief description of your first project." />
            <ProjectCard title="Project 2" description="A brief description of your second project." />
            <ProjectCard title="Project 3" description="A brief description of your third project." />
            <ProjectCard title="Project 4" description="A brief description of your fourth project." />
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-center p-4">
        <p>&copy; 2024 Joshua Gilgallon. All rights reserved.</p>
      </footer>

      <motion.div 
        className="fixed bottom-4 right-4 bg-blue-500 rounded-full p-2 cursor-pointer"
        animate={{ y: scrollY > 100 ? 0 : 100 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronDown size={24} className="transform rotate-180" />
      </motion.div>
    </div>
  );
};

const InterestCard = ({ icon, title, description, buttonText, onClick, to }) => {
  const [isHovered, setIsHovered] = useState(false);

  const ButtonComponent = to ? Link : 'button';



  return (
    <motion.div 
      className="bg-gray-700 p-6 rounded-lg text-center relative overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}

    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
      {buttonText && (
        <motion.div
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
          initial={{ x: '100%' }}
          animate={{ x: isHovered ? '0%' : '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <ButtonComponent
            to={to}
            onClick={onClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-l-full flex items-center"
          >
            {buttonText} <ArrowRight size={16} className="ml-2" />
          </ButtonComponent>
        </motion.div>
      )}
    </motion.div>
  );
};
const ProjectCard = ({ title, description }) => (
  <motion.div 
    className="bg-gray-800 p-6 rounded-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
      Learn More
    </button>
  </motion.div>
);

export default ProfilePage;
