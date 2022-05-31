
import { Heading, TimeBoard, EmailInput } from '../../components'
import classes from './comingSoon.module.css'

export const ComingSoon =()=>{
    
    // comingsoon -> home page
    // Displays the heading, subheading, time, and email input at the landing page

    return (
        <setion className ={classes.container}>
            <div className ={classes.wrapper}>
               <Heading/>
               <TimeBoard/>
               <EmailInput/>
            </div>
            {/* <div className ={classes.crescent}>
            </div> */}
            <div className ={classes.circle} id = {classes.circle1} >
            </div>
            <div className ={classes.circle} id = {classes.circle2} >
            </div>
            <div className ={classes.circle} id = {classes.circle3} >
            </div>
        </setion>
    )
}