import React from 'react';
import AboutCreators from './AboutCreators';
import { Link } from 'react-router-dom';


function IntroScreen() {
    return ( 
    <div>
        <Link to="/gametitle">Enter</Link>
        <AboutCreators />
    </div> 
    );
}

export default IntroScreen;