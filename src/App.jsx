import { useRef } from "react";
import './App.css';
import Jarvis from './components/Jarvis/Jarvis';
import SocialMediaLinks from './components/SocialMediaLinks/SocialMediaLinks';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage.jsx';
import LandingPage from './pages/LandingPage';
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  const ref = useRef(null);

  const options = {
    smooth: true,
  } 

  return (
    <>
      <LocomotiveScrollProvider options={options} containerRef={ref}>
        <div className="App">
        <main data-scroll-container ref={ref}>
          <LandingPage data-scroll
            data-scroll-speed="4"
            data-scroll-section />
          <AboutPage data-scroll-section/>
          <ProjectsPage data-scroll-section/>
          <SkillsPage />
          <ContactPage data-scroll-section/>
          <SocialMediaLinks data-scroll-section/>
        </main>
        </div>
      </LocomotiveScrollProvider>
      <Jarvis data-scroll-section/>
    </>
  );
}

export default App;