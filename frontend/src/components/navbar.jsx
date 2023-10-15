import React, {useContext, useState, useEffect} from 'react';
import UserContext from '../contexts/auth-context';
import Nav from './nav'
import GuestNav from './guestNav';


const NavBar = ()=>{
const [email, setEmail]= useState('')
    const {user} = useContext(UserContext);
 useEffect(() => {
  //Runs only on the first render
      const verifyUser = async()=>{
              const newUser =await localStorage.getItem('email')
                if(newUser){
                  setEmail(newUser)
                }
      }
      verifyUser()
}, [user]);
 // console.log(email);
  return(
    <>
      {(!email) ? <Nav/> : <GuestNav/>}
    </>
  )
}
export  default NavBar;
