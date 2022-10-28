
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
        
        if(d =='+' ||d =='-' ||d =='/' ||d =='*' ){
            console.log("Operações");
            console.log(valor);
        }
        
        if(d ==='='){
            try{
                let r = eval(inputDisplay);
                console.log(r);
                setInputDisplay(parseFloat(r));
            }
            catch{
                setInputDisplay('error');
            }
  
        }
        setInputDisplay(inputDisplay + d);
        setValor(inputDisplay + d);
        
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