import { ComingSoon } from "../components"
import { Layout } from "../layouts"
import classes from './home.module.css'

export const Home =()=>{
    return (
    <main className ={classes.container}>
        <Layout>
            <ComingSoon/>
        </Layout>
    </main>
    )
}
