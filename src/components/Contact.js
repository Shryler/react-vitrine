import React from 'react';
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <Container>
      <div className="container-content">
        <div className="content-title">
          <h1>Contact</h1>
        </div>
        <div className="content-module contact-module">
          <form className="text-dark mb-5">
            <div className="row justify-content-center mb-3 gap-3 gap-lg-0">
              <div className="col-12 col-lg-4">
                <div className="form-floating">
                  <input id="lastname" type="text" placeholder="Nom" className="form-control" required="" />
                  <label htmlFor="lastname">Votre nom</label>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="form-floating">
                  <input id="firstname" type="text" placeholder="Prénom" className="form-control" required="" />
                  <label htmlFor="firstname">Votre prénom</label>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mb-3">
              <div className="col-12 col-lg-8">
                <div className="form-floating">
                  <input id="email" type="text" placeholder="Email" className="form-control" pattern="^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$" title="exemple@domain.com" required="" />
                  <label htmlFor="email">Votre email</label>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mb-3">
              <div className="col-12 col-lg-8">
                <div className="form-floating">
                  <textarea className="form-control text-area-form" placeholder="Message" id="message" required=""></textarea>
                  <label htmlFor="message">Message</label>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="col-8 col-lg-4">
                <button type="submit" className="btn btn-primary w-100">Envoyer</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;