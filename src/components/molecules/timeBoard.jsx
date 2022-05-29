import PropTypes from 'prop-types';
import {Time, Input} from '../elements';
import classes from './timeBoard.module.css';

export const TimeBoard =({time, text}) =>{
    return(
        <section className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.time__wrapper}>
                  
                    <Time digit ="7" text ="Days"/>
                    <Time digit ="24" text ="Hour"/>
                    <Time digit ="54" text ="Minutes"/>
                    <Time digit ="11" text ="Second"/>
                  
                </div>
                <div className={classes.input__wrapper}>
                    <Input name ="first_name" placeholder ="First Name"/>
                    <Input name ="first_name" placeholder ="Last Name"/>
                </div>
            </div>
        </section>
    )
};

TimeBoard.propTypes ={
    time: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
}