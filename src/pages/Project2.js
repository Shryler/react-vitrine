import React from 'react';
import Buttons from '../components/Buttons';
import Navigation from '../components/Navigation';

const Project2 = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <h1>Projet 2</h1>
                <Buttons left={"/projet-1"} right={"/projet-3"}></Buttons>
            </div>
        </main>
    );
};

export default Project2;