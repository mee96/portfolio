import React, { useRef } from "react";
import "../scss/layout/Contacto.scss";
import emailjs from "emailjs-com";
import { Element } from "react-scroll";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
                 //FALTA REGISTRE PER A QUE M'ENVIÏ EL CORREU!!!!!!!! 
    emailjs
      .sendForm(
        "IUoucQHvxE-yOVvhp", // Substitueix amb el teu Service ID
        "template_h87vyeu", // Substitueix amb el teu Template ID
        form.current,
        "service_glru0e4" // Substitueix amb el teu User ID
      )
      .then(
        (result) => {
          alert("Mensaje enviado con éxito!");
        },
        (error) => {
          alert("Ha habido un error, vuelve a intentarlo.");
        }
      );

    e.target.reset(); // Neteja el formulari després d'enviar-lo
  };

  return (
    <>
      <Element name="contacto" />
      
      <div className="contact">
      <h2>Contacto</h2>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <label>Nom</label>
          <input type="text" name="name" placeholder="Tu nombre" required />
          <label>Email</label>
          <input type="email" name="email" placeholder="Tu correo" required />
          <label>Mensaje</label>
          <textarea name="message" placeholder="Tu mensaje" required />
          <button className="button" type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
