import {useState} from 'react'
import classes from './emailInput.module.css'


export const EmailInput =({text, name, handleInput})=>{

    // displays email and button on the comingsoon page
    // uplift the email to the ** component

    const [email, setEmail] = useState({})

    const onChangeHandler=(e)=>{
        email[e.target.name] = e.target.value
        setEmail(email)
        handleInput(email)
    }

    return (
        <setion className={classes.container}>
            <div className={classes.email__wrapper}>
                <input 
                    type="email" 
                    placeholder="Enter your email address..." 
                    name ={name} 
                    onChange={onChangeHandler}/>
                <button className={classes.btn}>
                    JOIN OUR WAITING LIST
                </button>
            </div>
            
        </setion>
    )
}