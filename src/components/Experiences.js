import React from "react";
import { Container } from "react-bootstrap";
import { experiences } from "../data/experiences";

const Experiences = () => {
  return (
    <Container>
      <div className="container-content">
        <div className="content-title">
          <h1>Expériences</h1>
        </div>
        <div className="content-module">
        {experiences.map((exp) => (
          <ul key={exp.id} className="content">
            <img src={exp.logo} alt="" srcSet="" />
            <li>
              <em>{exp.date}</em>
              <h2>{exp.title}</h2>
              <p>{exp.infos}</p>
              <p>{exp.location}</p>
            </li>
          </ul>
        ))}
        </div>
      </div>
    </Container>
  );
};

export default Experiences;
