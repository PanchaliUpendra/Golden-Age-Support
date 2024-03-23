import React, { useContext } from 'react';
import './ShowCreateService.css';
import MyContext from '../../MyContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

function ShowCreateService(){
    const navigate = useNavigate();
    const sharedvalue = useContext(MyContext);
    return(
        <>
            <div className='show-created-servies-banner'>
                <div>
                    <h1>Experience Generosity in Action</h1>
                    <p>Welcome to a World of Generosity! Explore the Free Services Crafted with Care 
                        by a Wise Elder. Discover How Small Acts of Kindness Can Make a Big Difference. 
                        Join Us in Celebrating the Spirit of Giving Back!</p>
                    <h3>if you want to take more services? <span onClick={()=>navigate('/createservice')}>Take Service</span></h3>
                </div>
            </div>
            <div className="show-services-con">
                <div className="services-divs">
                    <div className="show-services-divs-one">
                        {/* allservices values wil come here... */}
                        {

                            sharedvalue.allserviceskeys.filter(item=>sharedvalue.allservices[item].createdby===sharedvalue.uid).length>0?
                            <div className="allservices-all-services">
                            {sharedvalue.allserviceskeys
                            .filter(item=>sharedvalue.allservices[item].createdby===sharedvalue.uid)
                            .map((item,idx)=>(
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
                                        <div className="allservices-cancel-button ">
                                            <button>cancel</button>
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
                </div>
                <div className='show-services-after'>
                    <h1>Taken services ....</h1>
                    <div>
                        <p>Still you didn't take any Services!!!</p>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </>
    );
}

export default ShowCreateService;