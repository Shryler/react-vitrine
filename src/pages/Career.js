import React from "react";
import Buttons from "../components/Buttons";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Career = () => {
  return (
    <div>
      <main>
        <div className="project">
          <Navigation />
          <h1>Carrière</h1>
          <Buttons left={"/about-me"} right={"/experiences"}></Buttons>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Career;
