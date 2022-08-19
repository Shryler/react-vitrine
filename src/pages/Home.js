import React from 'react';
import Buttons from '../components/Buttons';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <div className="home">
                <Navigation></Navigation>
                <div className="home-main">
                    <div className="main-content">
                        <h1>NOM DU SITE</h1>
                    </div>
                </div>
            </div>
            <Buttons right={"/projet-1"} />
        </div>
    );
};

export default Home;