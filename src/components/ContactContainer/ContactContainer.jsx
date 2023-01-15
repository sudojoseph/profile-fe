import ContactForm from '../ContactForm/ContactForm';
import DownloadResume from '../DownloadResume/DownloadResume';
import './ContactContainer.css';

const ContactContainer = () => {
  return (
    <div className='split-content-container'>
        <ContactForm />
        <DownloadResume />
    </div>
  )
}

export default ContactContainer