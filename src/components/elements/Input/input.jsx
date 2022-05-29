import {useState} from 'react'
import classes from './input.module.css'

export const Input =({placeholder, name, handleInput})=>{
    // 
    const [forData, setForData] = useState({})

    const onChangeHandler=(e)=>{
        forData[e.target.name] = e.target.value
        setForData(forData)
        handleInput(forData)
    }

    return (
        <setion>
            <input 
                className ={classes.userInput}
                type="text" 
                placeholder={placeholder} 
                name ={name} 
                onChange={onChangeHandler}/>
        </setion>
    )
}