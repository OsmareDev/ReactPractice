import { useState } from 'react'
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import Login from './Containers/Login/Login'
import Home from './Containers/Home/Home'
import AboutUs from './Containers/AboutUs/AboutUs'
import Contact from './Containers/Contact/Contact'
import './Styles/Global.scss'
import './Styles/Colors.scss'
import './Styles/Sizes.scss'
import './Styles/Flex.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
