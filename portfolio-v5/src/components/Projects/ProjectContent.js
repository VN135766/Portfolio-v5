import { useState } from 'react';
import classes from './ProjectContent.module.css';


import ProjectCard from './ProjectCard';
import Card from '../UI/Card';

const ProjectContent = () => {
    const [projectSelection ,setProjectSelection] = useState('Calender')

    const projectSelectionHandler = (e) => {
        setProjectSelection(e.target.innerHTML)
    }

    return (
        <section className={classes.section}>
            <div className={classes.projectList}>
                <Card className={classes.card}><h2>Projects</h2></Card>
                <button onClick={projectSelectionHandler}>Calender</button>
                <button onClick={projectSelectionHandler}>BootCamp Overflow</button>
                <button onClick={projectSelectionHandler}>Podcast Project</button>
                <button onClick={projectSelectionHandler}>Note Taker</button>
                {/* <button>Placeholder</button> */}
            </div>
            <ProjectCard selection={projectSelection} className={classes.projectCard} />
        </section>
    )
}

export default ProjectContent