import React, { useContext, useState } from "react";
import './Careservices.css';
import Marquee from "react-fast-marquee";
import Footer from '../Footer/Footer';

import { db } from "../../firebase";
import { writeBatch } from "firebase/firestore";
import { careservices as ccs } from "../../Docs/Docs";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { v4 as uuidv4 } from 'uuid';
import MyContext from "../../MyContext";

import caretakerlogo from '../../Assets/caretakerlogo.jpg';

function Careservices(){
    const sharedvalue = useContext(MyContext);
    const [addpost,setaddpost] = useState(false);
    const [open, setOpen] = useState(false);
    const batch = writeBatch(db);
    const [careservices,setcareservices]= useState({
        careyourserv:'',
        careservtype:'',
        careservdes:'',
        careservexp:'',
        interestedby:[],
        careslyexp:0,
        carelocat:'',
        status:'disable'
    });

    async function handlecreatecareservices(e){
        e.preventDefault();
        setOpen(true);
        const uuidg= uuidv4();
        try{
            if(careservices.careyourserv!=='' && careservices.careservtype!=='' &&
                careservices.careservdes!=='' &&
                careservices.carelocat!==''
            ){
                batch.update(ccs,{[uuidg]:{
                    createdby:sharedvalue.uid,
                    careyourserv:careservices.careyourserv,
                    careservtype:careservices.careservtype,
                    careservdes:careservices.careservdes,
                    careservexp:careservices.careservexp,
                    interestedby:careservices.interestedby,
                    careslyexp:careservices.careslyexp,
                    carelocat:careservices.carelocat,
                    status:careservices.status
                    }
                 });
                 await batch.commit();
                 alert('successfully added...');
                 setcareservices(prev=>({
                    ...prev,
                    careyourserv:'',
                    careservtype:'',
                    careservdes:'',
                    careservexp:'',
                    interestedby:[],
                    careslyexp:0,
                    carelocat:'',
                    status:'disable'
                 }))
            }else{
                alert('please fill the form...');
            }
            
        }catch(e){
            console.log('you got an error while adding the care services..',e);
        }
        setOpen(false);
    }
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

                {
                    sharedvalue.allcareserkeys
                    .filter(item=>(sharedvalue.allcareservices[item].createdby===sharedvalue.uid))
                    .length>0?
                        (sharedvalue.allcareserkeys
                        .filter(item=>(sharedvalue.allcareservices[item].createdby===sharedvalue.uid)).map((item,idx)=>(
                            <div className="createdcareservice-card">
                        <div className="createdcareservice-card-head">
                            <img src={caretakerlogo} alt='logo'/>
                            <div>
                                <h2>{sharedvalue.allcareservices[item].careyourserv}</h2>
                                <p>{sharedvalue.allcareservices[item].careservtype}</p>
                            </div>
                        </div>
                        <div className="createdcareservice-card-body">
                            <p>{sharedvalue.allcareservices[item].careservdes}</p>
                            <div className="created-care-service-likes-delete">
                                <p>likes | {sharedvalue.allcareservices[item].interestedby.length}</p>
                                <button>delete</button>
                            </div>
                        </div>
                    </div>
                        )))
                    :
                <div>
                    <h1 className="careservices-created-noresults">Sorry, Still now you haven't created any services</h1>
                </div>
                }
                

                
                
            </div>
            <Footer/>
            </div>

            <div className={`careservices-con ${addpost===true?'care-services-form-active':'care-services-form-inactive'}`}>
                <div className="careservices-form">
                    <p className="careservices-form-cross" onClick={()=>setaddpost(false)}>X</p>
                    <h1>create your care services</h1>
                    <div>
                        <label>Your Service</label>
                        <input type='text' value={careservices.careyourserv} onChange={(e)=>setcareservices(prev=>({
                            ...prev,
                            careyourserv:e.target.value
                        }))}/>
                    </div>
                    <div>
                        <label>Service Type</label>
                        <select value={careservices.careservtype} onChange={(e)=>setcareservices(prev=>({
                            ...prev,
                            careservtype:e.target.value
                        }))}>
                            <option>choose your service</option>
                            <option value='Home Care Services'>Home Care Services</option>
                            <option value='Health Monitoring and Management'>Health Monitoring and Management</option>
                            <option value='Transportation Assistance'>Transportation Assistance</option>
                            <option value='Social Engagement and Activities'>Social Engagement and Activities</option>
                            <option value='Nutrition Planning and Meal Services'>Nutrition Planning and Meal Services</option>
                            <option value='Home Safety Assessments and Modifications'>Home Safety Assessments and Modifications</option>
                            <option value='Memory Care Support'>Memory Care Support</option>
                            <option value='Pet Care Services'>Pet Care Services</option>
                            <option value='Legal and Financial Assistance'>Legal and Financial Assistance</option>
                            <option value='Technology Training and Support'>Technology Training and Support</option>
                            <option value='Counseling and Mental Health Support'>Counseling and Mental Health Support</option>
                        </select>
                    </div>
                    <div>
                        <label>service description</label>
                        <textarea value={careservices.careservdes} onChange={(e)=>setcareservices(prev=>({
                            ...prev,
                            careservdes:e.target.value
                        }))}/>
                    </div>
                    <div>
                        <label>Choose Location</label>
                        <select value={careservices.carelocat} onChange={(e)=>setcareservices(prev=>({
                            ...prev,
                            carelocat:e.target.value
                        }))}>
                            <option>select the location</option>
                            <option value='New York'>New York</option>
                            <option value='Philadelphia'>Philadelphia</option>
                            <option value='Los Angeles'>Los Angeles</option>
                            <option value='California'>California</option>
                            <option value='San Diego'>San Diego</option>
                        </select>
                    </div>
                    <div>
                        <label>salary expecting</label>
                        <input type="number" value={careservices.careslyexp} onChange={(e)=>setcareservices(prev=>({
                            ...prev,
                            careslyexp:e.target.value
                        }))}/>
                    </div>
                    <div>
                        <button onClick={(e)=>handlecreatecareservices(e)}>Create Service</button>
                    </div>
                </div>
            </div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            
        </>
    );
}

export default Careservices;