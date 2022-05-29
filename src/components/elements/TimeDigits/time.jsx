import PropTypes from 'prop-types';
import classes from './timeDigits.module.css'

export const Time =({digit, text})=>{
    return(
        <section className={classes.container}>
            <div className ={classes.wrapper}>
                <h3>{digit}</h3>
                <p>{text}</p>
            </div>
        </section>
    )
};

Time.propTypes ={
    digit: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
}