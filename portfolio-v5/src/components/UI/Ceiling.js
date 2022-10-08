import classes from './Ceiling.module.css'

const Cieling = (props) => {
    return <div className={`${classes.ceiling} ${props.className}`}>{props.children}</div>
}

export default Cieling