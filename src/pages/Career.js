import React from 'react';
import Buttons from '../components/Buttons';
import Navigation from '../components/Navigation';

const Career = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <h1>Carrière</h1>
                <Buttons left={"/about-me"} right={"/experiences"}></Buttons>
            </div>
        </main>
    );
};

export default Career;