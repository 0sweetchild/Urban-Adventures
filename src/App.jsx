
import { Route, Routes } from 'react-router'
import './App.css'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Layout from './components/Layout'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/COntact'
import Signin from './pages/Signin'
import Destination from './pages/Destination'
import Packages from './pages/Packages'
import PackageDetails from './pages/PackageDetails'
import Experience from './pages/Experience'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
    

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />

        <Route path="/destination" element={<Destination />} />
        <Route path="/about" element={<About />} />

        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:id" element={<PackageDetails />} />
      </Routes>
    </Layout>
  )
}

export default App
