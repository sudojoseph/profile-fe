import React from 'react';
import ComputerScreen from '../ComputerScreen/ComputerScreen';
import './ProjectContainer.css';

const ProjectContainer = ({title, description, img}) => {
  return (
    <div className='page-container'>
      <div className='split-content-container'>
          <div className='project-description'>
              <h1>{title}</h1>
              <p>{description}</p>
          </div>
          <ComputerScreen img={img}/>
      </div>
    </div>
  );
};

export default ProjectContainer;