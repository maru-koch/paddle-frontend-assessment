import {useState} from 'react'

export const EmailInput =({text, name, handleInput})=>{
    // 
    const [email, setEmail] = useState({})

    const onChangeHandler=(e)=>{
        email[e.target.name] = e.target.value
        setEmail(email)
        handleInput(email)
    }

    return (
        <setion>
            <div>
                <input 
                    type="email" 
                    placeholder="Enter your email address..." 
                    name ={name} 
                    onChange={onChangeHandler}/>
                <button>
                    JOIN OUR WAITING LIST
                </button>
            </div>
            
        </setion>
    )
}