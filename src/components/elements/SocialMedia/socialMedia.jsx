
import classes from './socialMedia.module.css';

export const SocialMedia =()=>{

    // displays social media handles

    return (
        <setion className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.icons}>
                   <i class="fab fa-youtube"></i>
                </div>
                <div className={classes.icons}>
                    <i className ="fab fa-facebook-square"></i>
                </div>
                <div className={classes.icons}>
                    <i className ="fab fa-linkedin"></i>
                </div>
                <div className={classes.icons}>
                    <i class="fa-brands fa-instagram"></i>
                </div>
                <div className={classes.icons}>
                    <i className ="fab fa-twitter-square"></i>
                </div>
            </div>
        </setion>
    )
};