import classes from './AboutMeContent.module.css'
import profilePic from '../../assets/images/profile-picture/profile-cut-out.png'
import reactMarioBlock from '../../assets/images/technologies/react-mario-block.png'

import Card from '../UI/Card'

const AboutMeContent = () => {
    return (
        <section className={classes.section}>
            <Card className={`${classes.profile} ${classes.card}`}>
                <img src={profilePic} alt="a portrait of Michael Klein" />
            </Card>
            <div className={classes.aboutMeContext}>
                <div className={classes.aboutMeText} >
                <h2>Hello!</h2>
                    <br />
                    <h3>My name is <span>Victor Nunez</span>.  I am a <span>Full Stack Web Developer</span> and I am currently located in <span>Livonia, Michigan</span>.</h3>
                    <br />
                    <h3>I just recently earned a certificate from the <span>University of Michigan Coding Bootcamp course</span>.</h3>
                    <br />
                    <h3>I have a passion for building challenging applications and learning new technologies.</h3>
                    <br />
                    <h3>These are a few technologies I use...</h3>
                </div>
                <div className={classes.technologies}>
                    <img src={reactMarioBlock} alt="Mario block with React logo" />
                    <img src={reactMarioBlock} alt="Mario block with React logo" />
                    <img src={reactMarioBlock} alt="Mario block with React logo" />
                    <img src={reactMarioBlock} alt="Mario block with React logo" />
                    <img src={reactMarioBlock} alt="Mario block with React logo" />
                    <img src={reactMarioBlock} alt="Mario block with React logo" />
                    <img src={reactMarioBlock} alt="Mario block with React logo" />
                </div>
            </div>

        </section>
    )
}

export default AboutMeContent