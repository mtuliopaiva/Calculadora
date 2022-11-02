
import Display from '../Display/Display'
import Keyboard from '../Keyboard/Keyboard'
import './Calculadora.css'
import Header from '../Header/Header'
import { useState } from 'react'

const Calculadora = () => {

    const [inputDisplay, setInputDisplay] = useState(0);
    const [oldValue, setOldValue] = useState('');
    const [operator, setOperator] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');

    /*d é o dígito*/
    const insereNum = (d) => {

        if (inputDisplay == 0) {
            setInputDisplay(d);
            if ((d === 'AC') || (d === '%') || (d === '+/-') || (d === '%') || (d === '+') ||
                (d === '-') || (d === '*') || (d === '/') || (d === '=')) {
                setInputDisplay(0);
            }
            if (d === '.') {
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
                if (operator != '') {
                    console.log(oldValue);
                    console.log(operator);
                    console.log(inputDisplay);
                    let r = oldValue + operator + inputDisplay;
                    let result = eval(r);


                    console.log(result);
                    let stringResult = result.toString();
                    console.log(stringResult.length);

                    if (stringResult.length > 9) {
                        console.log("Condição 1")
                        let expResult = result.toExponential(3);

                        setInputDisplay(expResult);
                    }
                    else {

                        setInputDisplay(result);
                    }



                }
                //Pressionado igual e operador é vazio
                if (operator == '') {
                    setInputDisplay("Erro");
                }

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




            // -------- Contador de virgula--------------------
            var quant = 0
            for (var i = 0; i < inputDisplay.length; i++) {
                if (inputDisplay[i] == '.') {
                    quant++
                }
            }
            if ((quant >= 1) && (d === '.')) {
                setInputDisplay("Erro");
                setOperator(0);
                setOldValue(0);
            }
            //--------------------------------------------------
        }

    }
    //----------------Relógio
    var dataAtual = new Date();
    var horas = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();

    const teste = () => {
        setHour(horas);
        setMinute(minutos);
    }
    setInterval(teste, 500);

    return (
        <div className='container'>
            <Header horas={horas} minutos={minutos}/>
            <Display disp={inputDisplay} />
            <Keyboard insertDisplay={insereNum} />
        </div>
    )
}

export default Calculadora