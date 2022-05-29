
import {useState} from 'react'
import classes from './search.module.css'

export const Search =({text, name, handleInput})=>{

    // Filters article base on the keywords entered in the search input

    const [forData, setForData] = useState({})

    const onChangeHandler=(e)=>{
        forData[e.target.name] = e.target.value
        setForData(forData)
        handleInput(forData)
    }

    return (
        <setion className ={classes.container}>
            <div className ={classes.wrapper}>
                <input 
                    type="text" 
                    placeholder={text} 
                    name ={name} 
                    onChange={onChangeHandler}/>
                <div>
                    <i className="fa fa-search"></i>
                </div>
            </div>
            
        </setion>
    )
}