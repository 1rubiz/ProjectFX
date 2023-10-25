import React from 'react'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import SignUpPage from '../components/Signup';
import SignInPage from '../components/Login';

// import Nav from './components/nav';
import Footer from '../components/footer';
import NavBar from '../components/navbar.jsx';
import Dashboard from './Dashboard';
import Onboard from './Onboard';
import Profile from './Profile'
import Landing from './Landing';
import Market from './Market'
import News from './News'
import Inbox from './Inbox'
// import AuthContext from './contexts/auth-context';
import Cashier from './Cashier';
import Report from './Report';
import Settings from './Settings';
 
export default function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  const clerkPubKey = import.meta.env.VITE_CLERK_KEY;
// console.log(clerkPubKey)
  if (!clerkPubKey) {
  throw new Error("Missing Publishable Key")
}
 
  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
    <NavBar/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/sign-in/*"
          element={<SignInPage/>}
        />
        <Route
          path="/sign-up/*"
          element={<SignUpPage/>}
        />
                <Route
          path="/dashboard/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route path='/market' element={<Market/>} />
        <Route path='/dashboard'
          element={
          <>
            <SignedIn>
              <Dashboard/>
            </SignedIn>
             <SignedOut>
              <RedirectToSignIn />
           </SignedOut>
          </>
          }/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/inbox' element={<Inbox/>}/>
        <Route path='/cashier' element={<Cashier/>}/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/settings' element={<Settings/>} />
        
      </Routes>
      <Footer/>
    </ClerkProvider>
  );
}

// <Route
//           path="/protected"
//           element={
//           <>
//             <SignedIn>
//               <ProtectedPage />
//             </SignedIn>
//              <SignedOut>
//               <RedirectToSignIn />
//            </SignedOut>
//           </>
//           }
//         />