import React from "react";
import { Container } from "react-bootstrap";
import { formation } from "../data/formation";

const Formations = () => {
  return (
    <Container>
      <div className="container-content">
        <div className="content-title">
          <h1>Parcours</h1>
        </div>
        <div className="content-module">
        {formation.map((formation) => (
          <ul key={formation.id} className="content">
            <img src={formation.logo} alt="" srcSet="" />
            <li>
              <em>{formation.date}</em>
              <h2>{formation.title}</h2>
              <p>{formation.infos}</p>
              <p>{formation.location}</p>
            </li>
          </ul>
        ))}
        </div>
      </div>
    </Container>
  );
};

export default Formations;
