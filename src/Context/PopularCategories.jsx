import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PopularCategories = () => {
  const categories = [
    { 
      src: 'https://www.portronics.com/cdn/shop/files/1_ad163255-52f8-4fee-9591-78339cedddc2.png?v=1744007047', 
      alt: 'Audio', 
      link: '/audio',
      hoverSrc: 'https://www.portronics.com/cdn/shop/files/Audio_GIF_82eba3a1-6372-4242-b791-51733aab27d8.gif?v=1744007231'
    },
    { 
      src: 'https://www.portronics.com/cdn/shop/files/3_f5b4c28a-1cfc-4bae-8929-f601f2b9b199.png?v=1744007345', 
      alt: 'Computers', 
      link: '/computers',
      hoverSrc: 'https://www.portronics.com/cdn/shop/files/Mobile_Accessories_GIF_7013d546-19b4-4faa-a6dd-c4e4853c78bd.gif?v=1744007325'
    },
    { 
      src: 'https://www.portronics.com/cdn/shop/articles/top_car_dashboard_accessories_for_better_driving_experience.png?v=1718102605', 
      alt: 'Car Accessories', 
      link: '/car-accessories',
      hoverSrc: 'https://www.portronics.com/cdn/shop/files/car_accessories_GIF.gif?v=1744007271'
    },
    { 
      src: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/mouse/l/2/e/vader-pro-wireless-gaming-mouse-with-6-buttons-thumb-comfort-original-imagz7yeuzknfhfw.jpeg?q=90&crop=false', 
      alt: 'Mobile Devices', 
      link: '/mobile-devices',
      hoverSrc: 'https://www.portronics.com/cdn/shop/files/Computer_Accessories_GIF_c29e0156-d110-482e-96cd-bf6644405475.gif?v=1744007400'
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container" style={{ width: '89%', marginTop: '40px', padding: '20px' }}>
      <h2 className="mb-4 text-uppercase fw-bold" style={{ marginLeft: '1.7%', fontSize: '24px', textAlign: 'left' }}>
        Popular Categories
      </h2>

      <div className="mx-3" style={{ width: '95%' }}>
        <div 
          className="d-flex flex-wrap"
          style={{ justifyContent: 'end', gap: '19px', marginLeft: '-20px' }} // shift all left
        >
          {categories.map(({ src, alt, link, hoverSrc }, idx) => (
            <div 
              key={idx}
              style={{
                maxWidth: '280px',
                flex: '1 1 280px',
              }}
            >
              <a
                href={link}
                className="text-decoration-none text-dark d-block"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="text-center">
                  <img
                    src={hoveredIndex === idx ? hoverSrc : src}
                    alt={alt}
                    className="img-fluid rounded"
                    style={{
                      height: '286px',
                      width: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  <div className="mt-2 fw-bold" style={{ fontSize: '20px' }}>
                    {alt}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-5">
        <img 
          src="https://www.portronics.com/cdn/shop/files/snippet_Banner_Finalsize_a67f6cd4-7730-4454-9956-a461087f4dbd.png?v=1741607518" 
          alt="Bottom Banner"
          className="img-fluid"
          style={{ width: '1190px', height: '370px', maxWidth: '1300px', objectFit: 'cover', marginRight:'10px' }} 
        />
      </div>
    </div>
  );
};

export default PopularCategories;
