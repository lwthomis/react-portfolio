import React from 'react';
import contactPageImg from "../../../static/assets/images/auth/login.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactMe = () => {
   return (
    <div className="content-page-wrapper">
      <div 
      className="left-column" 
      style = {{
        background: "url(" + contactPageImg + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      >
        
      </div>
      

      <div className="right-column">
        <div className="contact-bullet-points">
          <h1>Contact Me</h1>
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>
            <div className="text">
              270-908-1509
            </div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>
            <div className="text">
              luke.thomis@gmail.com
            </div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>
            <div className="text">
              Richmond, Kentucky
            </div>
          </div>

        </div>
      </div>
    </div>
   );
}


export default ContactMe;