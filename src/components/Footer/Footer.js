import Alas from "../../imgs/alas.png";

function Footer() {
    return (
        <div className="footer">
            <div className="logoFinal">
                <img src={Alas} alt="alas" />
                <h2>DriveWay Motors S.A.</h2>
                <img className="imgI" src={Alas} alt="alas" />
            </div>
            <h3 className="titulos-delicados-footer">Avenida Libertador 492, Buenos Aires, Argentina</h3>
            <h3 className="titulos-delicados-footer">+54 9 11 1234-5678</h3>
        </div>
    );
}

export default Footer;
