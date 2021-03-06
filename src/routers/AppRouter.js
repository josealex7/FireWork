import React,{useState,useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from '../pages/Login';
import {Registro} from '../pages/Registro';
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import NavBarDos from "../components/header/NavBarDos";
import Footer from '../components/footer/Footer';
import BackToTop from '../components/footer/BackToTop';
import Loading from '../components/loading/Loading';
import HomeOne from "../pages/HomeOne";
import Spinner from "../components/accesorios/Spinner";
import Ayuda from '../pages/Ayuda';
import Busquedas from '../pages/Busquedas';

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
    <Spinner />
  )
}


  return (
    <Router>
      <Routes>

        <Route path="/" element={ <Loading /> } />

        <Route path='/ayuda' element={<Ayuda />} />

        <Route path='/busqueda' element={<Busquedas />} />

        <Route path="/homeuno" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <NavBarDos />
                        <HomeOne />
                        <BackToTop />
                        <Footer />
                    </PublicRoute>
                } />
         
        <Route path="/login" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <NavBarDos />   
                        <Login /> 
                        <Footer />
                    </PublicRoute>
                } />



                <Route path="/registro" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <NavBarDos />
                        <Registro />
                        <Footer />
                    </PublicRoute>
                } />

                
                <Route path="*" element={
                    <PrivateRoute isAuthenticated={isLoggedIn}>
                        <DashboardRoutes/>
                    </PrivateRoute>
                }/>
      </Routes>
    </Router>
  );
}