import React from 'react';
import Buttons from '../components/Buttons';
import Navigation from '../components/Navigation';

const AboutMe = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <h1>A propos de moi</h1>
                <Buttons left={"/"} right={"/career"}></Buttons>
            </div>
        </main>
    );
};

export default AboutMe;