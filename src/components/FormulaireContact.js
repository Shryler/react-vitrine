import React from 'react';

const FormulaireContact = () => {
    return (
        <>
<form className="container text-dark mb-5">
          <div className="row justify-content-center mb-3 gap-3 gap-lg-0">
            <div className="col-12 col-lg-4">
              <div className="form-floating">
                <input id="lastname" type="text" placeholder="Nom" className="form-control" required=""/>
                <label for="lastname">Votre nom</label>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="form-floating">
                <input id="firstname" type="text" placeholder="Prénom" className="form-control" required=""/>
                <label for="firstname">Votre prénom</label>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-3">
            <div className="col-12 col-lg-8">
              <div className="form-floating">
                <input id="email" type="text" placeholder="Email" className="form-control" pattern="^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$" title="exemple@domain.com" required=""/>
                <label for="email">Votre email</label>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-3">
            <div className="col-12 col-lg-8">
              <div className="form-floating">
                <textarea className="form-control text-area-form" placeholder="Message" id="message" required=""></textarea>
                <label for="message">Message</label>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-8 col-lg-4">
              <button type="submit" className="btn btn-success w-100">Envoyer</button>
            </div>
          </div>
        </form>
        </>
    );
};

export default FormulaireContact;