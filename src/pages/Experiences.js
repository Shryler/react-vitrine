import React from "react";
import Buttons from "../components/Buttons";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Experiences = () => {
  return (
    <div>
      <main>
        <div className="project">
          <Navigation />
          <h1>Expériences</h1>
          <Buttons left={"/career"} right={"/competences"}></Buttons>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Experiences;
