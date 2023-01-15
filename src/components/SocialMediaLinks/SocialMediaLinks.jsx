import './SocialMediaLinks.css';
import Resume from '../../documents/Joseph_Davidson_CV.pdf'

const SocialMediaLinks = () => {
  return (
    <ul className='socialMediaLinks'>
        <a href="https://www.linkedin.com/in/joseph-davidson-a90490105/" target='_blank'>
            <li>LinkedIn</li>
        </a>
        <a href="https://github.com/sudojoseph" target='_blank'>
            <li>GitHub</li>
        </a>
        <a href={Resume} download="Joseph Davidson Resume" target='_blank'>
            <li>CV</li>
        </a>
    </ul>
  )
}

export default SocialMediaLinks