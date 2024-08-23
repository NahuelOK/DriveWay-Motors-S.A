import React from 'react';
import Titulos from "../components/Titulos/Titulos.js"
import TextoDescripcion from '../components/TextoDescripcion/TextoDescripcion.js';
import Footer from '../components/Footer/Footer.js';
import Formulario from '../components/Formulario/Formulario.js';

function Home() {
    return (
        <div className='landigPage'>
            <Titulos/>
            <div className='centro-pagina'>
                <TextoDescripcion/>
                <Formulario/>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
    