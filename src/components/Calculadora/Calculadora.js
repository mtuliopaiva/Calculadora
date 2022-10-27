
import Display from '../Display/Display'
import Keyboard from '../Keyboard/Keyboard'
import './Calculadora.css'
import Header from '../Header/Header'
import { useState} from 'react'

const Calculadora = () => {

    const [inputDisplay,setInputDisplay] = useState('0');
    const [valores,setValores] = useState([0,0]);


    const insereNum = (val) => {
        setInputDisplay(inputDisplay + val);
        console.log(valores[1]);
        
        
        
        // console.log(num1);
        
        if(val ==='+'){
            setInputDisplay('0');
            console.log(inputDisplay);
            
            // setInput(input + val);
            // let num2 = parseFloat(input);
            // setValores(0,num2);
            // console.log(num1);
            // console.log(num2);
            
        }
    }

    return(
        <div className='container'>
            <Header />
            <Display  disp={inputDisplay}/>
            <Keyboard insertDisplay={insereNum}/>
        </div>
    )
}

export default Calculadora