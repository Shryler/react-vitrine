import React from 'react';
import Buttons from '../components/Buttons';
import Navigation from '../components/Navigation';
import PageContent from '../components/PageContent';

const AboutMe = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <PageContent projectNumber={0}/>
                <Buttons left={"/"} right={"/career"}></Buttons>
            </div>
        </main>
    );
};

export default AboutMe;