import React, { useEffect, useState } from 'react';
import './TopNavBar.module.css';

const messages = [
  { text: "Free Shipping on orders above ₹999!", link: "/shipping-info" },
  { text: "New Launches available now!", link: "/new-launches" },
  { text: "Get 10% off with MILPRO10 coupon!", link: "/offers" }
];

const TopNavbar = () => {
  const [index, setIndex] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex(prev => (prev + 1) % messages.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setHidden(true);
      else setHidden(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{`
        .top-navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 40px;
          line-height: 40px;
          background-color: red;
          color: white;
          text-align: center;
          z-index: 1060;
          transition: opacity 0.5s ease;
          opacity: 1;
          pointer-events: auto;
        }
        .top-navbar.hidden {
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.5s ease;
        }
        .fade-message {
          transition: opacity 0.5s ease;
          opacity: 1;
        }
        .fade-message.hidden {
          opacity: 0;
        }
      `}</style>

      <div className={`top-navbar ${hidden ? 'hidden' : ''}`}>
        <a
          href={messages[index].link}
          className={`text-white text-decoration-none fade-message ${fade ? '' : 'hidden'}`}
        >
          {messages[index].text}
        </a>
      </div>
    </>
  );
};

export default TopNavbar;
