
import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/COntact'
import Signin from './pages/Signin'

function App() {


  return (
    <>
      <Layout>
     <Routes>
    
      
     
      <Route path='/navbar' element={<Navbar/>}/>

      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/signin' element={<Signin/>}/>

      <Route path='/footer' element={<Footer/>}/>


     
     </Routes>
     </Layout>  
    </>
  )
}

export default App
