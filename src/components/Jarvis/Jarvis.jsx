import { useEffect, useState } from 'react';
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
      api.sendMessageToTelegramBot(`The following question was submitted: ${inputValue}`);
      const answer = await api.askTravisQuestion(inputValue);
      setInputValue('');
      const answerText = answer.choices[0].text;
      api.sendMessageToTelegramBot(`The following answer was given: ${answerText}`);
      updateChatConversation('Jarvis', answerText);
    } catch (error) {
      updateChatConversation('Jarvis', error.message);
    }
  };

  const closeBubble = () => {
    setDisplayBubble(false);
  }

  const openBubble = () => {
    updateChatConversation('Jarvis', `You're back! Lets talk some more, shall we?`);
    setDisplayBubble(true);
  }

  const jarvisIntroMessage = "Hi my name is Jarvis! I'm powered by Open AI but built and trained by Joseph. I'm here to answer any questions about his career.";

  useEffect(() => {
    updateChatConversation('Jarvis', jarvisIntroMessage);
  },[]);

  const bubbleClasses = `bubble-container ${displayBubble ? '' : 'hide'}`;

  return (
    <div className='jarvis-container'>
      <div className={bubbleClasses}>
        <div className="bubble">
          <span className='close-button' onClick={closeBubble}>X</span>
          <div className='chat-container'>
              <p><b>{chatMessage?.author}:</b> {chatMessage?.message}</p>
          </div>
          <form onSubmit={(e) => onFormSubmit(e)}>
            <input type='text' value={inputValue} onChange={(e) => handleInputChange(e)}/>
            <button type='submit'>Ask</button>
          </form>
        </div>
        <div className="pointer"></div>
      </div>
      <img className='jarvis' src={image} onClick={openBubble}/>
    </div>
  );
};

export default Jarvis;