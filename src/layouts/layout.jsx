
import {NavHeader, Footer} from './index'

export const Layout =({children})=>{
    return (
        <main>
            <NavHeader/>
            {children}
            <Footer/>
        </main>
    )
}

