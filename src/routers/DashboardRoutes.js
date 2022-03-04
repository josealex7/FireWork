import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import HomeTwo from '../pages/HomeTwo';
import NavBarUno from '../components/header/NavBarUno';
import Footer from '../components/footer/Footer';
import AboutFirework from '../pages/AboutFirework';
//import Notifications from '../pages/Notifications';
//import Messages from '../pages/Messages';
import RegistrarProyecto from '../components/registerServices/ofrecerTrabajo/RegistrarProyecto';
import Test from '../pages/Test';
import QuizOne from '../components/quicez/quiz-one/QuizOne';
import Perfil from '../components/perfil/Perfil';
import QuizTwo from '../components/quicez/quiz-two/QuizTwo';
import RegistrarServicio from '../components/registerServices/ofrecerServicio/RegistrarServicio';
import ListAllProjects from '../components/list/ListAllProjects';
import ListAllServices from '../components/list/ListAllServices';
import ListMyProjects from '../components/list/ListMyProjects';
import ListMyServices from '../components/list/ListMyServices';


export const DashboardRoutes = () => {
    return ( 
        <>
            <div>
                <NavBarUno />
                    <Routes>
                        <Route path="/home" element={<HomeTwo />} />
                        <Route path="/about" element={<AboutFirework />} />
                        {/* <Route path='/notificaciones' element={<Notifications/>} />
                        <Route path='/mensajes' element={<Messages/>} /> */}
                        <Route path='/register-proyect' element={<RegistrarProyecto />} />
                        <Route path='/register-service' element={<RegistrarServicio />} />
                        <Route path='/buscar-trabajo' element={<ListAllProjects />} />
                        <Route path='/buscar-servicio' element={<ListAllServices />} />
                        <Route path='/my-projects' element={<ListMyProjects />} />
                        <Route path='/my-services' element={<ListMyServices />} />
                        <Route path="/test" element={<Test />} />
                        <Route path='/prueba-1' element={<QuizOne />} />
                        <Route path='/perfil' element={<Perfil/>} />
                        <Route path='/prueba-2' element={<QuizTwo />} />
                        <Route path='*' element={<Navigate to="/home" />} />
                    </Routes>
                <Footer />
            </div>
        </>
    )
}