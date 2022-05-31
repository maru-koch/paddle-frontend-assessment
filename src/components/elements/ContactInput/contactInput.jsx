import { useState } from 'react';
import classes from './contactInput.module.css'
import PropTypes from 'prop-types'


export const ContactInput = ({label, name, type, placeholder}) =>{

    const [inputData, setInputData] = useState() 

    const onChangeHandler=(e)=>{
        inputData[e.target.value] = e.target.value
        setInputData(inputData)
    }

    return (
        <div className={classes.container}>

            <div className={classes.wrapper}>
                <div className ={classes.label}>
                    <label>{label}</label>
                </div>
                <input 
                    type= {type} 
                    placeholder = {placeholder} 
                    name ={name}
                    onChange={onChangeHandler}
                    rows = {name === 'textarea' ? '5' :''}/>
            </div>

        </div>
    )
}

ContactInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
}