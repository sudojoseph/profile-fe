import './SocialMediaLinks.css';
import Resume from '../../documents/Joseph_Davidson_CV.pdf';
import { Api } from '../../api/api';

const SocialMediaLinks = ({api}) => {
  return (
    <ul className='socialMediaLinks'>
        <a onClick={() => api.sendMessageToTelegramBot('Visiter opened LinkedIn')} href="https://www.linkedin.com/in/joseph-davidson-a90490105/" target='_blank'>
            <li>LinkedIn</li>
        </a>
        <a onClick={() => api.sendMessageToTelegramBot('Visiter opened Github')} href="https://github.com/sudojoseph" target='_blank'>
            <li>GitHub</li>
        </a>
        <a onClick={() => api.sendMessageToTelegramBot('Visiter downloaded resume')} href={Resume} download="Joseph Davidson Resume" target='_blank'>
            <li>CV</li>
        </a>
    </ul>
  );
};

export default SocialMediaLinks;