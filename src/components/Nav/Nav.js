import { useContext } from 'react'

import Anchor from './Anchor'
import Cieling from '../UI/Ceiling'
import classes from './Nav.module.css'

import { PageContext } from '../../store/page-context'

const Nav = () => {
    const [pageSelection] = useContext(PageContext)
    const cielingImageHandler = () => {
        switch (pageSelection) {
            case 'Home Page':
                return classes.aboveground__ceiling;
            case 'About Me':
                return classes.underground__ceiling;
            case 'Projects':
                return classes.underwater__ceiling;
            case 'Contact Me':
                return classes.boss__ceiling
        }
    }
    console.log(cielingImageHandler())

    return (
        <Cieling className={cielingImageHandler()}>
            <nav className={classes.nav}>
                <Anchor />
            </nav>
        </Cieling>
    )
}

export default Nav