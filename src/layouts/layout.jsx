
import {NavHeader, Footer} from './index'
import classes from './layout.module.css'
export const Layout =({children})=>{
    return (
        <main className={classes.container}>
            <NavHeader/>
            {children}
            <Footer/>
        </main>
    )
}

