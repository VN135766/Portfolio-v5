import { Fragment, useState, useContext } from 'react'
import classes from './Anchor.module.css';
import { PageContext } from '../../store/page-context';
import PageContextProvider from '../../store/page-context'

import Card from '../UI/Card'

const Anchor = () => {
    // const [selectedPage, setSelectedPage] = useState('Home Page');
    const [pageSelection, setPageSelection] = useContext(PageContext)
    console.log(pageSelection)
    const cardColorHandler = () => {
        switch (pageSelection) {
            case 'Home Page':
                return classes.orange;
            case 'About Me':
                return classes.blue;
            case 'Projects':
                return classes.green;
            case 'Contact Me':
                return classes.grey
        }
    }

    console.log(cardColorHandler())

    const navigationHandler = (e) => {
        console.log(e.target.innerHTML)
        setPageSelection(e.target.innerHTML)
    }
    return (
        <PageContextProvider>
<Card className={cardColorHandler()}><button onClick={navigationHandler}>Home Page</button></Card>
            <Card className={cardColorHandler()}><button onClick={navigationHandler}>About Me</button></Card>
            <Card className={cardColorHandler()}><button onClick={navigationHandler}>Projects</button></Card>
            <Card className={cardColorHandler()}><button onClick={navigationHandler}>Contact Me</button></Card>
            </PageContextProvider>
    )
}

export default Anchor