import Card from '../../UI/card';
import classes from './availableMeals.module.css'
import RepoInfo from './mealItems/mealItem'


import { useSelector } from 'react-redux'



const AvailableMeals = ()=>{ 

    // Showcases all the available meals on the menu
    // User can sort list of meals base on category
    
    // an array of all available meal in the menu
    const { menuItems } = useSelector((store)=>store.menu)
    
    return (
        <Card class = {classes.mealCard}>
            <ul class ={classes.mealList}>
                {menuItems.map(meal =><RepoInfo meal = {meal} key = {meal.id}/>)}
            </ul>
        </Card>
    )
}

export default AvailableMeals