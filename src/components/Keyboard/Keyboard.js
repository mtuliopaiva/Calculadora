import Button from '../Button/Button'
import './Keyboard.css'

const Keyboard = (props) => {
    const teste = (evento) => {

        props.insertDisplay(evento);
    }

    return(
        <div className='keys'>
            <Button name="AC" class='special-operation'insertKeyboard={teste}/>
            <Button name="+/-" class='special-operation'insertKeyboard={teste}/>
            <Button name="%" class='special-operation'insertKeyboard={teste}/>
            <Button name="÷" class='operation'insertKeyboard={teste}/>
            <Button name="7" class='number'insertKeyboard={teste}/>
            <Button name="8" class='number' insertKeyboard={teste}/>
            <Button name="9" class='number' insertKeyboard={teste}/>
            <Button name="x" class='operation'insertKeyboard={teste}/>
            <Button name="4" class='number' insertKeyboard={teste}/>
            <Button name="5" class='number' insertKeyboard={teste}/>
            <Button name="6" class='number' insertKeyboard={teste}/>
            <Button name="-" class='operation'insertKeyboard={teste}/>
            <Button name="1" class='number' insertKeyboard={teste}/>
            <Button name="2" class='number' insertKeyboard={teste}/>
            <Button name="3" class='number' insertKeyboard={teste}/>
            <Button name="+" class='operation'insertKeyboard={teste}/>
            <Button name="0" class='box0'insertKeyboard={teste}/>
            <Button name="," class='number'insertKeyboard={teste}/>
            <Button name="=" class='operation'insertKeyboard={teste}/>
        </div>
    )
}

export default Keyboard