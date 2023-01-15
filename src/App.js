import React from 'react';
import './App.css';
import Jarvis from './components/Jarvis/Jarvis';
import SocialMediaLinks from './components/SocialMediaLinks/SocialMediaLinks';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage.jsx';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Jarvis />
      <LandingPage />
      <AboutPage />
      <ContactPage />
      <SocialMediaLinks />
    </div>
  );
}

export default App;