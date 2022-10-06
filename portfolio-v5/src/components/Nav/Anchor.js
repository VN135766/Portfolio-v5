import {Fragment} from 'react'
import classes from './Anchor.module.css';

import Card from '../UI/Card'

const Anchor = () => {
    return (
        <Fragment>
            <Card>Home Page</Card>
            <Card>About Me</Card>
            <Card>Projects</Card>
            <Card>Contact Me</Card>
        </Fragment>
    )
}

export default Anchor