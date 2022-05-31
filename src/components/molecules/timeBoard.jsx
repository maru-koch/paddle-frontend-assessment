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
        // implement timer here
    }
    
    useEffect(()=>{
         setInterval(()=>{}, 1000000);
         // on component unmount, clean up
         return ()=>{

         }

    },[])

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