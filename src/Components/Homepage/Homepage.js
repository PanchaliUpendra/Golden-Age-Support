import React from "react";
import './Homepage.css';

import KnowMore from '../../Assets/knowmoreimg.jpeg';
import { useNavigate } from "react-router-dom";
import Promo from '../../Assets/promo.mp4';
import Footer from "../Footer/Footer";

import Caregiver from "./Care givers.jpg";
import Services from "./Services banner.jpg";
import Caregivertwo from "./Care givers.jpg";

import Caregiverthree from "./Care givers.jpg";

function Homepage(){
    const navigate = useNavigate();
    return(
        <>

        <div className='video-container'>
            <video  className='video-tag' autoPlay muted loop>
                <source src={Promo} type='video/mp4'/>
                    Your browser does not support the video tag.
            </video>
            <div>
                <h1>Golden Age Support</h1>
                <p>Empowering Seniors to Live Life to the Fullest</p>
                <p>At GoldenAge Support, we believe that every senior deserves to live life to the fullest, with dignity, independence, and support.</p>
            </div>

        </div>

        

        {/* know more about */}
            <div className="know-more-about-con">
                <h1>Who We Are</h1>
                <div className="know-more-about">
                    <div>
                        <h1>We Help To Get You Well</h1>
                        <p>GoldenAge Support is dedicated to enhancing the quality of life for aging individuals by providing personalized
                             services, resources, and community connections. Our team is committed to compassionately supporting seniors and their families 
                            on their journey of aging.
                        </p>
                        <button onClick={()=>navigate('/about')}>Know More <span>{`>`}</span></button>
                    </div>
                    
                    <div className="know-more-about-img">
                        <img src={KnowMore} alt='know_more_about'/>
                    </div>
                </div>
            </div>

        {/* div one */}
        <section class="ServiceProviderHome increasegaptopbottom">
            <div class="headingServiceHome">
                <h1>Our Senior Users</h1>
                <p>We extend our deepest gratitude to our Senior Users, whose resilience and wisdom inspire us every day. Your trust in our services and your courage in facing life's challenges are truly admirable. We are privileged to serve you and are committed to ensuring that you receive the care, support, and respect you deserve. Thank you for allowing us to be a part of your journey, and know that your well-being is our highest priority.</p>
                <button><>Join As Senior User</></button>
            </div>
            <div class="sericeHomeImage">
                <img src={Caregiver} alt="caregiver"/>
                <img src={Services} alt="services"/>
                <img src={Caregivertwo} alt="caregivertwo"/>
            </div>
        </section>

        {/* div two */}
        <div class="caregivers increasegaptopbottom">
            <div class="caregiversContent">
                <h1>Care Givers</h1>
                <p>We express our heartfelt appreciation to our Caregivers, whose dedication and compassion enrich the lives of our seniors and their families. Your selflessness and tireless efforts do not go unnoticed, and we are immensely grateful for the care and support you provide. Your unwavering commitment to making a difference in the lives of others is truly inspiring. Thank you for your invaluable service, and know that you are deeply valued and appreciated.</p>
                <button><>Join As CareGivers</></button>
            </div>
            <div class="caregiversImg">
                <img src={Caregiverthree} alt="No Source"/>
            </div>
        </div>

        {/* service provider */}
        <section class="caregiversCTA">
        <h1>Extending Thanks to Our Service Providers</h1>
        <p>We extend our sincerest gratitude to our service providers, whose unwavering dedication and compassionate care positively impact the lives of our seniors each day. Your commitment to excellence, professionalism, and empathy is a beacon of hope and support for those in need. We deeply appreciate the exceptional service you provide, and we are honored to work alongside such dedicated individuals who enrich the lives of our community with their heartfelt service.</p>

        <button><>Join As Servise Provider</></button>

        </section>
        {/* footer */}
        <Footer/>
        </>
    );
}

export default Homepage;