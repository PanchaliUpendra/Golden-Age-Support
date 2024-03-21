import React, { useState } from "react";
import './Careservices.css';
import Marquee from "react-fast-marquee";
import Footer from '../Footer/Footer';

function Careservices(){
    const [addpost,setaddpost] = useState(false);
    return(
        <>
            <div className={`${addpost===true?'careservices-addpost-active':''}`}>
            <div className="careservice-first-div">
                <div>
                    <h1>Create Care Service</h1>
                    <p>Caretakers play a vital role in providing essential assistance and support to elderly individuals 
                        who may require help with daily activities due to age-related limitations or health conditions. 
                        These professionals are typically trained and experienced in caregiving, offering physical, emotional, 
                        and sometimes medical assistance to ensure the well-being and comfort of older adults.</p>
                    <button onClick={()=>setaddpost(true)}>+ create new service</button>
                </div>
            </div>
            <div className="careservices-types">
                <h1>Services Expected from Caretakers...</h1>
                <div>
                    <Marquee>
                        <div className="careservice-divs">
                            <h1>Personal Care</h1>
                            <p>Caretakers assist with personal hygiene tasks such as bathing, dressing, grooming, and toileting. 
                                They ensure that seniors maintain good hygiene practices and stay comfortable.</p>
                        </div>
                        <div className="careservice-divs">
                            <h1>Medication Management</h1>
                            <p>Caretakers help seniors with medication reminders, ensuring they take their prescribed medicines on time 
                                and in the correct dosage as per the healthcare provider's instructions.</p>
                        </div>
                        <div className="careservice-divs">
                            <h1>Mobility Support</h1>
                            <p>For older adults with mobility issues, caretakers provide support with walking, 
                                transferring from one place to another (e.g., from bed to chair), and using mobility aids like walkers or wheelchairs.</p>
                        </div>
                        <div className="careservice-divs">
                            <h1>Meal Preparation</h1>
                            <p>Caretakers prepare nutritious meals based on dietary requirements and preferences. 
                                They may also assist with feeding if necessary, ensuring seniors receive adequate nutrition.</p>
                        </div>
                        <div className="careservice-divs">
                            <h1>Household Assistance</h1>
                            <p>Caretakers help with light household chores such as cleaning, laundry, and organizing. They create a safe and 
                                tidy environment for seniors to live comfortably.</p>
                        </div>
                        <div className="careservice-divs">
                            <h1>Companionship</h1>
                            <p>Beyond physical assistance, caretakers offer companionship and emotional support. They engage in meaningful conversations, provide companionship during activities, and offer reassurance and encouragement.</p>
                        </div>
                        <div className="careservice-divs">
                            <h1>Monitoring Health</h1>
                            <p> Caretakers observe and report any changes in the senior's health or behavior to healthcare professionals or family members. They may also accompany seniors to medical appointments.</p>
                        </div>
                        <div className="careservice-divs">
                            <h1>Safety and Emergency Response</h1>
                            <p>Caretakers ensure the safety of seniors by identifying potential hazards in the home environment and implementing preventive measures. They are trained to respond calmly and effectively in case of emergencies.</p>
                        </div>
                        <div className="careservice-divs">
                            <h1>Respect for Dignity and Independence</h1>
                            <p>Caretakers respect the dignity and independence of older adults, promoting autonomy whenever possible while offering respectful assistance and support.</p>
                        </div>
                    </Marquee>
                </div>
            </div>

            <div className="careservices-created">
                <div className="careservices-created-header">
                    <h1>Services Created By You....</h1>
                </div>
                <div>
                    <h1 className="careservices-created-noresults">Sorry, Still now you haven't created any services</h1>
                </div>
                
            </div>
            <Footer/>
            </div>

            <div className={`careservices-con ${addpost===true?'care-services-form-active':'care-services-form-inactive'}`}>
                <div className="careservices-form">
                    <p className="careservices-form-cross" onClick={()=>setaddpost(false)}>X</p>
                    <h1>create your care services</h1>
                    <div>
                        <label>Your Service</label>
                        <input type='text'/>
                    </div>
                    <div>
                        <label>Service Type</label>
                        <select>
                            <option>choose your service</option>
                        </select>
                    </div>
                    <div>
                        <label>service description</label>
                        <textarea/>
                    </div>
                    <div>
                        <label>Choose Location</label>
                        <select>
                            <option>select the location</option>
                        </select>
                    </div>
                    <div>
                        <label>salary expecting</label>
                        <input type="number"/>
                    </div>
                    <div>
                        <button>Create Service</button>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Careservices;