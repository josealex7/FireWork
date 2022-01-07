import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import { Employees } from '../components/Employees';
import NavBarUno from '../components/NavBarUno';
import Footer from '../components/Footer';
import Notifications from '../components/Notifications';
import Messages from '../components/Messages';

export const DashboardRoutes = () => {
    return ( 
        <>
            <div>
                <NavBarUno/>
                    <Routes>
                        <Route path="/" element={<Employees />} />
                        <Route path='/notificaciones' element={<Notifications/>} />
                        <Route path='/mensajes' element={<Messages/>} />
                        <Route path='*' element={<Navigate to="/" />} />
                    </Routes>
                <Footer/>
            </div>
        </>
    )
}