import React, {useContext} from 'react';
import UserContext from '../contexts/auth-context';
import Nav from './nav'
import GuestNav from './guestNav';


const NavBar = ()=>{
 const { user } = useContext(UserContext);
  return(
    <>
      {(user !== null) ? <Nav/> : <GuestNav/>}
    </>
  )
}
export  default NavBar;
