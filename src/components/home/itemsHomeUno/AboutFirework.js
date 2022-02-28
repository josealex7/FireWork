import React from 'react';
import './stylesItemsHome.elements.css';

const AboutFirework = () => {
    return (
        <section className="first-container" id="about">
            <div className="container-one">
                <div>
                    <h2 className="container-one-title">¿Cómo funciona FireWork?</h2>
                    <p className="container-one-subtitle">¡Trabaja como freelancer fácilmente!</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/app-firework1/image/upload/v1640726635/imagenes/undraw_digital_nomad_re_w8uy_pfgcwk.svg" alt="firework functions" className="container-one-img"/>
                </div>
            </div>
            <div className="container-type-one">
                <div className="container-step">
                    <h3 className="title-step">1.  Busca proyectos</h3>
                </div>
                <div className="container-text">
                    <p className="text-step">- Puedes buscar el proyecto que prefieras, y que se adapte a tu perfil</p>
                    <p className="text-step">- Arma tu perfil y describe las habilidades que quieres mostrar</p>
                </div>
            </div>
            <div className="container-type-two">
                <div className="container-text">
                    <p className="text-step">- Ponte en contacto con el cliente y  negocia el plazo de tiempo y el pago, todo desde la plataforma.</p>
                </div>
                <div className="container-step">
                    <h3 className="title-step">2. Envía tu propuesta</h3>
                </div>
            </div>
            <div className="container-type-one">
                <div className="container-step">
                    <h3 className="title-step">3. Desarrolla el producto</h3>
                </div>
                <div className="container-text">
                    <p className="text-step">- Despues de acordar los detalles con el cliente, puedes desarrollar el proyecto a tu ritmo, sin horarios fijos y a tu ritmo</p>
                </div>
            </div>
            <div className="container-type-two">
                <div className="container-text">
                    <p className="text-step">- Una vez entregues el producto recibiras de forma segura tu pago</p>
                </div>
                <div className="container-step">
                    <h3 className="title-step">4. Recibe tu pago</h3>
                </div>
            </div>
        </section>
    )
};

export default AboutFirework;