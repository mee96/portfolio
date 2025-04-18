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
        "your_service_id", // Substitueix amb el teu Service ID
        "your_template_id", // Substitueix amb el teu Template ID
        form.current,
        "your_user_id" // Substitueix amb el teu User ID
      )
      .then(
        (result) => {
          alert("Missatge enviat amb èxit!");
        },
        (error) => {
          alert("Hi ha hagut un error, torna-ho a intentar.");
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
          <input type="text" name="name" placeholder="El teu nom" required />
          <label>Email</label>
          <input type="email" name="email" placeholder="El teu correu" required />
          <label>Missatge</label>
          <textarea name="message" placeholder="El teu missatge" required />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
