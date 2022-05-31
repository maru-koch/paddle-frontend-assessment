import PropTypes from 'prop-types'
import classes from './button.module.css'

export const Button =({text})=>{
    return (
        <button className={`base ${classes.btn}`}>
            {text}
        </button>
    )
}

Button.propType = {
    text: PropTypes.string
}