

function Formulario(){
    return(
        <div className="formulario">
            <div className="etiqueta-form">
                <h3 className="texto-etiqueta">
                    Si querés <b>saber más</b>, dejanos tus datos y nos comunicamos con <b>vos.</b>
                </h3>
            </div>
            <form className="ingreso-datos">
                <div className="nombre">
                    <h4 className="titulo-input">
                        Nombre completo:
                    </h4>
                    <input className="input-datos" type="text"></input>
                </div>
                <div className="e-mail">
                    <h4 className="titulo-input">
                    E-mail:
                    </h4>
                    <input className="input-datos" type="email"></input>
                </div>
                <div className="telefono">
                    <h4 className="titulo-input">
                        Teléfono:
                    </h4>
                    <input className="input-datos" type="tel"></input>
                </div>
                <div className="contenedor-boton">
                    <input className="boton-enviar" type="submit" value="Enviar"></input>
                </div>
            </form>
            <div className="etiqueta-form">
                <h3 className="texto-etiqueta">
                    Solo por llenar tus datos ahora, te hacemos un <b>2%</b> de descuento en el <b>valor final</b> de cualquier unidad.
                </h3>
            </div>

        </div>
    )
}

export default Formulario;