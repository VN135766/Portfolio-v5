import Card from '../UI/Card'

import classes from './ProjectCard.module.css'
import githubBlock from '../../assets/images/contact-blocks/github-block.png';
import webBlock from '../../assets/images/contact-blocks/websitelogo.png';

import workDayschImg from '../../assets/images/project-screenshots/1.gif'
import bootCampOverflowImg from '../../assets/images/project-screenshots/Bootcamp.png'
import podCastImg from '../../assets/images/project-screenshots/Podcast-project.png'
import noteTakerImg from '../../assets/images/project-screenshots/note-taker.png'

const projectData = [
    {
        title:'Calender',
        description:'This application allows the client to add and save events to a daily planner',
        technologies: ['Bootstrap', 'Moment.js', 'JQuery'],
        github: 'https://github.com/VN135766/Challenege-4---Quiz',
      deployed: 'https://vn135766.github.io/Challenege-4---Quiz/',
        img_url:workDayschImg,
    },
    {
        title:'BootCamp Overflow',
        description:'Create a comfortable place for current BootCamp students to ask for assistance in their BootCamp course.',
        technologies:[
          'HTML', 'CSS', 'JavaScript', 'Handlebars', 'Node.js', 'Heroku', 'JawsDB', 'mySQL'],
          github: 'https://github.com/TristinNguyen/Bootcamp-Overflow',
          deployed: 'https://bootcampoverflow1.herokuapp.com/',
        img_url:bootCampOverflowImg,
    },
    {
        title:'Podcast Project',
        description:'Podcast project is an application that uses an Allfeeds API to obtain data and sort by genre. You can then save the podcasts to a favorites list. ',
        technologies: ['PureCss', 'HTML', 'CSS', 'Javascript', 'Allfeeds API'],
        github: 'https://github.com/nickrearl/podcast-project',
        deployed: 'https://nickrearl.github.io/podcast-project/',
        img_url:podCastImg,
    },
    {
        title:'Note Taker',
        description:'This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/VN135766/11--Note--Taker',
      deployed: 'https://calm-fortress-30956.herokuapp.com/notes',
        img_url:noteTakerImg,
    }
]

const ProjectCard = (props) => {
    console.log(props.selection)

    const selectProject = () => {
        switch (props.selection) {
            case 'Calender':
                return projectData[0];
            case 'BootCamp Overflow':
                return projectData[1];
            case 'Podcast Project':
                return projectData[2];
            case 'Note Taker':
                return projectData[3];
        }
    }

    console.log(selectProject().description)

    return <Card className={classes.card}>
        <div className={classes.projectDetailContainer}>
                    <img className={classes.projectImage} 
                    src={selectProject().img_url} />
                    <div className={classes.projectDetails}>
                        <h2>{selectProject().title}</h2>
                        <hr />
                        <div>{selectProject().description}</div>
                        <hr />
                        <h3>Technologies:</h3>
                        <ul>
                            {selectProject().technologies.map(item => <li>{item}</li>)}
                        </ul>
                        <div className={classes.linkBlocks}>
                            <img src={githubBlock} />
                            <img src={webBlock} />
                        </div>
                    </div>
                </div>
    </Card>
}

export default ProjectCard