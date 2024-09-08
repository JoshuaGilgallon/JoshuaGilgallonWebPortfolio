import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, MapPin, Music, Code } from 'lucide-react';
import cIcon from './assets/icons/c-icon.png';
import cSharpIcon from './assets/icons/c-sharp-icon.png';
import pythonIcon from './assets/icons/python-icon.png';

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('C');

  const languages = [
    { name: 'C', icon: cIcon, description: 'Low-level programming language for system development' },  // Image icon
    { name: 'C#', icon: cSharpIcon, description: 'Versatile language for Windows and game development' },    // Emoji icon
    { name: 'Python', icon: pythonIcon, description: 'High-level language for rapid development and data analysis' },  // Emoji icon
  ];

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
                className="md:flex md:space-x-4 absolute md:relative top-full left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0"
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
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <MapPin size={24} className="mr-2" />
            Where I Live
          </h2>
          <p>
            I'm based in Perth, Western Australia. My home is visible throughout my work, especially photography.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Music size={24} className="mr-2" />
            My Musical Journey
          </h2>
          <p>
            Music has been a significant part of my life since I was young. I started playing piano at a young age and have since explored various genres including rap, electronic, and rock. My passion for music extends beyond just listening - I've been composing my own tracks using digital audio workstations (DAWs) like FL Studio. This creative outlet complements my coding projects, often inspiring unique solutions and approaches in my development work.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Code size={24} className="mr-2" />
            Programming Languages
          </h2>
          <p className="mb-4">
            I specialize in several programming languages, each serving different purposes in my development toolkit. Here are the main languages I work with:
          </p>
          <div className="flex space-x-4 mb-4">
            {languages.map((lang) => (
              <motion.button
                key={lang.name}
                className={`p-4 rounded-full text-2xl ${activeLanguage === lang.name ? 'bg-blue-500' : 'bg-gray-700'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveLanguage(lang.name === activeLanguage ? null : lang.name)}
              >
                  <img src={lang.icon} alt={`${lang.name} icon`} className="w-12 h-12" />
              </motion.button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            {activeLanguage && (
              <motion.div
                key={activeLanguage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-800 p-4 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{activeLanguage}</h3>
                <p>{languages.find(lang => lang.name === activeLanguage).description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
        
        {/* Add more sections as needed */}
      </main>

      <footer className="bg-gray-800 text-center p-4">
        <p>&copy; 2024 Joshua Gilgallon. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;

