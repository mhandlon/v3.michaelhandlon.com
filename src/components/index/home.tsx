import React from 'react';

import Intro from './intro';
import About from "./about";
// import Opensource from "./opensource";
// import Help from "./help";
// import Contact from "./contact";

const Home: React.FC = () => {
    return (
        <div className="Home">
            <Intro/>
            <About/>
            {/*<Opensource/>*/}
            {/*<Help/>*/}
            {/*<Contact/>*/}
        </div>
    );
};

export default Home;
