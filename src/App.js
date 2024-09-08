import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import PhotographyPage from './components/PhotographyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/photography" element={<PhotographyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
