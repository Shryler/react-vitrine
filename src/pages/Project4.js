import React from 'react';
import Buttons from '../components/Buttons';
import Navigation from '../components/Navigation';

const Project4 = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <h1>Projet 4</h1>
                <Buttons left={"/projet-3"} right={"/contact"}></Buttons>
            </div>
        </main>
    );
};

export default Project4;