import React from 'react';
import Buttons from '../components/Buttons';
import Navigation from '../components/Navigation';

const Experiences = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <h1>Expériences</h1>
                <Buttons left={"/career"} right={"/competences"}></Buttons>
            </div>
        </main>
    );
};

export default Experiences;