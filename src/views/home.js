import React from 'react';
import Titulos from "../components/Titulos/Titulos.js"
import TextoDescripcion from '../components/TextoDescripcion/TextoDescripcion.js';
import Footer from '../components/Footer/Footer.js';

function Home() {
    return (
        <div className='landigPage'>
            <Titulos/>
            <TextoDescripcion/>
            <Footer/>
        </div>
    );
}

export default Home;
    