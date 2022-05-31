import classes from './repoCard.module.css'
import Card from './card'


export const RepoCard = ({name, desc, stars, issues, username, avatar, day}) =>{
    return (
        <Card class = {classes.mealCard}>
            <li class = {classes.mealItem}>
                <div class = {classes.mealDetail}>
                    <div class = {classes.img}>
                        <img src = {avatar} alt = {name}/>
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
            </li>
        </Card>
        )
    
}


