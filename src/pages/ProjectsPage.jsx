import React from 'react'
import ProjectContainer from '../components/ProjectContainer/ProjectContainer';
import updawgDesktop from '../img/projectScreenshots/updawgDesktop.png';
import yscoreDesktop from '../img/projectScreenshots/yscoreDesktop.png';
import networxDesktop from '../img/projectScreenshots/networxDesktop.png';
import kululuDesktop from '../img/projectScreenshots/kululuDesktop.png';




const ProjectsPage = () => {
  const projects = [{
    title: 'Kululu',
    description: 'Updawg is an online pet adoption website dedicated to helping animals find their forever homes. We provide a safe and secure platform for potential pet owners to search for their perfect pet. The website is easy to use and allows users to search for animals by breed, age, size, and location. It also provide detailed information about each animal, including photos, and general information. The goal was to make the adoption process as smooth and stress-free as possible. This page was build with: React, Nodejs and MYSQL',
    img: kululuDesktop
  },{
    title: 'Updawg',
    description: 'Updawg is an online pet adoption website dedicated to helping animals find their forever homes. We provide a safe and secure platform for potential pet owners to search for their perfect pet. The website is easy to use and allows users to search for animals by breed, age, size, and location. It also provide detailed information about each animal, including photos, and general information. The goal was to make the adoption process as smooth and stress-free as possible. This page was build with: React, Nodejs and MYSQL',
    img: updawgDesktop
  },{
    title: 'Yscore',
    description: 'YScore is a webapp that helps you estimate your credit score and provides you with tips and tricks on how to improve it. It was created to help people understand their credit score and how to improve it. YScore won first place for its front end in a hackathon.',
    img: yscoreDesktop
  },{
    title: 'Networx',
    description: 'Networx is an online platform that connects homeowners with reliable contractors for all of their home improvement needs. I worked here both on the main web platform as wel on the CRM and the mobile app. At this company we worked with: HTML, CSS (Less), Vanila JavaScript, PHP, MySQL, Angular and Ionic (for the mobile app)',
    img: networxDesktop
  }];

  return (
    <>
      {projects.map((project, index) => <ProjectContainer key={index} title={project.title} description={project.description} img={project.img}/>)}
    </>
  );

};

export default ProjectsPage;