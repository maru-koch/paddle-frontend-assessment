
import classes from './footer.module.css'
import { CopyRight, Terms, SocialMedia } from '../../components';


export const Footer =({time, text}) =>{
    return(
        <footer className={classes.container}>
            <section className={classes.wrapper}>
                <SocialMedia/>
                <Terms/>
                <CopyRight/>
            </section>
        </footer>
    )
};

