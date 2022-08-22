import React from "react";
import { Container } from "react-bootstrap";
import { skillsTech } from "../data/skillsTech";
import ProgressBar from 'react-bootstrap/ProgressBar';

const Competences = () => {
  return (
    <Container>
      <div className="container-content">
        <div className="content-title">
          <h1>Compétences</h1>
        </div>
        <div className="content-module">
          <h2 className="mt-5">Compétences techniques</h2>
          {skillsTech.map((skillsT) => (
            <ul key={skillsT.id} className="content">
              <img src={skillsT.img} className="skillsImg" alt={skillsT.language}/>
              <li>
                <h4>{skillsT.language}</h4>
                <ProgressBar striped animated now={skillsT.progressBar} label={`${skillsT.progressBar} %`} />
                <em>Librairy/Framework : {skillsT.library ? skillsT.library : "Aucun(e)"}</em>
              </li>
            </ul>
          ))}
        <h2 className="mt-5">Compétences professionnelles</h2>
            <ul>
              <li>Maquetter une application</li>
              <li>Réaliser une interface utilisateur web statique et adaptable</li>
              <li>Développer une interface utilisateur web dynamique</li>
              <li>Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce</li>
              <li>Créer une base de données</li>
              <li>Développer les composants d’accès aux données</li>
              <li>Développer la partie back-end d’une application web ou web mobile</li>
              <li>Elaborer et mettre en œuvre des composants dans une application de gestion de contenu ou e-commerce</li>
            </ul>
        </div>
      </div>
    </Container>
  );
};

export default Competences;
