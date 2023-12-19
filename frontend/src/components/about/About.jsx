import React from "react";
import "./about.css";
import Logo from "./images/logo.png"
import { useNavigate } from "react-router-dom";
import { FaPhone, FaFacebook, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const About = () => {
  const navigate = useNavigate();


    return (

      <div>
       <section className="page-heading" id="top">
        <div className="container">
            <div className="row">
            <div className="col-md-6">
              <div className="logo">
              <img className="logo" src={Logo} alt="" />
                  
              </div>
          </div>

                <div className="col-md-6">
                    <div className="page-direction-button">
                        <a href="/"><i className="fa fa-home"></i>HOME</a>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="contact-us">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-heading">
                        <h2 id="contactinfo">Contact Information</h2>
                        <div className="contacticon">
                        <p id="phone"><FaPhone /> <span>552-478-9968</span><br /></p>
                        <p id="phone"><FaMapMarkerAlt /> <span>123 Main St, Cainta</span><br /></p>
                        <p id="phone"><FaEnvelope /> <span>johnreservationgmail.com</span><br /></p>
                        <p id="phone"><FaFacebook /> <span>@Johnreservation</span><br /></p>
                        </div>
                            <h1 id="titleabt">About Johnreservation</h1>                       
                        <p className="aboutus">It is easy to incorporate the booking system software into the travel site. The online room booking system is completely secure. This is because it has the ability to administer numerous rooms for visitors without making any error in the preservation process. Many business firms, especially the travel industries analyses their sales through use of the expert system. The room booking system uses features that allow an online administrator, which facilitates easy and direct room booking. Moreover, the room booking system features are placed online by travel firm administrator.</p>
                    </div>
                </div>

             <div className="abouthsi">
                <div className="col-md-4">
                <h6 id="titlefea">Hotel</h6>
                    <p id="details">Hotels that provide a great customer experience know how to deliver an innovative and excellent service to their customers. Their level of service quality is based on the latest innovations available in the hospitality sector, a successful service performance, and the capacity to adapt to new technologies in order to meet customer expectations.</p>
                </div>
                <div className="col-md-4">
                    <h6 id="titlefea">Stuff</h6>
                    <p id="details">Johnreservation employees are at the heart of excellent hospitality. Hotels that provide excellence in customer service have a human resource management team that cares about their employees. They have an appropriate employee selection process in place and know how to train their staff to understand the customers needs.</p>
                </div>
                <div className="col-md-4">
                    <h6 id="titlefea">Information</h6>
                    <p id="details">Where you submit reviews regarding your accommodation or other ancillary services available on our website through us, we will collect information from you included in your reviews, including your first name and country of residence, Where you are making a booking with other guests whose details you provide to us as part of your reservation, or if you make a booking on behalf of someone else, it is your responsibility to ensure that the person or people you have provided personal data about are aware that you have done.</p>
                </div>
            </div>
          </div>   
        </div>
    </section>


    <section className="contact-form">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-heading">
                        <h2 className="messagetitle">Message Us</h2>
                    </div>
                </div>
                <div className="col-md-6 col-md-offset-3">
                    <form id="contact" action="#" method="post">
                        <div className="row">
                            <div className="col-md-6">
                                <fieldset>
                                    <input name="name" type="text" className="form-control" id="name" placeholder="Your name..." required />
                                </fieldset>
                            </div>
                            <div className="col-md-6">
                                <fieldset>
                                    <input name="email" type="text" className="form-control" id="email" placeholder="Your email..." required />
                                </fieldset>
                            </div>
                            <div className="col-md-12">
                                <fieldset>
                                    <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your message..." required></textarea>
                                </fieldset>
                            </div>
                            <div className="col-md-12">
                                <fieldset>
                                    <button type="submit" id="form-submit" className="btn">Submit</button>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
    <section className="map">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div id="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61777.87909663339!2d121.0493191018077!3d14.59238302544088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b87f701edd6b%3A0xe1c1fe496d818869!2sCainta%2C%201900%20Rizal!5e0!3m2!1sen!2sph!4v1702972464486!5m2!1sen!2sph" width="100%" height="500" frameBorder="0" style={{ border: '0' }} allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                </div>
                <div className="col-md-12">
                    <ul className="social-icons">
                        <li><a href="https://www.facebook.com/tooplate"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-rss"></i></a></li>
                        <li><a href="#"><i className="fa fa-behance"></i></a></li>
                    </ul>
                </div>
                <div className="col-md-12">
                    <p>JOHNERICKGONZALES &copy; Project 2023</p>
                </div>
            </div>
        </div>
    </footer>

      </div>
      
    );
  }

export default About;
