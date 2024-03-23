import React, { useContext, useEffect } from "react";
import './Services.css';
import Relphopic from '../../Assets/ralphwaldoemerson.jpg';
import charledicken from '../../Assets/CharlesDickens.jpg';
import barackobama from '../../Assets/BarackObama.jpg';
import Footer from '../Footer/Footer';
import MyContext from "../../MyContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Services(){
    const sharedvalue = useContext(MyContext);
    useEffect(()=>{
        window.scrollTo({top:0,behavior:'instant'});
    },[]);
    return(
        <>
            <div className="services-display-banner-con">
                <div className="all-services-provide-display-banner">
                    
                </div>
                <div className="all-services-provide-display-banner-two">
                    <div className="all-services-boxes-comes-here">
                        <div className="all-service-box1">u
                        </div>
                        <div className="all-service-box1">
                            p
                        </div>
                        <div className="all-service-box1">
                            e
                        </div>
                    </div>
                </div>
            </div>
            <div className="services-con">
                <div className="services-divs">
                    <div className="services-divs-one">

                        <div className="services-filter-location-con">
                            <div className="services-filter-location">
                                <label>Location</label>
                                <select>
                                    <option value=''>Choose Location</option>
                                    <option value='New York'>New York</option>
                                    <option value='Philadelphia'>Philadelphia</option>
                                    <option value='Los Angeles'>Los Angeles</option>
                                    <option value='California'>California</option>
                                    <option value='San Diego'>San Diego</option>
                                </select>
                            </div>
                        </div>

                        {/* allservices values wil come here... */}
                        {

                            sharedvalue.allserviceskeys.length>0?
                            <div className="allservices-all-services">
                            {sharedvalue.allserviceskeys.map((item,idx)=>(
                                <div className="allservices-each-div" key={idx}>

                                    <div className="service-card-first-header">
                                        <div className="servies-card-top-header">
                                            <AccountCircleIcon fontSize="large" sx={{color:'gray'}}/>
                                            <div>
                                                <h1>{sharedvalue.allservices[item].name}</h1>
                                                <p><span>Location:</span> {sharedvalue.allservices[item].serlocation}</p>
                                                <p><span>Address:</span> {sharedvalue.allservices[item].seraddress}</p>
                                            </div>
                                        </div>
                                        <div className="allservices-accept-button">
                                            <button>Accept</button>
                                        </div>
                                    </div>
                                    <div className="required-services-first">
                                        <h1>Required Service</h1>
                                        <p>{sharedvalue.allservices[item].serinput}</p>
                                    </div>

                                    <div className="services-freetime-enddate">
                                        <p><span>Free-Time: </span>{sharedvalue.allservices[item].freetimestart} - {sharedvalue.allservices[item].freetimeend}</p>
                                        <p><span>enddate: </span>{sharedvalue.allservices[item].enddate}</p>
                                    </div>
                                </div>
                            ))}
                            </div>
                            :
                            <div>
                                <h1>No services For Now</h1>
                            </div>
                        }
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

            <Footer/>
        </>
    );
}

export default Services;