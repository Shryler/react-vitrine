import React from "react";
import { Container } from "react-bootstrap";
import { formation } from "../data/formation";

const Formations = () => {
  return (
    <Container>
      <div className="container-formation">
        <div className="formation-title">
          <h1>Formation</h1>
        </div>
        <div className="formation-module">
        {formation.map((formation) => (
          <ul key={formation.id} className="formation">
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
