import classes from './Mario.module.css'
import MarioCharacter from '../../../assets/images/characters/mario-right.png'

const Mario = (props) => {
    return <img className={`${classes.mario} ${props.className}`} src={MarioCharacter} alt="mario sprite"/>
}

export default Mario;