import React, { useContext,useState } from "react";
import './Profile.css';
import Profilepic from './Profilebg.png';
import Profileimg from './Profile img.jpg';
import Footer from '../Footer/Footer';
import MyContext from '../../MyContext';

function Profile(){

    const sharedvalue = useContext(MyContext);
    console.log('usrdtl: ',sharedvalue.profiledata);
    const [ctktfile,setctktfile]=useState('');
    function handleselectfile(e){
        const selectedFile = e.target.files[0];
        setctktfile(selectedFile);
    }

    return(
        <>
        {sharedvalue.profiledata!=='' && 
            <section className="profile">
        <div className="profile-image">
            <div className="bannerimg">
                <img src={Profilepic} alt="profilepics"/>
            </div>
            <div className="profileimg">
                <img src={sharedvalue.profiledata.imgurl===''?Profileimg:sharedvalue.profiledata.imgurl} alt="profilepics"/>
            </div>
        </div>
        <div className="profile-content">

            <div className="editing-the-profile-data">
                <input type='file' value={ctktfile} onChange={(e)=>handleselectfile(e)}/>
            </div>
            {/* <div className="profile-content1">
                
            </div> */}
            <div className="profileName">
                <h1>{sharedvalue.profiledata.name}</h1>
            </div>
            <div className="profileServiceName">
                <h1>{sharedvalue.profiledata.role}</h1>
            </div>
            <div className="profileServiceName">
                <p><span>{sharedvalue.profiledata.stars}</span>  stars</p>
                <p><span>{sharedvalue.profiledata.reviews}</span>  reviews</p>
            </div>
            {/* <div className="profileServiceLocation">
                <div>
                    <i className="fa-solid fa-location-dot"></i> <p>Location</p>
                    <i className="fa-regular fa-calendar-days"></i><p>Date Joined</p>
                </div>
            </div> */}
        </div>

    {
        sharedvalue.role==='serviceprovider' && 
    
    <>
        <div className="feedbackHeading">
            <h1>Feedback</h1>
        </div>

        <div className="feedback">
            <div className="feedback-card">
                <div className="feedbackhead">
                    <img src={Profileimg} alt="profilepics"/>
                    <h1>Cusomer Name</h1>
                    <div className="feedback-rating">
                        <h1>Rating: </h1><p>3.5/5</p>
                    </div>
                </div>
                <div className="feedbackbody">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum fugit, consequatur neque et nisi necessitatibus quas doloremque, corporis tenetur molestias voluptas consequuntur quaerat dolor dolorem harum sit quos ullam ea perspiciatis, non laboriosam.</p>
                </div>
            </div>
            <div className="feedback-card">
                <div className="feedbackhead">
                    <img src={Profileimg} alt="profilepics"/>
                    <h1>Cusomer Name</h1>
                    <div className="feedback-rating">
                        <h1>Rating: </h1><p>3.5/5</p>
                    </div>
                </div>
                <div className="feedbackbody">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum fugit, consequatur neque et nisi necessitatibus quas doloremque, corporis tenetur molestias voluptas consequuntur quaerat dolor dolorem harum sit quos ullam ea perspiciatis, non laboriosam.</p>
                </div>
            </div>
            <div className="feedback-card">
                <div className="feedbackhead">
                    <img src={Profileimg} alt="profilepics"/>
                    <h1>Cusomer Name</h1>
                    <div className="feedback-rating">
                        <h1>Rating: </h1><p>3.5/5</p>
                    </div>
                </div>
                <div className="feedbackbody">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum fugit, consequatur neque et nisi necessitatibus quas doloremque, corporis tenetur molestias voluptas consequuntur quaerat dolor dolorem harum sit quos ullam ea perspiciatis, non laboriosam.</p>
                </div>
            </div>
            <div className="feedback-card">
                <div className="feedbackhead">
                    <img src={Profileimg} alt="profilepics"/>
                    <h1>Cusomer Name</h1>
                    <div className="feedback-rating">
                        <h1>Rating: </h1><p>3.5/5</p>
                    </div>
                </div>
                <div className="feedbackbody">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum fugit, consequatur neque et nisi necessitatibus quas doloremque, corporis tenetur molestias voluptas consequuntur quaerat dolor dolorem harum sit quos ullam ea perspiciatis, non laboriosam.</p>
                </div>
            </div>
            <div className="feedback-card">
                <div className="feedbackhead">
                    <img src={Profileimg} alt="profilepics"/>
                    <h1>Cusomer Name</h1>
                    <div className="feedback-rating">
                        <h1>Rating: </h1><p>3.5/5</p>
                    </div>
                </div>
                <div className="feedbackbody">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum fugit, consequatur neque et nisi necessitatibus quas doloremque, corporis tenetur molestias voluptas consequuntur quaerat dolor dolorem harum sit quos ullam ea perspiciatis, non laboriosam.</p>
                </div>
            </div>
            <div className="feedback-card">
                <div className="feedbackhead">
                    <img src={Profileimg} alt="profilepics"/>
                    <h1>Cusomer Name</h1>
                    <div className="feedback-rating">
                        <h1>Rating: </h1><p>3.5/5</p>
                    </div>
                </div>
                <div className="feedbackbody">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum fugit, consequatur neque et nisi necessitatibus quas doloremque, corporis tenetur molestias voluptas consequuntur quaerat dolor dolorem harum sit quos ullam ea perspiciatis, non laboriosam.</p>
                </div>
            </div>
            
            
        </div>
    </>
    }

        <div className="Blogsheading">
            <h1>Blogs</h1>
        </div>

        <div className="blogsSection">
            <div className="blogcard">
                <div className="bloghead">
                    <img src={Profileimg} alt="profilepics"/>
                </div>
                <div className="blog-label">
                    <p>Health</p>
                </div>
                <div className="blog-card-body">
                    <h1>Blog name comes hereBlog name comes here</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil praesentium incidunt nemo ratione molestiae fugit rem, provident corporis facere qui officia est ipsum quaerat necessitatibus ipsa quibusdam molestias accusantium eligendi perferendis? Commodi, deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil praesentium incidunt nemo ratione molestiae fugit rem, provident corporis facere qui officia est ipsum quaerat necessitatibus ipsa quibusdam molestias accusantium eligendi perferendis? Commodi, deleniti!</p>
                    <button>Read More...</button>
                </div>
            </div>
            <div className="blogcard">
                <div className="bloghead">
                    <img src={Profileimg} alt="profilepics"/>
                </div>
                <div className="blog-label">
                    <p>Health</p>
                </div>
                <div className="blog-card-body">
                    <h1>Blog name comes hereBlog name comes here</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil praesentium incidunt nemo ratione molestiae fugit rem, provident corporis facere qui officia est ipsum quaerat necessitatibus ipsa quibusdam molestias accusantium eligendi perferendis? Commodi, deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil praesentium incidunt nemo ratione molestiae fugit rem, provident corporis facere qui officia est ipsum quaerat necessitatibus ipsa quibusdam molestias accusantium eligendi perferendis? Commodi, deleniti!</p>
                    <button>Read More...</button>
                </div>
            </div>
            <div className="blogcard">
                <div className="bloghead">
                    <img src={Profileimg} alt="profilepics"/>
                </div>
                <div className="blog-label">
                    <p>Health</p>
                </div>
                <div className="blog-card-body">
                    <h1>Blog name comes hereBlog name comes here</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil praesentium incidunt nemo ratione molestiae fugit rem, provident corporis facere qui officia est ipsum quaerat necessitatibus ipsa quibusdam molestias accusantium eligendi perferendis? Commodi, deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil praesentium incidunt nemo ratione molestiae fugit rem, provident corporis facere qui officia est ipsum quaerat necessitatibus ipsa quibusdam molestias accusantium eligendi perferendis? Commodi, deleniti!</p>
                    <button>Read More...</button>
                </div>
            </div>
            
        </div>
    </section>
    }
    
    <Footer/>
        </>
    );
}

export default Profile;