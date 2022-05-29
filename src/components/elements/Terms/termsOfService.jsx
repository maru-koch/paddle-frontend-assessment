

import classes from './socialMedia.module.css'

export const TermsOfService =()=>{

    // displays social media handles

    return (
        <setion className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.terms}>
                    <p>Terms of Services</p>
                </div>
                <div className={classes.terms}>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </setion>
    )
}