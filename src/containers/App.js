import '../styles/App.css';
import {Typography} from '@mui/material';
import Footer from '../components/Footer';
import NavBarUno from '../components/NavBarUno';
//import Messages from '../components/Messages';
//import Notifications from '../components/Notifications';

function App() {
  return (
    <div className="App">
      <NavBarUno />
      <Typography variant="h3" component="h2">
        Inicia el proyecto
      </Typography>
      <img src="https://res.cloudinary.com/app-firework1/image/upload/v1640728184/logo/Logo1_v934qh.png" alt="logo" />
      {/* <Messages /> */}
      {/* <Notifications /> */}
      <Footer />
    </div>
  );
}

export default App;
