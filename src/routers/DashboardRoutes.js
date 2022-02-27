import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import HomeTwo from '../pages/HomeTwo';
import NavBarUno from '../components/header/NavBarUno';
import Footer from '../components/footer/Footer';
import Notifications from '../pages/Notifications';
import Messages from '../pages/Messages';

export const DashboardRoutes = () => {
    return ( 
        <>
            <div>
                <NavBarUno />
                    <Routes>
                        <Route path="/" element={<HomeTwo />} />
                        <Route path='/notificaciones' element={<Notifications/>} />
                        <Route path='/mensajes' element={<Messages/>} />
                        <Route path='*' element={<Navigate to="/" />} />
                    </Routes>
                <Footer />
            </div>
        </>
    )
}