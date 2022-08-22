import React from "react";
import Buttons from "../components/Buttons";
import Competences from "../components/Competences";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Skills = () => {
  return (
    <div>
      <main>
        <div className="project">
          <Navigation />
          <Competences />
          <Buttons left={"/experiences"} right={"/portfolio"}></Buttons>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
