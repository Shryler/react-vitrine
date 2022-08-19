import React from 'react';
import Buttons from '../components/Buttons';
import Navigation from '../components/Navigation';

const Project3 = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <h1>Projet 3</h1>
                <Buttons left={"/projet-2"} right={"/projet-4"}></Buttons>
            </div>
        </main>
    );
};

export default Project3;