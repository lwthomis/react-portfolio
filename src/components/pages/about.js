import React from 'react';
import profilePicture from "../../../static/assets/images/portfolio/headshot.jpg";


const AboutMe = () => {
   return (
    <div className="content-page-wrapper">
      <div 
      className="left-column" 
      style = {{
        background: "url(" + profilePicture + ") no-repeat",
        backgroundSize: "50%",
        backgroundPosition: "center",
      }}
      >
        
      </div>
      

      <div className="right-column">
        <h1>About Me</h1>
        <h3>Let me tell you a little bit about me</h3>

        <p className="me-text">My name is Luke. I live in Richmond, Kentucky. I am a full-stack developer and enjoy designing and building webpages.</p> 
      </div>
    </div>
   );
}


export default AboutMe;