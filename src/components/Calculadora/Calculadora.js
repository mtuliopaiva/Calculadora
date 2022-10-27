
import Display from '../Display/Display'
import Keyboard from '../Keyboard/Keyboard'
import './Calculadora.css'
import Header from '../Header/Header'

const Calculadora = () => {
    return(
        <div className='container'>
            <Header />
            <Display />
            <Keyboard />
        </div>
    )
}

export default Calculadora