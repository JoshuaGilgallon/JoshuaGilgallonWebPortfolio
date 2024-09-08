import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import PhotographyPage from './components/PhotographyPage';
import ProjectsPage from './components/ProjectsPage';
import AboutMe from './components/AboutMe';
import ProjectDetails from './components/ProjectDetails';
import projectsData from './components/ProjectsData';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/photography" element={<PhotographyPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetails projects={projectsData} />} />
        <Route path="/about" element={<AboutMe />} />  
    </Routes>
    </Router>
  );
}

export default App;
