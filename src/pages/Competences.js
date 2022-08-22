import React from "react";
import Buttons from "../components/Buttons";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Competences = () => {
  return (
    <div>
      <main>
        <div className="project">
          <Navigation />
          <h1>Compétences</h1>
          <Buttons left={"/experiences"} right={"/portfolio"}></Buttons>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Competences;
