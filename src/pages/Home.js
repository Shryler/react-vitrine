import React from 'react';
import Buttons from '../components/Buttons';
import Navigation from '../components/Navigation';
import FTypewriter from '../components/TypeWriter';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <div className="home">
                <Navigation></Navigation>
                <div className="home-main">
                    <div className="main-content">
                        <h1 className='text-center'>Bonjour,</h1>
                        <FTypewriter></FTypewriter>
                    </div>
                </div>
            </div>
            <Buttons right={"/about-me"} />
            <Footer></Footer>
        </div>
    );
};

export default Home;