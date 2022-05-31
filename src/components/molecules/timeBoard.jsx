import {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import {Time, Input} from '../elements';
import classes from './timeBoard.module.css';

export const TimeBoard =({time, text}) =>{

    const [day, setDay] = useState(7)
    const [hour, setHour] = useState(8)
    const [minute, setMinute] = useState(54)
    const [second, setSecond] = useState(23)

    const startTimer=()=>{

        // increase second by 1 if second is less than 60 else 0
        setSecond(second > 60? 0 : second + 1);

        //increase minute by 1 if minute is less than 60 else 0
        setMinute(second === 60? minute + 1 : minute < 60 ? minute: 0);

        // increase hour by 1 if hour is less than 24 else 0
        setHour(minute === 60?  hour + 1 : hour <= 24 ? hour: 0);

        //increase minute by 1 if minute is less than 60 else 0
        setDay(hour === 24 && day > 1? day - 1 : 0);
    }
    
 

    useEffect(()=>{

        // start clock when component mounts
        
        setInterval(()=>{startTimer()}, 1000);
        // clean up when component unmounts
        

    }, [day])

    return(
        <section className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.time__wrapper}>
                  
                    <Time digit = {day} text ="Days"/>
                    <Time digit = {hour} text ="Hour"/>
                    <Time digit = {minute} text ="Minutes"/>
                    <Time digit = {second} text ="Second"/>
                  
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