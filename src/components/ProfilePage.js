import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Camera, Code, Music, ChevronDown, ArrowRight, Mail, MessageCircleMore, Bird, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import projectsData from './ProjectsData';

const ProfilePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animateText = async () => {
      while (true) {
        await controls.start({ width: 0, opacity: 1 });
        await controls.start({ width: '100%', transition: { duration: 1.5 } });
        await new Promise(resolve => setTimeout(resolve, 4000));
        await controls.start({ width: 0, transition: { duration: 0.5 } });
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    };
    animateText();
  }, [controls]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const socials = [
    { name: "GitHub", icon: <Code size={32} />, url: "https://github.com/JoshuaGilgallon" },
    { name: "Instagram", icon: <Camera size={32} />, url: "https://instagram.com/your-handle" },
    { name: "X", icon: <Bird size={32} />, url: "https://x.com/JoshGilgallon" },
    { name: "Email", icon: <Mail size={32} />, url: "mailto:joshuagilgallon@outlook.com" },
    { name: "Discord", icon: <MessageCircleMore size={32} />, url: "https://discord.com/users/985064786473668618"},
    { name: "Spotify", icon: <Music size={32} />, url: "https://open.spotify.com/user/nvlujlh4k7g3zs0pe3b3xniwu?si=4ceea86bf9b846f9"},
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans relative overflow-hidden">
      {/* Dynamic background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-50"
        style={{
          transform: `translate(${mousePosition.x / 200}px, ${mousePosition.y / 200}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />
      
      <header className="fixed w-full bg-gray-800 bg-opacity-90 p-4 z-20">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold md:text-3xl">Joshua Gilgallon</h1>
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
          className="md:flex md:space-x-4 absolute md:relative top-full left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {['about', 'interests', 'projects', 'socials'].map((section) => (
            <li key={section}>
              <a 
                onClick={() => scrollToSection(section)} 
                className="block py-2 md:py-0 hover:text-blue-400 transition-colors cursor-pointer"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>            
    <AnimatePresence>
            {isMenuOpen && (
              <motion.ul
                className="md:flex md:space-x-4 absolute md:relative top-full left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {['about', 'interests', 'projects', 'socials'].map((section) => (
                  <li key={section}>
                    <a 
                      onClick={() => scrollToSection(section)} 
                      className="block py-2 md:py-0 hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <main className="pt-20 relative z-10">
        <section id="about" className="h-screen flex flex-col justify-center items-center text-center p-4 relative overflow-hidden" style={{ maxHeight: '100vh' }}>
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-4 relative flex items-center justify-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block mr-2"
              whileHover={{ scale: 1.05 }}
            >
              Hello,
            </motion.span>{' '}
            <motion.span 
              className="inline-block mr-2"
              whileHover={{ scale: 1.05 }}
            >
              I'm
            </motion.span>{' '}
            <motion.div className="relative inline-flex items-center">
              <motion.span
                className="inline-block overflow-hidden whitespace-nowrap"
                animate={controls}
                initial={{ width: 0 }}
                style={{ paddingLeft: "0.5rem" }}
              >
                Josh
              </motion.span>
              <motion.span
                className="inline-block w-[2px] h-[1em] bg-white ml-[2px]"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
              />
            </motion.div>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.span 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
            >
              15-year-old
            </motion.span>{' '}
            <motion.span 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
            >
              coding
            </motion.span>{' '}
            <motion.span 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
            >
              enthusiast,
            </motion.span>{' '}
            <motion.span 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
            >
              photographer,
            </motion.span>{' '}
            <motion.span 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
            >
              and
            </motion.span>{' '}
            <motion.span 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
            >
              music
            </motion.span>{' '}
            <motion.span 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
            >
              lover
            </motion.span>
          </motion.p>
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <button 
              onClick={() => scrollToSection('interests')} 
              className="bg-transparent border-none flex gap-5 relative group"
            >
              <motion.div whileHover={{ scale: 1.1 }} className="relative">
                <Code size={48} />
                <span className="absolute inset-0 bg-blue-500 opacity-20 blur rounded-full"></span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="relative">
                <Camera size={48} />
                <span className="absolute inset-0 bg-purple-500 opacity-20 blur rounded-full"></span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="relative">
                <Music size={48} />
                <span className="absolute inset-0 bg-green-500 opacity-20 blur rounded-full"></span>
              </motion.div>
            </button>
          </motion.div>

          <div className="absolute bottom-20 left-0 right-0 flex justify-center">
        <motion.button 
          onClick={() => scrollToSection('interests')} 
          className="flex flex-col items-center text-blue-400 hover:text-blue-300 transition-colors"
          animate={{ y: [0, -10, 0] }}
          transition={{ y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <p className="mb-2">Scroll Down</p>
          <ChevronDown size={24} />
        </motion.button>
      </div>        
        </section>

        <section id="interests" className="min-h-screen flex flex-col justify-center items-center p-4 bg-gray-800 bg-opacity-50">
          <h2 className="text-4xl font-bold mb-8">My Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <InterestCard 
              icon={<Code size={32} />} 
              title="Coding" 
              description="I love creating and problem-solving through code."
              buttonText="View Projects"
              onClick={() => scrollToSection('projects')}
            />
            <InterestCard 
              icon={<Camera size={32} />} 
              title="Photography" 
              description="Showcasing automotive design and urban infrastructure."
              buttonText="View Gallery"
              to="/photography"
            />
            <InterestCard 
              icon={<Music size={32} />} 
              title="Music" 
              description="Exploring various genres and creating my own songs."
            />
          </div>
          <Link
    to="/about"
    className="mt-12 inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
  >
    More about me
  </Link>
        </section>

        <section id="projects" className="min-h-screen flex flex-col justify-center items-center p-4 bg-opacity-50">
          <h2 className="text-4xl font-bold mb-8">My Projects</h2>
          <p className="text-xl mb-4">Check out some of my recent work:</p>
          <div className="w-full max-w-4xl">
            <ProjectList />
          </div>
        </section>

        <section id="socials" className="min-h-screen flex flex-col justify-center items-center p-4 bg-gray-800 bg-opacity-50">
          <h2 className="text-4xl font-bold mb-8">Socials</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex justify-center mb-4">{social.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{social.name}</h3>
              </motion.a>
            ))}
          </div>
        </section>
      </main>

     <footer className="absolute bottom-0 w-full bg-gray-800 text-center p-4">
        <p>&copy; 2024 Joshua Gilgallon. All rights reserved.</p>
      </footer>

      <motion.div 
        className="fixed bottom-4 right-4 bg-blue-500 rounded-full p-2 cursor-pointer z-20"
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

const ProjectList = () => {
  return (
    <motion.div 
      className="space-y-4 md:space-y-8"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      initial="hidden"
      animate="show"
    >
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </motion.div>
  );
};

const ProjectCard = ({ id, title, briefDescription }) => (
  <motion.div 
    className="bg-gray-800 p-6 rounded-lg"
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 }
    }}
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{briefDescription}</p>
    <Link 
      to={`/projects/${id}`}
      className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
    >
      Learn More
    </Link>
  </motion.div>
);
export default ProfilePage;
