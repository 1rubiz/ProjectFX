import { useState } from 'react'
import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Nav from './components/nav';
import Footer from './components/footer';
import NavBar from './components/navbar.jsx';
import Dashboard from './pages/Dashboard';
import Onboard from './pages/Onboard';
import Profile from './pages/Profile'
import Landing from './pages/Landing';
import Market from './pages/Market'
import News from './pages/News'
import AuthContext from './contexts/auth-context';

function App() {
  const [count, setCount] = useState(0)
  const login =()=>{
    console.log('request to login')
  }
  // <Nav/>
  return (
    <BrowserRouter>
    <AuthContext.Provider value={{status: false, login: login}}>
      <NavBar/>
    </AuthContext.Provider>
      <Routes>
        <Route path='/onboard' element={<Onboard/>}/>
        <Route path='/market' element={<Market/>} />
        <Route path='/' element={<Landing/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/news' element={<News/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

// bg-0D1321
// text-F0EBD8
// btn-3E5C76
// 748CAB
// 1D2D44
// <a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a>
