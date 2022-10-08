import classes from './Projects.module.css'

import Background from '../UI/Background'
import Nav from '../Nav/Nav'
import ProjectContent from './ProjectContent'
import Floor from '../UI/Floor'


const Projects = () => {
    return (
        <Background addClass={classes.underwater__background}>
            <Nav />
            <ProjectContent />
            <Floor addClass={classes.underwater__floor}/>
        </Background>
    )
}

export default Projects