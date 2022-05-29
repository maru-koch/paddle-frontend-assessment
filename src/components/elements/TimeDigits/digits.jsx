import PropTypes from 'prop-types';

export const Digits =({digit, text})=>{
    return(
        <section>
            <div>
                <h3>{digit}</h3>
                <p>{text}</p>
            </div>
        </section>
    )
};

Digits.propTypes ={
    digit: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
}