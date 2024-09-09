import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.listen(8080, () => console.log("Running...."));

// Ruta para recibir datos y enviar correo
app.post('/datos', (req, res) => {
    const { nombre, email, telefono } = req.body;

    console.log('Datos recibidos:', { nombre, email, telefono });

    // Configuración del correo
    const adminGmail = "nahuel23009@gmail.com";
    const passGmail = "weol ndbm uqcl kzst"; // Nota: no almacenes contraseñas en el código fuente, usa variables de entorno.
    
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // Use `true` para el puerto 465
        auth: {
            user: adminGmail,
            pass: passGmail
        },
    });

    const mailOptions = {
        from: adminGmail,
        to: email, // Usa el correo recibido en la solicitud
        subject: "DriveWay Motors S.A.", // Personaliza el asunto
        html: `
            <p>Hola ${nombre},</p>
            <p>Gracias por interesarte en nuestros nuevos 0km!</p>
            <p>Gracias por tu interés en nuestros productos. Como muestra de nuestro agradecimiento, te ofrecemos un 2% de descuento en tu próxima compra. Usa el código BONO2 al momento de pagar y disfruta de este descuento exclusivo.
            ¡No pierdas esta oportunidad de obtener un excelente trato en tu próxima adquisición!
            Atentamente,
            El equipo de DriveWay Motors S.A.</p>
            <img src="cid:imagenPromocional" alt="Imagen Promocional" style="display: block; margin: 0 auto;"/>
        `,
        attachments: [
            {
                filename: 'imagen.jpg',
                path: './img/imagen.jpg', // Ruta a la imagen en el servidor
                cid: 'imagenPromocional' // Debe coincidir con el cid en el HTML
            }
        ]
    };

    // Función para enviar correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
            res.status(500).json({ mensaje: 'Error al enviar el correo' });
        } else {
            console.log('Mensaje enviado:', info.response);
            res.json({ mensaje: 'Correo enviado correctamente' });
        }
    });
});

