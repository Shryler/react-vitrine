import React from "react";
import Buttons from "../components/Buttons";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Experiences from "../components/Experiences";

const Experiency = () => {
  return (
    <div>
      <main>
        <div className="project">
          <Navigation />
          <Experiences />
          <Buttons left={"/career"} right={"/competences"}></Buttons>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Experiency;
