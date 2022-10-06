import Anchor from './Anchor'
import Cieling from '../UI/Ceiling'
import classes from './Nav.module.css'

const Nav = () => {
    return (
        <Cieling>
            <nav className={classes.nav}>
                <Anchor />
            </nav>
        </Cieling>
    )
}

export default Nav