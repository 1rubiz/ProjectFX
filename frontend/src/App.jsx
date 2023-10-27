import { ClerkProvider } from "@clerk/clerk-react";
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
import ClerkProviderWithRoutes from './pages/Router'

function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}


export default App

// bg-0D1321
// text-F0EBD8
// btn-3E5C76
// 748CAB
// 1D2D44
// <a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a>

// import React from "react";
// import "./App.css";
// import { ClerkProvider } from "@clerk/clerk-react";
 
// if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }
// const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
 
// function App() {
//   return (
//     <ClerkProvider publishableKey={clerkPubKey}>
//       <div>Hello from clerk</div>
//     </ClerkProvider>
//   );
// }
 
// export default App;



// import React from "react";
// import "./App.css";
// import {
//   ClerkProvider,
//   SignedIn,
//   SignedOut,
//   UserButton,
//   useUser,
//   RedirectToSignIn,
// } from "@clerk/clerk-react";
 
// if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
//   throw "Missing Publishable Key"
// }
 
// const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
 
// function App() {
//   return (
//     <ClerkProvider publishableKey={clerkPubKey}>
//       <SignedIn>
//         <Welcome />
//       </SignedIn>
//       <SignedOut>
//         <RedirectToSignIn />
//       </SignedOut>
//     </ClerkProvider>
//   );
// }
 
// function Welcome() {
//   return <div>Hello you are signed in</div>;
// }
 
// export default App;