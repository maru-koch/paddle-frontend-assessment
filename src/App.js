import './App.css'
import {Routes, Route} from 'react-router-dom'
import {Home, About, Blog, Contact, GitHubInfo} from './pages'
import { Navigate } from 'react-router-dom'

function App() {
  return (
    <main>
        <Routes>
            <Route path ='' element={<Navigate to="/comingsoon" replace />}/>
            <Route path ='/comingsoon' element ={<Home/>}/>
            <Route path ='/about' element ={<About/>}/>
            <Route path ='/blog' element ={<Blog/>}/>
            <Route path ='/contact' element ={<Contact/>}/>
            <Route path ="/github" element ={<GitHubInfo/>}/>
        </Routes>
    </main>
  );
}

export default App;
