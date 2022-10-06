import classes from './Mario.module.css'
import MarioCharacter from '../../../assets/images/characters/mario-right.png'

const Mario = () => {
    return <img className={classes.mario} src={MarioCharacter}/>
}

export default Mario;