import React, { useState } from 'react';
import { projectsData } from "../data/projectsData";
import Container from 'react-bootstrap/Container';

const PageContent = ({ projectNumber }) => {
    const [currentProject] = useState(projectsData[projectNumber]);

    return (
        <Container>
        <div className="project-main">
            <div className="project-content">
                <h1>{currentProject.title}</h1>
            </div>
                <div className="img-content">
                    <div className="img-container hover">
                        <span>
                            <h3>{currentProject.subtitle}</h3>
                            <p>{currentProject.infos}</p>
                        </span>
                        <img src={currentProject.img} alt={"photo de" + currentProject.title} srcSet="" />
                    </div>
                </div>
        </div>
        </Container>
    );
};

export default PageContent;