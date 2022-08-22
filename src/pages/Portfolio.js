import React from 'react';
import Buttons from '../components/Buttons';
import Navigation from '../components/Navigation';

const Portfolio = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <h1>Portfolio</h1>
                <Buttons left={"/competences"} right={"/contact"}></Buttons>
            </div>
        </main>
    );
};

export default Portfolio;