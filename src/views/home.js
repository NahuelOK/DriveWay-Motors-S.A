import React from 'react';
import Fondo from "../imgs/fondo.png";

function Home() {
    return (
        <div className='contenedor-fondo'>
            <img className="fondo" src={Fondo} alt="Fondo" />
        </div>
    );
}

export default Home;
