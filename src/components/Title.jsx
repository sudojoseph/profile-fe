import FadeIn from 'react-fade-in/lib/FadeIn';
import './Title.css';

const Title = () => {
  return (
    <div className='title-container'>
      <FadeIn delay='600'>
        <h1>Joseph Davidson </h1> 
      </FadeIn>
      <FadeIn delay='1000'>
        <h2 className='accent-color'>Full Stack Developer</h2>
      </FadeIn>
    </div>
  )
}

export default Title