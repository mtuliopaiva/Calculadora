import Display from '../Display/Display'
import Keyboard from '../Keyboard/Keyboard'
import './Calculadora.css'

const Calculadora = () => {
    return(
        <div className='container'>
            <Display />
            <Keyboard />
        </div>
    )
}

export default Calculadora