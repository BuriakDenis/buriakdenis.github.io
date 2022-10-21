import React from "react";
import "../Contacts/Contacts.scss";
import BtnOpenModal from "../../Button/ButtonOpenModal/BtnOpenModal";
import Logo from "../../Logo/Logo";


const Contacts = () => {
  return (
    <section className="contact" id={"contact"}>
      <div className="contact__container">
        <div className="contact__section-name element-animation-left">
          Contact
        </div>
        <div className="contact__content">
          <div className="contact__content-info">
            <Logo className="contact__logo element-animation-left" class="contact__logo-img"/>
            <h5 className="contact__title element-animation-right">
              Let’s Talk with Me!
            </h5>
            <p className="contact__info element-animation-left">
              I'm always open for the opportunity to get a new experiences and
              work with you
            </p>
            <BtnOpenModal title="GET IN TOUCH" href="#!" className="element-animation-bottom"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
