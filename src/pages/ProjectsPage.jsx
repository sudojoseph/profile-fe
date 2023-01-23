import React from 'react'
import ProjectContainer from '../components/ProjectContainer/ProjectContainer';
import updawgDesktop from '../img/projectScreenshots/updawgDesktop.png';
import yscoreDesktop from '../img/projectScreenshots/yscoreDesktop.png';
import networxDesktop from '../img/projectScreenshots/networxDesktop.png';
import kululuDesktop from '../img/projectScreenshots/kululuDesktop.png';




const ProjectsPage = () => {
  const projects = [{
    title: 'Kululu',
    description: 'Is a cool web app where you can create a live Photo Wall that updates in real-time with every photo or video added by the user and their event guests. At Kululu, I am in charge of functionality both in the frontend and the backend. The frontend here is in React and the backend is in NodeJS and Firebase.',
    img: kululuDesktop
  },{
    title: 'Updawg',
    description: 'Updawg is an online pet adoption website dedicated to helping animals find their forever homes. I provided a safe and secure platform for potential pet owners to search for their perfect pet. The website is easy to use and allows users to search for animals by breed, age, size, and location. It also provides detailed information about each animal, including photos, and general information. The goal was to make the adoption process as smooth and stress-free as possible. This page was build with: React, Nodejs and MYSQL',
    img: updawgDesktop
  },{
    title: 'Yscore',
    description: 'YScore is a web app that helps you estimate your credit score and provides you with tips and tricks on how to improve it. YScore won first place in the boot camp hackathon for its front end. The frontend for this project was done in react and the backend in NodeJS and MongoDB.',
    img: yscoreDesktop
  },{
    title: 'Networx',
    description: 'Networx is an online platform that connects homeowners with reliable contractors for all of their home improvement needs. I worked on the main web platform, the CRM, in-house chat system and the mobile app. At Networx, we worked with: HTML, CSS (Less), Vanilla JavaScript, PHP, MySQL, Angular and Ionic (mobile app)',
    img: networxDesktop
  }];

  return (
    <>
      {projects.map((project, index) => <ProjectContainer key={index} title={project.title} description={project.description} img={project.img}/>)}
    </>
  );

};

export default ProjectsPage;