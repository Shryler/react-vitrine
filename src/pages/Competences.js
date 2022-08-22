import React from 'react';
import Buttons from '../components/Buttons';
import Navigation from '../components/Navigation';

const Competences = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <h1>Compétences</h1>
                <Buttons left={"/experiences"} right={"/portfolio"}></Buttons>
            </div>
        </main>
    );
};

export default Competences;