import classes from './PipeLeft.module.css'
import pipeLeftHead from '../../../assets/images/pipe_pieces/pipe-head-open-from-right.png'


const PipeLeft = (props) => {
    return (
        <div className={`${classes.leftPipe} ${props.className}`}>
        <div></div>
        <img src={pipeLeftHead} alt='pipe head opening' />
        </div>
    )
}

export default PipeLeft