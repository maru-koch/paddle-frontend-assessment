
import PropTypes from 'prop-types'
import classes from './card'


export const Card =({children, style}) =>{
    return(
        <card className={classes.container}>
            <section className={`${classes.wrapper} ${style}`}>
                {children}
            </section>
        </card>
    )
};

Card.propTypes ={
    children: PropTypes.node.isRequired,
    style: PropTypes.string,
}