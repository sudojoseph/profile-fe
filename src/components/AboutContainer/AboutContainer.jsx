import './AboutContainer.css';
import profileImg from '../../img/profilePic.jpg';


const AboutContainer = () => {
  return (
    <>
    <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="8" 
        initPosition={ 'x: 160, y: 0' }
        className={'about-text'}
        >"Nice to meet you! I'm a passionate full stack developer with a love for programming that extends beyond my day job. With strong skills in both front and back end development, I approach each project with dedication and enthusiasm. Whether working on a complex web application or a simple website, I bring a level of passion and attention to detail that is sure to impress. If you're looking for a developer who is not only highly skilled but also really fun to work with, I'm your guy."</p>
    {/* <div className='split-content-container about-container'>
      <div>
        
      </div>
    </div> */}
    </>
  )
}

export default AboutContainer