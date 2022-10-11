import { useState, Fragment } from 'react';
import classes from './ProjectContent.module.css';

import Card from '../UI/Card'

import githubBlock from '../../assets/images/contact-blocks/github-block.png';
import webBlock from '../../assets/images/contact-blocks/websitelogo.png';

import workDayschImg from "../../assets/images/project-screenshots/1.gif";
import bootCampOverflowImg from "../../assets/images/project-screenshots/Bootcamp.png";
import podCastImg from "../../assets/images/project-screenshots/Podcast-project.png";
import noteTakerImg from "../../assets/images/project-screenshots/note-taker.png";

const projectData = [
    {
      title: "Calender",
      description:
        "This application allows the client to add and save events to a daily planner",
      technologies: ["Bootstrap", "Moment.js", "JQuery"],
      github: "https://github.com/VN135766/Challenege-4---Quiz",
      deployed: "https://vn135766.github.io/Challenege-4---Quiz/",
      img_url: workDayschImg,
    },
    {
      title: "BootCamp Overflow",
      description:
        "Create a comfortable place for current BootCamp students to ask for assistance in their BootCamp course.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Handlebars",
        "Node.js",
        "Heroku",
        "JawsDB",
        "mySQL",
      ],
      github: "https://github.com/TristinNguyen/Bootcamp-Overflow",
      deployed: "https://bootcampoverflow1.herokuapp.com/",
      img_url: bootCampOverflowImg,
    },
    {
      title: "Podcast Project",
      description:
        "Podcast project is an application that uses an Allfeeds API to obtain data and sort by genre. You can then save the podcasts to a favorites list. ",
      technologies: ["PureCss", "HTML", "CSS", "Javascript", "Allfeeds API"],
      github: "https://github.com/nickrearl/podcast-project",
      deployed: "https://nickrearl.github.io/podcast-project/",
      img_url: podCastImg,
    },
    {
      title: "Note Taker",
      description:
        "This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/VN135766/11--Note--Taker",
      deployed: "https://calm-fortress-30956.herokuapp.com/notes",
      img_url: noteTakerImg,
    },
  ];
const ProjectContent = () => {

    return (
        <section className={classes.section}>
            <div className={classes.projectsHeader}>
                <h1>Projects</h1>
                <h2>Scroll down to view all projects</h2>
            </div>
            <div className={classes.projectsList}>
                {projectData.map(project => <Card className={classes.card}>
                        <img src={project.img_url} />
                        <div className={classes.projectDetailsContainer}>
                            <div className={classes.projectDetails}>
                                <h2>{project.title}</h2>
                                <hr />
                                <h3>{project.description}</h3>
                                <hr />
                                <h3>Technologies:</h3>
                                <h4>{project.technologies.join(', ')}</h4>
                            </div>
                            <div className={classes.linkBlocks}>
                                <a href={project.githubLink}><img src={githubBlock} /></a>
                                <a href={project.deployedLink}><img src={webBlock} /></a>
                            </div>
                        </div>
                    </Card>
                )}
            </div>
        </section>
    )
}

export default ProjectContent