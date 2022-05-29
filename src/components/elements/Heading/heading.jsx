
import classes from './heading.module.css'

export const Heading =({text, name, handleInput})=>{
    
    // Displays the heading on the home page
  
    return (
        <setion className={classes.container}>
            <div className={classes.wrapper}>
                <h2>SOMETHING AWESOME IS COMING SOON</h2>
                <p>Your all-in-one affiliate marketing tracking software 
                    <span> track, automated</span> and
                    <span> optimize</span> your campaigns
                </p>
            </div>
        </setion>
    )
}