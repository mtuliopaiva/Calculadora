
import Display from '../Display/Display'
import Keyboard from '../Keyboard/Keyboard'
import './Calculadora.css'
import Header from '../Header/Header'
import { useState} from 'react'

const Calculadora = () => {

    const [inputDisplay,setInputDisplay] = useState('');
    const [valor,setValor] = useState('');

    /*d é o dígito*/ 
    const insereNum = (d) => {
        setInputDisplay(inputDisplay + d);
        // console.log(valorDigitado);
        
        // console.log(valor);
        
        if(d =='+' ||d =='-' ||d =='/' ||d =='*' ){
            console.log("Operações");
            // console.log(valor);
        }
        
        if(d ==='='){
                let r = eval(inputDisplay);
                setInputDisplay(r);
                console.log("Igual");
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