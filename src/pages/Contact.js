import React from "react";
import Buttons from "../components/Buttons";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FormulaireContact from "../components/FormulaireContact";
import Navigation from "../components/Navigation";

const Contactme = () => {
  return (
    <div>
      <main>
        <div className="project">
          <Navigation />
          <Contact />
          <FormulaireContact />
          <Buttons left={"/competences"}></Buttons>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contactme;
