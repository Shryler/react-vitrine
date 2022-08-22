import React from 'react';
import Buttons from '../components/Buttons';
import Navigation from '../components/Navigation';

const Contact = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <h1>Contact</h1>
                <Buttons left={"/portfolio"}></Buttons>
            </div>
        </main>
    );
};

export default Contact;