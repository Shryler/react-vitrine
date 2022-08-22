import React from "react";
import Buttons from "../components/Buttons";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div>
      <main>
        <div className="project">
          <Navigation />
          <h1>Contact</h1>
          <Buttons left={"/portfolio"}></Buttons>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
