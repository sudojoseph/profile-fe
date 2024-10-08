import Resume from '../../documents/Joseph_Davidson_CV.pdf';
import './DownloadResume.css';

const DownloadResume = ({api}) => {
  return (
    <div className="download-resume-container"
      data-scroll
      data-scroll-direction="horizontal"
      data-scroll-speed="-6">
      <p>Prefer looking at paper than talking to a bot? No worries, download my resume below!</p>
      <a onClick={() => api.sendMessageToTelegramBot('Visiter downloaded resume from bottom link')} href={Resume} download="Joseph Davidson Resume" target='_blank'><button>Download Resume</button></a>
    </div>
  );
};

export default DownloadResume;