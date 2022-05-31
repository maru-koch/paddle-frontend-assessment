import classes from './repoCard.module.css'
import Card from './card'


export const RepoCard = ({userName, repoName, desc, stars, issues, username, avatar, day, count}) =>{
    return (
        <Card style = {classes.card}>
            <li class = {classes.repoCard}>
                <div class = {classes.mealDetail}>
                    <div class = {classes.img}>
                        <img src = {avatar} alt = {userName}/>
                    </div>
                    <div class = {classes.collection}>
                        <h2>{repoName}</h2>
                        <p class ={classes.desc}>{desc}</p>
                        <div class ={classes.selection}>
                            <div className={classes.iconHolder}>
                                <p>Stars:</p>
                                <p><span>{stars}</span></p>
                            </div>
                            <div className = {classes.iconHolder}>
                                <p>issues:</p>
                                <p><span>{stars}</span></p>
                            </div>
                            <div className = {classes.iconHolder}>
                                <p>Submitted {day} ago by:</p>
                                <p><span>{userName}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className ={classes.count}>
                    <h3>{count}</h3>
                </div>
            </li>
        </Card>
        )
    
}


