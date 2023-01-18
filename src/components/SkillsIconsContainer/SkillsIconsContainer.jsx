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
        <div>
            <img src={html} alt="html-logo"/>
        </div>
        <div>
            <img src={css} alt="css-logo"/>
        </div>
        <div>
            <img src={js} alt="js-logo" />
        </div>
        <div>
            <img src={react} alt="react-logo" />
        </div>
        <div>
            <img src={nodejs} alt="nodejs-logo" />
        </div>
        <div>
            <img src={mongodb} alt="mongodb-logo" />
        </div>
        <div>
            <img src={mysql} alt="mysql-logo" />
        </div>
        <div>
            <img src={aws} alt="aws-logo" />
        </div>
    </div>
  )
}

export default SkillsIconsContainer