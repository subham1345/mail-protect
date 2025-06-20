import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const carouselItems = [
    {
      src: "https://www.portronics.com/cdn/shop/files/IPL_Banner_Web_ii.png?v=1745577856",
      link: "https://example.com/page1",
    },
    {
      src: "https://www.portronics.com/cdn/shop/files/Toad_Ergo_3_Banner_Web.png?v=1747203718",
      link: "https://example.com/page2",
    },
    {
      src: "https://www.portronics.com/cdn/shop/files/Power_Shutter_Home_Banner_Web.png?v=1744092794",
      link: "https://example.com/page3",
    },
    {
      src: "https://www.portronics.com/cdn/shop/files/ZIfro_Banner_Web_II.png?v=1742886437",
      link: "https://example.com/page4",
    },
    {
      src: "https://www.portronics.com/cdn/shop/files/Chyro_Banner_Web_6237df9e-21c7-4159-b220-10dced280982.png?v=1740133497",
      link: "https://example.com/page5",
    },
    {
      src: "https://www.portronics.com/cdn/shop/files/Vader_Max_Banner_Web.png?v=1740463993",
      link: "https://example.com/page6",
    },
    {
      src: "https://www.portronics.com/cdn/shop/files/Thunder_2.0_Banner_Web_568252e3-1144-4c0d-89f2-74da8b2de9f6.png?v=1735299006",
      link: "https://example.com/page7",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = carouselItems.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3000);
    return () => clearInterval(interval);
  }, [length]);

  if (length === 0) return null;

  return (
    <>
      <style>{`
        .dot {
          display: inline-block;
          width: 28px;
          height: 4px;
          margin: 0 5px;
          background-color: #bbb;
          border-radius: 20%;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .dot.active {
          background-color: #333;
        }
      `}</style>

      <div className="container-fluid pt-5" style={{marginTop: '70px'}}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 px-0">
            <div className="w-100 overflow-hidden rounded">
              {carouselItems.map(({ src, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: index === current ? "block" : "none" }}
                >
                  <img
                    src={src}
                    alt={`slide-${index}`}
                    className="img-fluid w-100 d-block"
                    style={{ maxHeight: "500px", objectFit: "cover" }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-12 text-center">
            {carouselItems.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`dot ${current === idx ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
