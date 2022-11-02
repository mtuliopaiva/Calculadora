import './Header.css'
const Header = (props) => {
    

    return (
        <div className='header'>
            <div className='time'>
                <p>{props.horas}:{props.minutos}</p> 
            </div>
            <div className='extra'>
                <img className='battery' src='./images/battery.svg' alt='Imagem da carga da bateria estática'/>
                <img src='./images/signal.svg' alt='Imagem do sinal estático' />
                <img src='./images/wifi.svg' alt='Imagem do sinal de wifi estática' />
            </div>

        </div>

    )
}

export default Header