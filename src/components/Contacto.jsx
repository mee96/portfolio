import React, { useRef } from "react";
import "../scss/layout/Contacto.scss";
import emailjs from "emailjs-com";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_glru0e4",
        "template_h87vyeu",
        form.current,
        "IUoucQHvxE-yOVvhp"
      )
      .then(
        (result) => {
          alert(t("contacto.success"));
        },
        (error) => {
          alert(t("contacto.error"));
        }
      );

    e.target.reset();
  };

  return (
    <>
      <Element name="contacto" />
      
      <div className="contact">
        <h2>{t("contacto.title")}</h2>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <label>{t("contacto.name")}</label>
          <input type="text" name="name" placeholder={t("contacto.namePlaceholder")} required />
          
          <label>{t("contacto.email")}</label>
          <input type="email" name="email" placeholder={t("contacto.emailPlaceholder")} required />
          
          <label>{t("contacto.message")}</label>
          <textarea name="message" placeholder={t("contacto.messagePlaceholder")} required />
          
          <button className="button" type="submit">{t("contacto.send")}</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
