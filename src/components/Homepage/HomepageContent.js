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
                <button><a href="mailto:VN135766@gmail.com">VN135766@gmail.com</a></button>
            </div>
            <div>
                <button>734-366-6061</button>
            </div>
            <div>
                <button>Click <a href='https://1drv.ms/w/s!Alu3hTJoxVVUgnHE0J9Jo4kH0e7-?e=HIqnhi' target="_blank">HERE</a> for my Resume</button>
            </div>
        </nav>
    </section>
}

export default HomepageContent