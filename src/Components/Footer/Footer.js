import React from "react";
import './Footer.css';

function Footer(){
    return(
        <>
        <footer id="footer">

<div className="footer-section-1 footer-sub">
    <div className="footer-heading">
        <h1>Address</h1>
    </div>
    <div className="content-footer">
        <div className="footer-address">
            <i className="fa-solid fa-location-dot" ></i>Hyderabad, Telangana, India.
        </div>
        <div className="footer-phone">
            <i className="fa-solid fa-phone" ></i>987654321
        </div>
        <div className="footer-phone">
            <i className="fa-solid fa-envelope" ></i>Google@gmail.com.com
        </div>
        
    </div>
</div>

<div className="footer-section-2 footer-sub flex">
    <div className="footer-heading">
        <h1>Quick Links</h1>
    </div>
    <div className="content-footer">
        <div className="footer-2-link">
            <i className="fa-solid fa-greater-than" ></i><>Home</>
        </div>
        <div className="footer-2-link">
            <i className="fa-solid fa-greater-than" ></i><>About Us</>
        </div>
        <div className="footer-2-link">
            <i className="fa-solid fa-greater-than" ></i><>Service</>
        </div>
        <div className="footer-2-link">
            <i className="fa-solid fa-greater-than" ></i><>Blogs</>
        </div>
        <div className="footer-2-link">
            <i className="fa-solid fa-greater-than" ></i><>Resources</>
        </div>
        <div className="footer-2-link">
            <i className="fa-solid fa-greater-than" ></i><>Contact Us</>
        </div>
        
    </div>

</div>

<div className="footer-section-3 footer-sub">
    <div className="footer-heading">
        <h1>About</h1>
    </div>
    <div className="content-footer">
        <div className="footer-2-link">
            <i className="fa-solid fa-greater-than" style={{color: "#ffffff"}}></i><>Our Mission</>
        </div>
        <div className="footer-2-link">
            <i className="fa-solid fa-greater-than" ></i><>Our Vision</>
        </div>
        <div className="footer-2-link">
            <i className="fa-solid fa-greater-than" ></i><>Our Values</>
        </div>
    </div>

</div>

<div className="footer-section-4 footer-sub">
    <div className="footer-heading">
        <h1>Contact Us</h1>
    </div>
    <div className="content-footer">
        <div className="footer-2-link">
            <i className="fa-solid fa-greater-than" ></i><>Contact</>
        </div>
        <div className="footer-2-link">
            <i className="fa-solid fa-greater-than" ></i><>Career</>
        </div>
        <div className="footer-2-link">
            <i className="fa-solid fa-greater-than" ></i><>SiteMap</>
        </div>
    </div>

</div>

</footer>
        </>
    )
}

export default Footer;