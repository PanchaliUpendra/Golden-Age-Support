import React, {useEffect, useContext ,useState} from 'react';
import './ShowCreateService.css';
import MyContext from '../../MyContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import {writeBatch} from "firebase/firestore";
import { updateDoc, deleteField } from "firebase/firestore";
import { createService } from '../../Docs/Docs';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function ShowCreateService(){
    const navigate = useNavigate();
    const batch = writeBatch(db);//get a new write batch
    const [showloading,setshowloading] = useState(false);
    const sharedvalue = useContext(MyContext);
    const [deleteserv,setdeleteserv] = useState({
        serviceid:'',
        active:false,
    })
    async function handledeleteservice(){
        setshowloading(true);
        try{
            await updateDoc(createService,{
                [deleteserv.serviceid]:deleteField()
            });
            await batch.commit();
            setdeleteserv(prev=>({
                ...prev,
                serviceid:'',
                active:false,
            }))
        }catch(e){
            console.log('you got an error while deleting the quotation',e);
        }
         setshowloading(false);
    }

    async function handlecancleservice(serviceid){
        setshowloading(true);
        try{
            await updateDoc(createService,{
                [serviceid]:{
                    ...sharedvalue.allservices[serviceid],
                    accepted:false,
                    acceptedby:''
                }
            });
            await batch.commit();
        }catch(e){
            console.log('you got an error while deleting the quotation',e);
        }
         setshowloading(false);
    }


    useEffect(()=>{
        window.scrollTo({top:0,behavior:'instant'});
    },[]);
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
            <div className={deleteserv.active===true?`show-services-con-inactive`:`show-services-con`}>
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
                                            <button onClick={()=>setdeleteserv(prev=>({
                                                ...prev,
                                                serviceid:item,
                                                active:true
                                            }))}>delete</button>
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

                                    {
                                        sharedvalue.allservices[item].accepted===true &&
                                        <div className='sc-ser-acceptedby-profile'>
                                            <h1>Service Accepted By..</h1>
                                            <div className='sc-ser-aptd-pro-div1'>
                                                <AccountCircleIcon fontSize='large' sx={{color:'gray'}}/>
                                                <div>
                                                    <h1>{sharedvalue.allservices[item].acceptedby.name}</h1>
                                                    <p>{sharedvalue.allservices[item].acceptedby.address}</p>
                                                </div>
                                            </div>
                                            <div className='sc-ser-aptd-pro-div2'>
                                                <div>
                                                    <p>email: <span>{sharedvalue.allservices[item].acceptedby.email}</span></p>
                                                    <p>mobile: <span>{sharedvalue.allservices[item].acceptedby.phone}</span></p>
                                                    {sharedvalue.allservices[item].acceptedby.showotp===true && <p>otp: <span>{sharedvalue.allservices[item].acceptedby.otp}</span></p>}
                                                </div>
                                                <button onClick={()=>handlecancleservice(item)}>Cancle</button>
                                            </div>
                                        </div>
                                    }
                                    <div className='services-acceptedby-show-to-sc'>

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

            <div className={deleteserv.active===true?'delete-create-serve-active':'delete-create-serve-inactive'}>
                <h1>Are You Sure , you want to delete this service</h1>
                <div>
                    <button className='deleteserv-yes-btn' onClick={()=>handledeleteservice()}>yes</button>
                    <button className='deleteserv-yes-no' onClick={()=>setdeleteserv(prev=>({
                        ...prev,
                        serviceid:'',
                        active:false
                    }))}>No</button>
                </div>
            </div>
            {/* here ia the back drop */}
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={showloading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            
            <Footer/>

        </>
    );
}

export default ShowCreateService;