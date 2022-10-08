import { Fragment, useState } from 'react'
import classes from './Anchor.module.css';

import Card from '../UI/Card'

const Anchor = () => {
    const [selectedPage, setSelectedPage] = useState('Home Page');

    const navigationHandler = (e) => {
        setSelectedPage(e.target.innerText)
        console.log(selectedPage)
    }
    return (
        <Fragment>
<Card className={classes.link}><button onClick={navigationHandler}>Home Page</button></Card>
            <Card className={classes.link}><button onClick={navigationHandler}>About Me</button></Card>
            <Card className={classes.link}><button onClick={navigationHandler}>Projects</button></Card>
            <Card className={classes.link}><button onClick={navigationHandler}>Contact Me</button></Card>
        </Fragment>
    )
}

export default Anchor