import React from "react";
import './Eachcommunity.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Eachcommunity(){
    return(
        <>
            <div className="eachcommunity-con">
                <div className="eachcommunity-inner-con">
                    <div className="eachcommunity-inner-view-topic">
                        <ArrowBackIcon/>
                        <div className="eachcommunity-inner-view-topic-head">
                            <AccountCircleIcon fontSize='large'/>
                            <div className="eachcommunity-inner-view-name-dtl">
                                <div>
                                    <h1>Name</h1>
                                    <p>date</p>
                                </div>
                                <p>topic</p>
                            </div>
                        </div>
                        <div className="eachcommunity-inner-descripiton-topic">
                            <p>description</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Eachcommunity;