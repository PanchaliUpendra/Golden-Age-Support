import React from "react";
import './Findcareservices.css';
import { Typewriter } from 'react-simple-typewriter'

function Findcareservices(){
    return(
        <>
            <div className="find-care-services-banner">
                <div>
                    <h1>Discover Experienced Caretakers on Our Find Caretakers Page</h1>
                    <p>Explore our Find Caretakers page for a diverse selection of skilled professionals 
                        ready to provide personalized support, empowering older adults with seamless connections 
                        for their care needs.</p>
                    <h2>
                    <Typewriter
                        words={['Personalized assistance available.', 'Seamless connections for seniors.', 'Professional care for elders.']}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    </h2>
                </div>
            </div>
            <div className="findcareservices-con">

            </div>
        </>
    );
}

export default Findcareservices;