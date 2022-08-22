import React from 'react';
import Buttons from '../components/Buttons';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Portfolio = () => {
    return (
        <div>
            <main>
                <div className="project">
                    <Navigation />
                    <h1>Portfolio</h1>
                    <Buttons left={"/competences"} right={"/contact"}></Buttons>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Portfolio;