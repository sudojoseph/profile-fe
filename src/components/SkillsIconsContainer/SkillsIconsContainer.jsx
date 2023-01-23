import html from '../../img/skillLogos/html5.svg';
import css from '../../img/skillLogos/css3-alt.svg';
import js from '../../img/skillLogos/square-js.svg';
import react from '../../img/skillLogos/react.svg';
import nodejs from '../../img/skillLogos/node-js.svg';
import mongodb from '../../img/skillLogos/mongodb.svg';
import mysql from '../../img/skillLogos/mysql.svg';
import aws from '../../img/skillLogos/aws.svg';



import './SkillsIconsContainer.css';

const SkillsIconsContainer = () => {
  return (
    <div className='skill-icons-container'>
        <h1>See below some of my skills:</h1>
        <div className='skill-icons'>
            <div
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="-4">
                <img src={html} alt="html-logo"/>
            </div>
            <div
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="4">
                <img src={css} alt="css-logo"/>
            </div>
            <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="4">
                <img src={js} alt="js-logo" />
            </div>
            <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6">
                <img src={react} alt="react-logo" />
            </div>
            <div
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="6">
                <img src={nodejs} alt="nodejs-logo" />
            </div>
            <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6">
                <img src={mongodb} alt="mongodb-logo" />
            </div>
            <div
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="8">
                <img src={mysql} alt="mysql-logo" />
            </div>
            <div
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="8">
                <img src={aws} alt="aws-logo" />
            </div>
        </div>
    </div>
  )
}

export default SkillsIconsContainer