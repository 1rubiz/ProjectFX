import React, {useContext, useState, useEffect} from 'react';
import UserContext from '../contexts/auth-context';
import Nav from './nav'
import GuestNav from './guestNav';
import { useUser } from "@clerk/clerk-react";
 

const NavBar = ()=>{
// export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser();
 
  // if (!isLoaded || !isSignedIn) {
    // return null;
  // }



// const [email, setEmail]= useState('')
//     const {user} = useContext(UserContext);
//  useEffect(() => {
//   //Runs only on the first render
//       const verifyUser = async()=>{
//               const newUser =await localStorage.getItem('email')
//                 if(newUser){
//                   setEmail(newUser)
//                 }
//       }
//       verifyUser()
// }, [user]);
 // console.log(email);
  return(
    <>
      {!(!isLoaded || !isSignedIn) ? <Nav/> : <GuestNav/>}
    </>
  )
}
export  default NavBar;
