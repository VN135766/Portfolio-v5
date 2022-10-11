import classes from './PipeRight.module.css'
import pipeRightHead from '../../../assets/images/pipe_pieces/pipe-head-open-from-left.png'

const PipeRight = (props) => {
    return (
        <div className={`${classes.rightPipe} ${props.className}`}>
        <img src={pipeRightHead} alt='pipe head opening' />
        <div></div>
        </div>
    )
}

export default PipeRight