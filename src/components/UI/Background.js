import classes from './Background.module.css'

const Background = (props) => {
    return <main className={`${classes.main} ${props.addClass}`}>{props.children}</main>
}

export default Background