import './Header.css'
const Header = (props) => {
    

    return (
        <div className='header'>
            <div className='time'>
                <p>{props.horas}:{props.minutos}</p> 
            </div>
            <div className='extra'>
                <img className='battery' src='./images/battery.svg' />
                <img src='./images/signal.svg' ></img>
                <img src='./images/wifi.svg' ></img>
            </div>

        </div>

    )
}

export default Header