import React, { useRef } from 'react';

function Formulario() {

    const formRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita el envío por defecto del formulario
        
        const formData = new FormData(event.target);
        const datos = Object.fromEntries(formData.entries());

        try {
            // Enviar los datos al backend
            const response = await fetch('http://localhost:8080/datos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            });

            // Verificar la respuesta
            if (response.ok) {
                const result = await response.json();
                console.log('Datos enviados correctamente:', result);
                if (formRef.current) {
                    formRef.current.reset();
                }
            } else {
                console.error('Error al enviar datos:', response.statusText);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        <div className="formulario">
            <div className="etiqueta-form">
                <h3 className="texto-etiqueta">
                    Si querés <b>saber más</b>, dejanos tus datos y nos comunicamos con <b>vos.</b>
                </h3>
            </div>
            <form id='formulario' className="ingreso-datos" ref={formRef} onSubmit={handleSubmit}>
                <div className="nombre">
                    <label className="titulo-input">
                        Nombre completo:
                    </label>
                    <input id='nombre' name='nombre' className="input-datos" type="text" required />
                </div>
                <div className="e-mail">
                    <label className="titulo-input">
                        E-mail:
                    </label>
                    <input id='email' name='email' className="input-datos" type="email" required />
                </div>
                <div className="telefono">
                    <label className="titulo-input">
                        Teléfono:
                    </label>
                    <input id='telefono' name='telefono' className="input-datos" type="tel" required />
                </div>
                <div className="contenedor-boton">
                    <button className="boton-enviar" type='submit'>Enviar</button>
                </div>
            </form>
            <div className="etiqueta-form">
                <h3 className="texto-etiqueta">
                    Solo por llenar tus datos ahora, te hacemos un <b>2%</b> de descuento en el <b>valor final</b> de cualquier unidad.
                </h3>
            </div>
        </div>
    );
}

export default Formulario;