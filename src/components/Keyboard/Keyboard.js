import Button from '../Button/Button'
import './Keyboard.css'

const Keyboard = (props) => {
    const insertN = (evento) => {

        props.insertDisplay(evento);
    }

    return(
        <div className='keys'>
            <Button name="AC" value='AC' class='special-operation'insertKeyboard={insertN}/>
            <Button name="+/-" value='+/-' class='special-operation'insertKeyboard={insertN}/>
            <Button name="%" value='%' class='special-operation'insertKeyboard={insertN}/>
            <Button name="÷" value='/' class='operation'insertKeyboard={insertN}/>
            <Button name="7" value='7' class='number'insertKeyboard={insertN}/>
            <Button name="8" value='8' class='number' insertKeyboard={insertN}/>
            <Button name="9" value='9' class='number' insertKeyboard={insertN}/>
            <Button name="x" value='*' class='operation'insertKeyboard={insertN}/>
            <Button name="4" value='4' class='number' insertKeyboard={insertN}/>
            <Button name="5" value='5' class='number' insertKeyboard={insertN}/>
            <Button name="6" value='6' class='number' insertKeyboard={insertN}/>
            <Button name="-" value='-' class='operation'insertKeyboard={insertN}/>
            <Button name="1" value='1' class='number' insertKeyboard={insertN}/>
            <Button name="2" value='2' class='number' insertKeyboard={insertN}/>
            <Button name="3" value='3' class='number' insertKeyboard={insertN}/>
            <Button name="+" value='+' class='operation'insertKeyboard={insertN}/>
            <Button name="0" value='0' class='box0'insertKeyboard={insertN}/>
            <Button name="," value='.' class='number'insertKeyboard={insertN}/>
            <Button name="=" value='=' class='operation'insertKeyboard={insertN}/>
        </div>
    )
}

export default Keyboard