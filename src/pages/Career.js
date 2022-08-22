import React from "react";
import Buttons from "../components/Buttons";
import Footer from "../components/Footer";
import Formations from "../components/Formations";
import Navigation from "../components/Navigation";

const Career = () => {
  return (
    <div>
      <main>
        <div className="project">
          <Navigation />
          <Formations></Formations>
          <Buttons left={"/about-me"} right={"/experiences"}></Buttons>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Career;
