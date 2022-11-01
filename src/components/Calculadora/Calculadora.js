
import Display from '../Display/Display'
import Keyboard from '../Keyboard/Keyboard'
import './Calculadora.css'
import Header from '../Header/Header'
import { useState } from 'react'

const Calculadora = () => {

    const [inputDisplay, setInputDisplay] = useState(0);
    const [oldValue, setOldValue] = useState('');
    const [operator, setOperator] = useState('');

    /*d é o dígito*/
    const insereNum = (d) => {
        if (inputDisplay == 0) {
            setInputDisplay(d);
            if ((d === 'AC') || (d === '%') || (d === '+/-') || (d === '%') || (d === '+') ||
                (d === '-') || (d === '*') || (d === '/') || (d === '=')) {
                setInputDisplay(0);
            }
            if (d === '.') {
                console.log("OK");
                setInputDisplay(d);
            }
        }
        else {
            setInputDisplay(inputDisplay + d);

            if (d == '+' || d == '-' || d == '/' || d == '*') {
                console.log("Operações");
                setOperator(d);
                setOldValue(inputDisplay);
                setInputDisplay(0);
            }
            if (d === '=') {
                console.log(oldValue);
                console.log(operator);
                console.log(inputDisplay);
                let r = oldValue + operator + inputDisplay;
                let result = eval(r);
                setInputDisplay(result);
            }




            // Operações especiais
            if (d == 'AC') {
                setInputDisplay(0)
                setOperator(0);
                setOldValue(0);
            }
            if (d === '+/-') {
                const r = parseFloat(inputDisplay) * -1;
                setInputDisplay(r);
            }
            if (d === '%') {
                const r = parseFloat(inputDisplay) / 100;
                setInputDisplay(r);
            }

        }

    }

    return (
        <div className='container'>
            <Header />
            <Display disp={inputDisplay} />
            <Keyboard insertDisplay={insereNum} />
        </div>
    )
}

export default Calculadora