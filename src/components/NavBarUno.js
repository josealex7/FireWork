import React from 'react';
import { Link } from "react-router-dom";

const NavBarUno = () => {

    return (
      <div>
          <h1>NavBar principal de usuario con login</h1>

          <button>
                        <Link to="/" className='links'>
                            Home
                        </Link>
                    </button>

                    <button>
                        <Link to="/notificaciones" className='links'>
                            Notificaciones
                        </Link>
                    </button>

                    <button>
                        <Link to="/mensajes" className='links'>
                            mensajes
                        </Link>
                    </button>
      </div>
    )
}

export default NavBarUno