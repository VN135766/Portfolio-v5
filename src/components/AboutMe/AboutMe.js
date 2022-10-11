import classes from './AboutMe.module.css'

import Background from '../UI/Background'
import Nav from '../Nav/Nav'
import AboutMeContent from './AboutMeContent'
import Floor from '../UI/Floor'


const AboutMe = () => {
    return (
        <Background addClass={classes.underground__background}>
            <Nav />
            <AboutMeContent />
            <Floor addClass={classes.underground__floor}/>
        </Background>
    )
}

export default AboutMe