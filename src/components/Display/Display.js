import './Display.css'

const Display = (props) => {

    return(
        <div className='display'>
        <span>{props.disp}</span>
        </div>
    )
}

export default Display