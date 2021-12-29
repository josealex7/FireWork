import '../styles/App.css';
import {Typography} from '@mui/material'
import Footer from '../components/Footer';
import NavBarDos from '../components/NavBarDos';
//import Messages from '../components/Messages';

function App() {
  return (
    <div className="App">
      <NavBarDos />
      <Typography variant="h3" component="h2">
        Inicia el proyecto
      </Typography>
      <img src="https://res.cloudinary.com/app-firework1/image/upload/v1640728184/logo/Logo1_v934qh.png" alt="logo" />
      {/* <Messages /> */}
      <Footer />
    </div>
  );
}

export default App;
