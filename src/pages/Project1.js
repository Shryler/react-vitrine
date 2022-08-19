import React from 'react';
import Buttons from '../components/Buttons';
import Navigation from '../components/Navigation';

const Project1 = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <h1>Projet 1</h1>
                <Buttons left={"/"} right={"/projet-2"}></Buttons>
            </div>
        </main>
    );
};

export default Project1;