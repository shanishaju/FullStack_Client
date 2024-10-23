import { faFacebook, faInstagram, faLinkedin, faSlack, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import './footer.css';

function Footer() {
  return (
    <div className='row w-100 p-4 d-flex align-items-center justify-content-center' style={{ backgroundColor: "#1F2833" }}>
      <div className="col-md-4 p-4 ms-md-5 d-flex align-items-center justify-content-center" style={{ display: 'flex', flexDirection: 'column'}}>
       <div>
       <h4 className='text-light text-center mb-3'>
          <FontAwesomeIcon icon={faSlack} bounce className='me-3 fs-2' />
          ProjectVault
        </h4>
        <p className='mb-3' style={{ textAlign: 'justify', color: "white" }}>
          A secure and organized platform for storing, showcasing, and preserving your most valuable projects in one central location
        </p>
       </div>

       <div>
       <ul style={{ listStyle: 'none', display: 'flex', gap: '15px', padding: 0 }}>
          <li><a href="" style={{ color: "white" }}>Twitter</a></li>
          <li><a href="" style={{ color: "white" }}>LinkedIn</a></li>
          <li><a href="" style={{ color: "white" }}>Email</a></li>
          <li><a href="" style={{ color: "white" }}>Dribbble</a></li>
          <li><a href="" style={{ color: "white" }}>Github</a></li>
        </ul>
       </div> 
      </div>
    </div>

    
  );
}

export default Footer;
