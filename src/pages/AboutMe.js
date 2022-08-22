import React from "react";
import Buttons from "../components/Buttons";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import PageContent from "../components/PageContent";

const AboutMe = () => {
  return (
    <div>
      <main>
        <div className="project">
          <Navigation />
          <PageContent projectNumber={0} />
          <Buttons left={"/"} right={"/career"}></Buttons>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMe;
