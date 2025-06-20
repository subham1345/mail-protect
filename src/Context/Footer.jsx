import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() !== '') {
      setSubscribed(true);
      setEmail('');
    }
  };

  const socialLinks = [
    {
      href: 'https://facebook.com',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png',
      alt: 'Facebook'
    },
    {
      href: 'https://twitter.com',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHIZuDb--IJ-q5d97gWm1W2eyLj7BePcWnQ&s',
      alt: 'Twitter'
    },
    {
      href: 'https://linkedin.com',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbb0_npkny3YOvY91wF6jgOkRwTEcaUcyUOg&s',
      alt: 'LinkedIn'
    },
    {
      href: 'https://youtube.com',
      img: 'https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg?semt=ais_hybrid&w=740',
      alt: 'YouTube'
    },
    {
      href: 'https://instagram.com',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png',
      alt: 'Instagram'
    }
  ];

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'block',
    padding: '4px 0',
    fontSize: '14px',
  };

  return (
    <div style={{ backgroundColor: 'rgb(81,93,106)', padding: '50px 0' }}>
      <div className="container">
        {/* Flex row for desktop, column for mobile */}
        <div className="d-flex flex-column flex-md-row flex-md-nowrap gap-4 footer-main-row">
          {/* Div 1: Logo and Subscribe */}
          <div className="mb-4 ms-md-5" style={{ width: '300px', minWidth: '250px' }}>
            <div className="text-white h-100 d-flex flex-column">
              <img
                src="https://www.milprotech.com/public/logo.png"
                alt="Logo"
                style={{ width: '205px', height: '45px', objectFit: 'contain' }}
              />
              <h5 className="text-danger mt-3">Join the Club</h5>
              <div className="d-flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  style={{ borderRadius: '4px 0 0 4px', outline: 'none' }}
                />
                <button
                  onClick={handleSubscribe}
                  className="btn btn-white"
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '0 4px 4px 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 16px',
                    cursor: 'pointer',
                    border: 'none',
                  }}
                  aria-label="Subscribe"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24">
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>
                </button>
              </div>
              {subscribed && (
                <div style={{ color: 'lightgreen', marginTop: '10px', fontWeight: '600' }}>
                  Thanks for subscribing!
                </div>
              )}
              <p style={{ fontSize: '12px', lineHeight: '1.4', marginTop: '10px', color: 'white' }}>
                Subscribe today to hear about our newest offers, new products, collaborations, everything Portronics - Directly
                to your inbox.
              </p>
            </div>
          </div>

          {/* Div 2 */}
          <div className="mb-4 ms-md-5" style={{ width: '250px', minWidth: '150px' }}>
            <div className="text-white h-100">
              <h4 className="text-white" style={{ fontWeight: '800', fontSize: '20px' }}>Become Partner</h4>
              <ul className="list-unstyled">
                <li><a href="#" style={linkStyle}>Corporate Gifting</a></li>
                <li><a href="#" style={linkStyle}>Become a Partner</a></li>
              </ul>
            </div>
          </div>

          {/* Div 3 */}
          <div className="mb-4 ms-md-5" style={{ width: '220px', minWidth: '180px' }}>
            <div className="text-white h-100">
              <h5 className="text-white" style={{ fontWeight: '800', fontSize: '20px' }}>About Us</h5>
              <ul className="list-unstyled">
                <li><a href="#" style={linkStyle}>About Us</a></li>
                <li><a href="#" style={linkStyle}>Career</a></li>
                <li><a href="#" style={linkStyle}>Blog</a></li>
                <li><a href="#" style={linkStyle}>Warranty Policy</a></li>
                <li><a href="#" style={linkStyle}>CSR Policy</a></li>
                <li><a href="#" style={linkStyle}>Privacy Policy</a></li>
                <li><a href="#" style={linkStyle}>Term and Conditions</a></li>
                <li><a href="#" style={linkStyle}>E-Waste Management</a></li>
              </ul>
            </div>
          </div>

          {/* Div 4 */}
          <div className="mb-4" style={{ width: '220px', minWidth: '180px' }}>
            <div className="text-white h-100">
              <h5 className="text-white" style={{ fontWeight: '800', fontSize: '20px' }}>Help Desk</h5>
              <ul className="list-unstyled">
                <li><a href="#" style={linkStyle}>Support</a></li>
                <li><a href="#" style={linkStyle}>Track Your Order</a></li>
                <li><a href="#" style={linkStyle}>Warranty Registration</a></li>
                <li><a href="#" style={linkStyle}>How to Claim Warranty</a></li>
              </ul>
            </div>
          </div>

          {/* Div 5 */}
          <div className="mb-4" style={{ width: '240px', minWidth: '200px' }}>
            <div className="text-white h-100">
              <h5 className="text-danger">Follow Us</h5>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {socialLinks.map(({ href, img, alt }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer">
                    <img src={img} alt={alt} style={{ width: '24px', height: '24px' }} />
                  </a>
                ))}
              </div>
              <h5 className="text-danger mt-3">Contact Us</h5>
              <p className="mb-1">
                <a href="mailto:help@guguli.com" style={{ color: 'white', textDecoration: 'none', fontSize: '17px' }}>
                  help@milprosys.com
                </a>
              </p>
              <p className="mb-0">
                <a href="tel:+1234567890" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>
                  +1 234 567 890
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Div 6 */}
        <div className="row mt-4 footer-6th-div">
          <div className="col-12 text-white text-center text-md-center">
            <p style={{ fontSize: '14px', marginBottom: '5px' }}>
              ©️ 2024 Portronics Digital Private Limited. All Rights Reserved.
            </p>
            <p style={{ fontSize: '14px', marginBottom: '5px' }}>
              CIN - U74140DL2010PTC203767
            </p>
            <p style={{ fontSize: '14px', marginBottom: '5px' }}>
              For Queries Contact us: Legal, Portronics Digital Private Limited, Vegas Business Tower, Unit No. - 1082 to 1088,
            </p>
            <p style={{ fontSize: '14px', marginBottom: '0' }}>
              Floor 10, Plot. - 6, Sector 14 Dwarka, Dwarka, New Delhi, Delhi 110075, India
            </p>
          </div>
        </div>
      </div>

      {/* Mobile responsive styles */}
      <style>
        {`
          @media (max-width: 767.98px) {
            .footer-main-row {
              flex-direction: column !important;
              gap: 1rem !important;
            }
            .footer-6th-div {
              text-align: left !important;
              margin-left: 0px !important;
            }
            .footer-6th-div .col-12 {
              text-align: left !important;
              padding-left: 0;
              padding-right: 0;
              word-break: break-word;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
