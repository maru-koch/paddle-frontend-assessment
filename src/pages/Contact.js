import classes from './contact.module.css'
import {ContactInput, Button} from '../components'
import {Link} from 'react-router-dom'
import blurred_image from '../assets/images/comingsoon.png'

export const Contact =()=>{
    return (
    <main className={classes.container}>
        <div className={classes.backdrop}>
            <img src={blurred_image} alt ="background cover"/>
        </div>
        <div className={classes.wrapper}>
        
            <section className={classes.left}>
            </section>
            <section className={classes.right}>
                <div className={classes.contact}>
                    <divn className={classes.contact__title}>
                        <p>
                            Hey, We are still in the works,
                            but you can send us a message!
                        </p>
                    </divn>
                    <div className={classes.contact__input}>
                        <ContactInput type = "text" label = "First name" placeholder="Enter Your first name"/>
                        <ContactInput type = "text" label = "Last name" placeholder="Enter Your last name"/>
                        <ContactInput type = "text" label = "Email address" placeholder="Enter Your email"/>
                    </div>
                    <div className={classes.contact__textarea}>
                        <ContactInput 
                            type = "textarea" 
                            label ="Tell Us What You Need Help With" 
                            placeholder = "Enter A Topic, Like 'Channel Problem...' "/>
                    </div>
                    {/* <div className={classes.contact__btn}>
                        <Button text = "SEND NOW"/>
                    </div> */}
                </div>
         
                 <div className ={classes.icon} href ="/comingsoon">
                    <i class="fa-solid fa-arrow-right-long"></i>
                </div>
               
            </section>
        </div>
    </main>
    
    )
}