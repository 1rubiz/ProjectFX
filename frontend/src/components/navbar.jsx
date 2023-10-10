import React, {useContext} from 'react';
import AuthContext from '../contexts/auth-context';
import Nav from './nav'
import GuestNav from './guestNav';


const NavBar = ()=>{
 const auth = useContext(AuthContext)
  return(
    <>
      {auth.status ? <Nav/> : <GuestNav/>}
    </>
  )
}
export  default NavBar;
