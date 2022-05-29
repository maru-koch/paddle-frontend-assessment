import {useState} from 'react'

export const Input =({text, name, handleInput})=>{
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
                type="text" 
                placeholder={text} 
                name ={name} 
                onChange={onChangeHandler}/>
        </setion>
    )
}