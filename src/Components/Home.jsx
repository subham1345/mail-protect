import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const carouselItems = [
    { src: 'https://www.portronics.com/cdn/shop/files/IPL_Banner_Web_ii.png?v=1745577856', link: 'https://example.com/page1' },
    { src: 'https://www.portronics.com/cdn/shop/files/Toad_Ergo_3_Banner_Web.png?v=1747203718', link: 'https://example.com/page2' },
    { src: 'https://www.portronics.com/cdn/shop/files/Power_Shutter_Home_Banner_Web.png?v=1744092794', link: 'https://example.com/page3' },
    { src: 'https://www.portronics.com/cdn/shop/files/ZIfro_Banner_Web_II.png?v=1742886437', link: 'https://example.com/page4' },
    { src: 'https://www.portronics.com/cdn/shop/files/Chyro_Banner_Web_6237df9e-21c7-4159-b220-10dced280982.png?v=1740133497', link: 'https://example.com/page5' },
    { src: 'https://www.portronics.com/cdn/shop/files/Vader_Max_Banner_Web.png?v=1740463993', link: 'https://example.com/page6' },
    { src: 'https://www.portronics.com/cdn/shop/files/Thunder_2.0_Banner_Web_568252e3-1144-4c0d-89f2-74da8b2de9f6.png?v=1735299006', link: 'https://example.com/page7' },
  ];

  const [current, setCurrent] = useState(0);
  const length = carouselItems.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % length);
    }, 3000);
    return () => clearInterval(interval);
  }, [length]);

  if (length === 0) return null;

  return (
    <>
      <style>{`
        .carousel-wrapper {
          width: 1463px;
          height: 487.5px;
          margin-left: -15.5px;
          margin-top: 10px;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 991.98px) {
          .carousel-wrapper {
            width: 100% !important;
            height: auto !important;
            margin-left: 0 !important;
          }

          .carousel-image {
            width: 100% !important;
            height: auto !important;
          }
        }

        .dots-container {
          text-align: center;
          margin-top: 10px;
        }
      `}</style>

      <div className="container-fluid" style={{ paddingTop: '50px', marginTop: '50px' }}>
        <div className="row justify-content-center">
          <div className="carousel-wrapper p-0">
            {carouselItems.map(({ src, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={index === current ? 'd-block' : 'd-none'}
              >
                <img
                  src={src}
                  alt={`slide-${index}`}
                  className="carousel-image"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="row">
          <div className="col-12 dots-container">
            {carouselItems.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setCurrent(idx)}
                style={{
                  display: 'inline-block',
                  width: '28px',
                  height: '4px',
                  margin: '0 5px',
                  backgroundColor: current === idx ? '#333' : '#bbb',
                  borderRadius: '20%',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
