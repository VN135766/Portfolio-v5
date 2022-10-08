import classes from './Homepage.module.css'

import Background from '../UI/Background'
import Nav from '../Nav/Nav'
import HomepageContent from './HomepageContent'
import Floor from '../UI/Floor'


const Homepage = () => {
    return (
        <Background addClass={classes.aboveground__background}>
            <Nav />
            <HomepageContent />
            <Floor addClass={classes.aboveground__floor}/>
        </Background>
    )
}

export default Homepage