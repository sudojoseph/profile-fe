import { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { Api } from '../../api/api';
import image from '../../img/jarvis.png';
import './Jarvis.css';

const Jarvis = () => {

  const [inputValue, setInputValue] = useState('');
  const [chatMessage, setChatMessage] = useState();
  const [displayBubble, setDisplayBubble] = useState(true);

  const api = new Api;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const updateChatConversation = (author, text) => {
    text = text.replace('Jarvis:', '');
    setChatMessage({
      author: author,
      message: text
    });
  };

  const onFormSubmit = async (e) => {
    updateChatConversation('Human', inputValue);

    try {
      e.preventDefault();
      const answer = await api.askTravisQuestion(inputValue);
      setInputValue('');
      updateChatConversation('Jarvis', answer.choices[0].text);
    } catch (error) {
      updateChatConversation('Jarvis', error.message);
    }
  };

  const closeBubble = () => {
    setDisplayBubble(false);
  }

  const openBubble = () => {
    updateChatConversation('Jarvis', `You're back! Lets talk some more, shell we?`);
    setDisplayBubble(true);
  }

  const jarvisIntroMessage = "Hi my name is Jarvis! I am powered by Open AI but build and trained Joseph. I am here to anwer any question regarding his carreer!";

  useEffect(() => {
    updateChatConversation('Jarvis', jarvisIntroMessage);
  },[]);

  const bubbleClasses = `bubble-container ${displayBubble ? '' : 'hide'}`

  return (
    <div className='jarvis-container'>
      <div className={bubbleClasses}>
        <div className="bubble">
          <span className='close-button' onClick={closeBubble}>X</span>
          <div className='chat-container'>
            <FadeIn >
              <p><b>{chatMessage?.author}:</b> {chatMessage?.message}</p>
            </FadeIn>
          </div>
          <form onSubmit={(e) => onFormSubmit(e)}>
            <input type='text' value={inputValue} onChange={(e) => handleInputChange(e)}/>
            <button type='submit'>Ask Question</button>
          </form>
        </div>
        <div className="pointer"></div>
      </div>
      <img className='jarvis' src={image} onClick={openBubble}/>
    </div>
  )
}

export default Jarvis