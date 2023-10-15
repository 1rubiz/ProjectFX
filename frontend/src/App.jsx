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
import Inbox from './pages/Inbox'
import AuthContext from './contexts/auth-context';
import Cashier from './pages/Cashier';
import Report from './pages/Report';
import Settings from './pages/Settings';

function App() {
  const [count, setCount] = useState(0)
  const [status, setStatus] = useState(false)
  const [user, setUser] = useState(null)
  const login =()=>{
    console.log('request to login')
  }
        // <AuthContext.Provider value={{login: setStatus, setUser:setUser }}>
  // <Nav/>
  return (
    <BrowserRouter>
    <AuthContext.Provider value={{user: user, setUser: setUser}}>
      <NavBar/>
      <Routes>
        <Route path='/onboard' element={<Onboard/>}/>
        <Route path='/market' element={<Market/>} />
        <Route path='/' element={<Landing/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/inbox' element={<Inbox/>}/>
        <Route path='/cashier' element={<Cashier/>}/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/settings' element={<Settings/>} />
      </Routes>
      <Footer/>
    </AuthContext.Provider>
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
