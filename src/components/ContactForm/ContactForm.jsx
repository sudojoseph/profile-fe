import {useState} from 'react'
import { Api } from '../../api/api';
import { useAlert } from 'react-alert'
import './ContactForm.css';

const api = new Api;

const ContactForm = () => {
  const [textFieldValue, setTextFieldValue] = useState('');
  const [inputValues, setInputValues] = useState({
    name: '',
    email: ''
  })

  const alert = useAlert();

  const handleTextAreaChange = (e) => {
    setTextFieldValue(e.target.value);
  }

  const handleInputChange = (e) => {
    setInputValues({...inputValues, [e.target.name]: e.target.value});
  };

  const handleSubmit = async () => {
    try {
      const message = `${JSON.stringify(inputValues)} ${textFieldValue}`;
      const response = await api.sendMessageToTelegramBot(message);
      alert.show(response.message, {type: 'success'});
    } catch (error) {
      alert(error.message);
      alert.show(error.message, {type: 'error'});
    }
    setTextFieldValue('');
    setInputValues({name: '', email: ''});
  };

  return (
    <div className='contact-form-container'>
      <p>Jarvis didn't tell you enough about me yet...? Or want to leave a comment?</p>
      <p>Write a message below and my Telegram Bot (R2-D2) will forward it to me!</p>
      <input placeholder='Name (optional)' type="text" value={inputValues.name} name='name' onChange={(e) => handleInputChange(e)}/>
      <input placeholder='Email (optional)' type="text" value={inputValues.email} name='email' onChange={(e) => handleInputChange(e)}/>
      <textarea value={textFieldValue} onChange={(e) => handleTextAreaChange(e)} placeholder={'leave me a message'} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default ContactForm