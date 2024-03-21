import React, { useEffect } from 'react';
import './Ourservices.css';

import img1 from './OurServicesBg.jpg';
import img2 from "./home.svg";
import img3 from "./health.svg";
import img4 from "./transportation.svg";
import img5 from "./nutrition.svg";
import img6 from "./social.svg";
import img7 from "./safety.svg";
import img8 from "./pet.svg";
import img9 from "./question.svg";

import Footer from '../Footer/Footer';


function Ourservices(){
    useEffect(()=>{
        window.scrollTo({top:0,behavior:'smooth'});
    },[]);
    return(
        <>
            <div className="top-bg">
        <h1> Our Services</h1>
        <img src={img1} alt="backgground-pic"/>
    </div>
    <div className="ourServicesHeading">
        <h1>At GoldenAge Support, we are dedicated to providing compassionate care and support services tailored to the unique needs of seniors and their families. Our team of experienced professionals is committed to enhancing the quality of life for our clients by offering a comprehensive range of services designed to promote independence, well-being, and dignity. Explore our services below:</h1>
    </div>
    <section id="Services">
        <div className="service-card">
            <img src={img2} alt="services-pics"/>
            <h1>Home Care Services</h1>
            <p>Our home care services are tailored to provide personalized assistance with activities of daily living (ADLs) in the comfort of your own home. From bathing and grooming to meal preparation and medication reminders, our compassionate caregivers are here to support you every step of the way.</p>
        </div>
        <div className="service-card">
            <img src={img3} alt="services-pics"/>
            <h1>Health Monitoring and Management</h1>
            <p>Our home care services are tailored to provide personalized assistance with activities of daily living (ADLs) in the comfort of your own home. From bathing and grooming to meal preparation and medication reminders, our compassionate caregivers are here to support you every step of the way.</p>
        </div>
        <div className="service-card">
            <img src={img4} alt="services-pics" />
            <h1>Transportation Assistance</h1>
            <p>Our home care services are tailored to provide personalized assistance with activities of daily living (ADLs) in the comfort of your own home. From bathing and grooming to meal preparation and medication reminders, our compassionate caregivers are here to support you every step of the way.</p>
        </div>
        <div className="service-card">
            <img src={img5} alt="services-pics" />
            <h1>Nutrition Planning and Meal Services</h1>
            <p>Our home care services are tailored to provide personalized assistance with activities of daily living (ADLs) in the comfort of your own home. From bathing and grooming to meal preparation and medication reminders, our compassionate caregivers are here to support you every step of the way.</p>
        </div>
        <div className="service-card">
            <img src={img6} alt="services-pics" />
            <h1>Social Engagement and Activities</h1>
            <p>Our home care services are tailored to provide personalized assistance with activities of daily living (ADLs) in the comfort of your own home. From bathing and grooming to meal preparation and medication reminders, our compassionate caregivers are here to support you every step of the way.</p>
        </div>
        <div className="service-card">
            <img src={img7} alt="services-pics" />
            <h1>Home Safety Assessments and Modifications</h1>
            <p>Our home care services are tailored to provide personalized assistance with activities of daily living (ADLs) in the comfort of your own home. From bathing and grooming to meal preparation and medication reminders, our compassionate caregivers are here to support you every step of the way.</p>
        </div>
        <div className="service-card">
            <img src={img8} alt="services-pics" />
            <h1>Pet Care Services</h1>
            <p>Our home care services are tailored to provide personalized assistance with activities of daily living (ADLs) in the comfort of your own home. From bathing and grooming to meal preparation and medication reminders, our compassionate caregivers are here to support you every step of the way.</p>
        </div>
        <div className="service-card">
            <img src={img9} alt="services-pics" />
            <h1>Memory Care Support</h1>
            <p>Our home care services are tailored to provide personalized assistance with activities of daily living (ADLs) in the comfort of your own home. From bathing and grooming to meal preparation and medication reminders, our compassionate caregivers are here to support you every step of the way.</p>
        </div>


    </section>
    <Footer/>
        </>
    );
}

export default Ourservices;