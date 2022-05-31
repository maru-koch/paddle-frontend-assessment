import PropTypes from 'prop-types'
import classes from './button.module.css'

const Button =({text})=>{
    return (
        <button className={`base ${classes.btn}`}>
            {text}
        </button>
    )
}

Button.propType = {
    text: PropTypes.string
}

export default Button