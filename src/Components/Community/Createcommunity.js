import React, { useState } from "react";
import './Createcommunity.css';
import oldman1 from './Images/old man1.jpg';
import oldman2 from './Images/old man2.jpg';
import oldman3 from './Images/oldman3.jpg';
import oldman4 from './Images/oldman4.jpg';
import oldman5 from './Images/oldman5.jpg';
import Footer from "../Footer/Footer";


function Createcommunity(){

    const[createaddpost,setcreateaddpost]=useState({ //create add post ...
        active:false,
        header:'',
        description:'',
        topic:'',
        comments:[],
        likes:[],
        time:'',
        date:'',
        profiledata:''
    });

    //adding the post
    async function handleyourpost(){
        try{
            if(createaddpost.header!=='' && createaddpost.description!=='' &&
            createaddpost.topic!==''
            ){
                console.log('here your data will added...');
            }else{
                alert('please fill all the fields!!');
            }

        }catch(e){
            console.log('you got an error while adding the post..',e);
        }
    }
    return(
        <>
            <div className={createaddpost.active===true?'careservices-addpost-active':''}>
            <div className="createcommunity-banner">
                <div>
                    <h1>Community Wisdom: Where Ages Unite to Support and Inspire!</h1>
                    <p> Post questions, seek advice, and share concerns. Wise elders offer personalized responses, drawing from
                        life experiences. Diverse perspectives enrich discussions, fostering learning and growth. Enjoy a safe,
                        respectful environment with easy navigation. Join our vibrant community today!</p>
                    <button onClick={()=>setcreateaddpost(prev=>({
                        ...prev,
                        active:true
                    }))}>+ Add New Post</button>
                </div>
            </div>
            <div className="createcommunity-header">
                <h1>Your Sharing Space: Questions, Concerns, Conversations and Many More!! </h1>
            </div>

            <div className="created-community-posts">
                <div className="left-container">
                    <h1>Here will show all created posts</h1>
                </div>
                <div className="right-container">
                    <div className="message-box">
                        <div className="message-text">
                            <p>Hello there! I've walked many paths in life and am here to lend an ear and offer any advice or
                                guidance you may need. Let's chat!</p>
                        </div>
                        <div className="profile-photo">
                            <img src={oldman2} alt="Profile"/>
                        </div>
                    </div>
                    <div className="message-box">
                        <div className="message-text">
                            <p>Greetings! Age has granted me experiences aplenty. Whether it's advice, suggestions, or just a
                                listening ear you seek, I'm here to help.</p>
                        </div>
                        <div className="profile-photo">
                            <img src={oldman1} alt="Profile"/>
                        </div>
                    </div>
                    <div className="message-box">
                        <div className="message-text">
                            <p>Welcome! As someone who has seen their fair share of life's ups and downs, I'm here to offer my
                                wisdom and support. Feel free to reach out!</p>
                        </div>
                        <div className="profile-photo">
                            <img src={oldman5} alt="Profile"/>
                        </div>
                    </div>
                    <div className="message-box">
                        <div className="message-text">
                            <p>Good day! If you're facing a challenge or simply need a fresh perspective, don't hesitate to
                                connect with me. Together, we can find solutions.</p>
                        </div>
                        <div className="profile-photo">
                            <img src={oldman3} alt="Profile"/>
                        </div>
                    </div>
                    <div className="message-box">
                        <div className="message-text">
                            <p>Hey there! Life's journey has taught me many valuable lessons. If you're seeking guidance,
                                advice, or just a friendly chat, I'm here for you.</p>
                        </div>
                        <div className="profile-photo">
                            <img src={oldman4} alt="Profile"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </div>
            <div className={createaddpost.active===true?`create-add-post-popup-active`:`create-add-post-popup-inactive`}>
                <div className="create-community-page">
                    <div className="create-community-page-div">
                        <p onClick={()=>setcreateaddpost(prev=>({
                            ...prev,
                            active:false
                        }))}>X</p>
                    </div>
                    <div className="create-community-page-form">
                        <div>
                            <label>subject</label>
                            <input type="text"/>
                        </div>
                        <div>
                            <label>select topic</label>
                            <select>
                                <option>--select--</option>
                                <option>Events and Activities</option>
                                <option>Health and Wellness</option>
                                <option>Community News</option>
                                <option>Volunteer Opportunities</option>
                                <option>Lifestyle and Hobbies</option>
                            </select>
                        </div>
                        <div>
                            <label>description</label>
                            <textarea placeholder="write your content here..."/>
                        </div>
                        <button onClick={()=>handleyourpost()}>add a post</button>
                    </div>
                    
                </div>
            </div>
            
        </>
    );
}

export default Createcommunity;