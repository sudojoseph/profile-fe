import { useRef, useEffect } from "react";
import './App.css';
import Jarvis from './components/Jarvis/Jarvis';
import SocialMediaLinks from './components/SocialMediaLinks/SocialMediaLinks';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage.jsx';
import LandingPage from './pages/LandingPage';
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { Api } from "./api/api";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import DownloadResumePage from "./pages/DownloadResumePage";
import FadeIn from "react-fade-in/lib/FadeIn";

function App() {
  const ref = useRef(null);

  const api = new Api;

  const options = {
    smooth: true,
    smoothMobile: true
  } 

  useEffect( () => {
    api.sendMessageToTelegramBot('You got a visiter on the page!');
  },[]);

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
          <SkillsPage data-scroll-section/>
          <DownloadResumePage data-scroll-section/>
          <ContactPage data-scroll-section/>
        </main>
        </div>
      </LocomotiveScrollProvider>
      <Jarvis data-scroll-section/>
      <SocialMediaLinks data-scroll-section/>
    </>
  );
}

export default App;