import classes from './HomepageContent.module.css'

import Card from '../UI/Card'
import mushroom from '../../assets/images/misc-decorations/mushroom-marker.png'
import mushroomBlue from '../../assets/images/misc-decorations/mushroom-marker-blue.png'

const HomepageContent = () => {
    return <section className={classes.section}>
        <Card className={classes.titleCard}>
            <h2>Full Stack <br />Web Developer</h2>
            <h1>Victor Nunez</h1>
        </Card>
        <nav>
            <div>
                <img src={mushroom} />
                <button>ABOUT ME</button>
            </div>
            <div>
                <img src={mushroomBlue} />
                <button>PROJECTS</button>
            </div>
            <div>
                <img src={mushroomBlue} />
                <button>CONTACT ME</button>
            </div>
        </nav>
    </section>
}

export default HomepageContent