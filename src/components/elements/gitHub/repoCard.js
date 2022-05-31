import classes from './mealItem.module.css'
import {increase, decrease} from '../../../../features/menu/menu'
import {addItem, calcTotal} from '../../../../features/cart/cart'
import {useState} from 'react'


//action dispatcher
// dispatches the increment and decrement actions 

import { useDispatch } from 'react-redux'



const MealItem = {name, desc, stars, issues, username, avatar} =>{
    const price = `$ ${props.meal.price.toFixed(2)}`;
    const dispatch = useDispatch()

    // A template to show a single meal
    // displays the image, name, description and price
    // user can add to cart
    // used in the availableMeals component
    
    // adding item to the cart
    const [added, setAdded] = useState(false)

    const payload = {
            name: props.meal.name,
            quantity: props.meal.quantity,
            price: price
        }

    const addItemHandler = () =>{
        dispatch(addItem(payload))
        setAdded(!added)
    }

    const decreaseHandler =()=>{
        dispatch(decrease(props.meal.id))
        dispatch(calcTotal())
        setAdded(false)
    }

    const increaseHandler =()=>{
        dispatch(increase(props.meal.id))
        dispatch(calcTotal())
        setAdded(false)
    }


    return (
    <li class = {classes.mealItem}>
        <div class = {classes.mealDetail}>
            <div class = {classes.img}>
                <img src = {avatar} alt = {props.meal.name}/>
            </div>
            <div class = {classes.collection}>
                <h3>{name}</h3>
                <p class ={classes.desc}>{desc}</p>
                <div class ={classes.selection}>
                    <div className={classes.iconHolder}>
                        <p>Stars: {stars}</p>
                    </div>
                    <div class = {classes.btnHolder}>
                        <p>issues: {issues}</p>
                    </div>
                    <div>
                        <p>Submitted {day} ago by {name}</p>
                    </div>
                </div>
            </div>
        </div>
    </li>)
}
export default MealItem

