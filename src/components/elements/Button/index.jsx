import PropTypes from 'prop-types'

export const Button =({children})=>{
    return (
        <button>
            {children}
        </button>
    )
}

Button.propType = {
    children: PropTypes.node,
    text: PropTypes.string
}