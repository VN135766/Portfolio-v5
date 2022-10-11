import classes from './Floor.module.css';
import PipeLeft from './Mario-items/PipeLeft';
import PipeRight from './Mario-items/PipeRight';
import Mario from './Mario-items/Mario'

const Floor = (props) => {
    return <div className={`${classes.floor} ${props.addClass}`}>
        <PipeLeft className={classes.hide}/>
        <Mario className={classes.hide}/>
        <PipeRight className={classes.hide}/>
    </div>
}

export default Floor