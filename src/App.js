
import {Routes, Route} from 'react-router-dom'
import {Home, About, Blog, Contact} from './pages'

function App() {
  return (
    <main>
        <Routes>
            <Route path ='/comingsoon' element ={<Home/>}/>
            <Route path ='/about' element ={<About/>}/>
            <Route path ='/blog' element ={<Blog/>}/>
            <Route path ='/contact' element ={<Contact/>}/>
        </Routes>
    </main>
  );
}

export default App;
