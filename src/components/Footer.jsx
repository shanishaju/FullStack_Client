import { faFacebook, faInstagram, faLinkedin, faSlack, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import './footer.css';

function Footer() {
  return (
    <div className='row w-100 mt-5 p-5' style={{ backgroundColor: "#1F2833", display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div className="col-md-4 p-4 ms-md-5" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h4 className='text-light'>
          <FontAwesomeIcon icon={faSlack} bounce className='me-3 fs-2' />
          ProjectVault
        </h4>
        <p style={{ textAlign: 'justify', color: "white" }}>
          A secure and organized platform for storing, showcasing, and preserving your most valuable projects in one central location
        </p>

        <ul style={{ listStyle: 'none', display: 'flex', gap: '15px', padding: 0 }}>
          <li><a href="" style={{ color: "white" }}>Twitter</a></li>
          <li><a href="" style={{ color: "white" }}>LinkedIn</a></li>
          <li><a href="" style={{ color: "white" }}>Email</a></li>
          <li><a href="" style={{ color: "white" }}>Dribbble</a></li>
          <li><a href="" style={{ color: "white" }}>Github</a></li>
        </ul>
      </div>
    </div>

    
  );
}

export default Footer;
