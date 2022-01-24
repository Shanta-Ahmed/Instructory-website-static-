import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className ="footer">
            <div className =" container py-5 ">
               <div className="row">
                   <div className="col-md-5 m-2 p-2">
                   <a className="navbar-brand" href="/"> <img src="https://instructory.net/assets/images/logo-new-white.png" width={200}  className="img-fluid" alt="/"></img></a>
                       <br/>
                      <p className="text-white"> Instructory is all about connecting & discovering talents, inspiring people and        impact lives with the best teaching and earning opportunities. “Instructory” is an online teaching        marketplace, where instructors can create and upload their knowledge & make money online. It is also an        E-Learning Platform to learn anything from anywhere from the best & Top rated Professionals and        Freelancers! It has created earning opportunities for millions of instructors!
                      <br />
                      <h3 className= "text-white">Contact us</h3>
                      <p className= "text-white">+8801872650687, +8801880087154, +8801880087155</p>
                      </p>
                   </div>
                    <div className=" text-white col-md-2">
                       <h5>Useful Links</h5> 
                       <hr style={{color:'white', height: '2.5px '}}/>
                       <li>Bolg</li>
                       <li>Our Instructors</li>
                       <li>Become an Online Teacher</li>
                       <li>Become an Affiliator </li>
                       <li>How it Works</li>
                       <li> Course Categories</li>
                    </div>
                    <div className=" text-white col-md-2">
                        <h5>Need Support</h5>
                        <hr style={{color:'white', height: '2.5px '}} /> 
                        <li>Contact us</li>
                        <li>FAQ</li>
                        <br/>
                        <h5>Legal</h5>
                        <hr style={{color:'white', height: '2.5px '}}/>
                        <li>Sitemap</li>
                        <li>Privacy Policy</li>
                        <li>Purchase and Withdraw</li>
                    </div>
                    <div className=" text-white col-md-2">
                        <h5>About Instructory</h5>
                        <hr style={{color:'white', height: '2.5px '}}/>
                        <li>Our Story</li>
                        <li>Refund Policy </li>
                        <li>Terms & Conditions</li>
                        <br/>
                        <h5>More</h5>
                        <hr style={{color:'white', height: '2.5px '}}/>
                        <li>News & Events</li>
                        <li> Instructor's Lavel</li>
                    </div>
               </div>
            </div>

            <hr style={{color:'white', height: '3px '}}/>
            <br/>
            <p className="text-white text-center"><span className="text-muted">All Rights Reserved by</span> <span className="fw-bold">INSTRUCTORY</span> | 2022</p>

        </div>
    );

};

export default Footer;
 