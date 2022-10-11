import classes from './ContactMe.module.css'

import Background from '../UI/Background'
import Nav from '../Nav/Nav'
import ContactMeContent from './ContactMeContent'
import Floor from '../UI/Floor'
import Lava from '../UI/Lava'

const ContactMe = () => {
    return (
        <Background addClass={classes.boss__background}>
            <Nav />
            <ContactMeContent />
            <div>
                <Floor addClass={classes.boss__floor} />
                <Lava />
            </div>
        </Background>
    )
}

export default ContactMe