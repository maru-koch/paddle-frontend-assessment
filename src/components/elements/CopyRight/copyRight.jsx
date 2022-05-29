
import classes from './copyRight.module.css'

export const CopyRight =()=>{

    // displays social media handles

    return (
        <setion className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.copyright__wrapper}>
                    <p>Copyright 2022 @ Peddle Technologies. All right reserved.</p>
                </div>
            </div>
        </setion>
    )
}