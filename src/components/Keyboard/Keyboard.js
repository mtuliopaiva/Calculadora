import Button from '../Button/Button'
import './Keyboard.css'

const Keyboard = () => {
    return(
        <div className='keys'>
            <Button name="AC" class='special-operation'/>
            <Button name="+/-" class='special-operation'/>
            <Button name="%" class='special-operation'/>
            <Button name="÷" class='operation'/>
            <Button name="7" class='number'/>
            <Button name="8" class='number' />
            <Button name="9" class='number' />
            <Button name="x" class='operation'/>
            <Button name="4" class='number' />
            <Button name="5" class='number' />
            <Button name="6" class='number' />
            <Button name="-" class='operation'/>
            <Button name="1" class='number' />
            <Button name="2" class='number' />
            <Button name="3" class='number' />
            <Button name="+" class='operation'/>
            <Button name="0" class='box0'/>
            <Button name="," class='number'/>
            <Button name="=" class='operation'/>
        </div>
    )
}

export default Keyboard