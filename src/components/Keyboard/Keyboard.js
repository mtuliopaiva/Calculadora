import Button from '../Button/Button'
import './Keyboard.css'

const Keyboard = () => {
    return(
        <div className='keys'>
            <Button name="AC" class='special-operation'/>
            <Button name="+/-" class='special-operation'/>
            <Button name="%" class='special-operation'/>
            <Button name="÷" class='operation'/>
            <Button name="7"/>
            <Button name="8"/>
            <Button name="9"/>
            <Button name="x" class='operation'/>
            <Button name="4"/>
            <Button name="5"/>
            <Button name="6"/>
            <Button name="-" class='operation'/>
            <Button name="1"/>
            <Button name="2"/>
            <Button name="3"/>
            <Button name="+" class='operation'/>
            <Button name="0" class='box0'/>
            <Button name=","/>
            <Button name="="/>
        </div>
    )
}

export default Keyboard