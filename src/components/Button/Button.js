// Botão
import './Button.css'

const Button = (props) => {

    const showDigit = (evento) => {
        // console.log(evento.target.value);

        props.insertKeyboard(evento.target.value);
    }
    return(
        <>
            <button onClick={showDigit} className={props.class} value={props.name}>{props.name}</button>
        </>
    )
}

export default Button