import React from "react";
import './Services.css';
import Relphopic from '../../Assets/ralphwaldoemerson.jpg';
import charledicken from '../../Assets/CharlesDickens.jpg';
import barackobama from '../../Assets/BarackObama.jpg';

function Services(){
    return(
        <>
            <div className="services-con">
                <div className="services-divs">
                    <div className="services-divs-one">
                        <h1>div1</h1>
                    </div>

                    <div className="services-divs-two">
                        <div className="services-message-cards">
                            <div className="servi-img-name-div">
                                <div className="services-message-cards-img">
                                    <img src={Relphopic} alt='relphopic'/>
                                </div>
                                <h1>Ralph waldo emerson</h1>
                            </div>
                            
                            <div className="services-message-cards-para">
                                <p>
                                    “The purpose of life is not to be happy. 
                                    It is to be useful, to be honorable, to be compassionate, to 
                                    have it make some difference that you have lived and lived well.”
                                </p>
                            </div>
                        </div>

                        <div className="services-message-cards">
                            <div className="servi-img-name-div">
                                <div className="services-message-cards-img">
                                    <img src={barackobama} alt='relphopic'/>
                                </div>
                                <h1>Barack Obama</h1>
                            </div>
                            
                            <div className="services-message-cards-para">
                                <p>
                                    “The best way to not feel hopeless is to get up and do something. 
                                    Don’t wait for good things to happen to you. If you go out and make some 
                                    good things happen, you will fill the world with hope, you will fill yourself with hope.”
                                </p>
                            </div>
                        </div>

                        <div className="services-message-cards">
                            <div className="servi-img-name-div">
                                <div className="services-message-cards-img">
                                    <img src={charledicken} alt='relphopic'/>
                                </div>
                                <h1>Charles Dickens</h1>
                            </div>
                            
                            <div className="services-message-cards-para">
                                <p>
                                “No one is useless in this world who lightens the burdens of another.”
                                </p>
                            </div>
                        </div>
                    </div>

                    

                </div>
            </div>
        </>
    );
}

export default Services;