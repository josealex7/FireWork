import React,{useState,useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from '../components/Login';
import {Registro} from '../components/Registro';
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import Footer from '../components/Footer';
import NavBarDos from '../components/NavBarDos';
import HomeUno from "../components/HomeUno";

export default function AppRouter() {

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user?.uid){
         //console.log(user)
         setIsLoggedIn(true)
        }
        else{
         setIsLoggedIn(false)
        }

        setChecking(false)
    })

 
}, [setIsLoggedIn,setChecking])


if(checking){
  return(
      <h1>Espere...</h1>
  )
}


  return (
    <Router>
        <Routes>

        <Route path="/homeuno" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <NavBarDos/>
                        <HomeUno/>
                        <Footer/>
                    </PublicRoute>
                } />
         
        <Route path="/login" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <NavBarDos/>   
                        <Login/> 
                        <Footer/>
                    </PublicRoute>
                } />



                <Route path="/registro" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <NavBarDos/>
                        <Registro/>
                        <Footer/>
                    </PublicRoute>
                } />

                
                <Route path="/*" element={
                    <PrivateRoute isAuthenticated={isLoggedIn}>
                        <DashboardRoutes/>
                    </PrivateRoute>
                }/>
        </Routes>
    </Router>
  );
}