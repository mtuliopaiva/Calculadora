
import Display from '../Display/Display'
import Keyboard from '../Keyboard/Keyboard'
import './Calculadora.css'
import Header from '../Header/Header'
import { useState} from 'react'

const Calculadora = () => {

    const [inputDisplay,setInputDisplay] = useState('');
    const [valor,setValor] = useState('0');

    /*d é o dígito*/ 
    const insereNum = (d) => {
        
        setInputDisplay(inputDisplay + d);
        if(d ==='='){
            let r = eval(inputDisplay);
            console.log(r);
            setInputDisplay(r);
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