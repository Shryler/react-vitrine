import React from 'react';
import Buttons from '../components/Buttons';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Portfolio from '../components/Portfolio';

const Portfolios = () => {
    return (
        <div>
            <main>
                <div className="project">
                    <Navigation />
                    <Portfolio />
                    <Buttons left={"/competences"} right={"/contact"}></Buttons>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Portfolios;