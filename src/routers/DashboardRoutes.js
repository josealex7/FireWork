import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import HomeTwo from '../pages/HomeTwo';
import NavBarUno from '../components/header/NavBarUno';
import Footer from '../components/footer/Footer';
import Notifications from '../pages/Notifications';
import Messages from '../pages/Messages';
import Test from '../pages/Test';
import QuizOne from '../components/quicez/quiz-one/QuizOne';

export const DashboardRoutes = () => {
    return ( 
        <>
            <div>
                <NavBarUno />
                    <Routes>
                        <Route path="/home" element={<HomeTwo />} />
                        <Route path="/test" element={<Test />} />
                        <Route path='/notificaciones' element={<Notifications/>} />
                        <Route path='/mensajes' element={<Messages/>} />
                        <Route path='/prueba-1' element={<QuizOne />} />
                        <Route path='*' element={<Navigate to="/home" />} />
                    </Routes>
                <Footer />
            </div>
        </>
    )
}