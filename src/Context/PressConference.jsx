import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PressConference = () => {
  const featureImages = [
    'https://www.portronics.com/cdn/shop/files/Untitled_design_11c800c9-d3ab-472c-8999-b4f8243435a7.png?v=1708583923',
    'https://www.portronics.com/cdn/shop/files/6_85ecbcd9-5fb1-4eaf-921a-675494c4b77a.png?v=1708583567',
    'https://www.portronics.com/cdn/shop/files/5_1462da54-c9d7-4b4b-b91d-7c66ae41a4f0.png?v=1708583567',
    'https://www.portronics.com/cdn/shop/files/2_49d13c7d-8560-4833-859a-6dd19a999058.png?v=1708583566',
    'https://www.portronics.com/cdn/shop/files/Untitled_design_6487639b-32ff-4bbb-8377-3d5ea247d03b.png?v=1708585067',
    'https://www.portronics.com/cdn/shop/files/3_ab0cb7f7-b85b-46fe-9b37-8413597df0e7.png?v=1708583566',
  ];

  const blogPosts = [
    {
      image:
        'https://www.portronics.com/cdn/shop/articles/how_to_choose_the_best_usb_hub_and_enhance_your_productivity.png?v=1747308427&width=533',
      description: 'How to choose the best USB hub and enhance your productivity',
      date: { month: 'May', day: 22, year: 2025 },
    },
    {
      image:
        'https://www.portronics.com/cdn/shop/articles/unleash_victory_sound_this_ipl_with_portronics_popular_soundbars_063adf31-4ea8-415e-9109-43d0ea5253db.jpg?v=1746105244&width=533',
      description: 'Unleash victory sound this IPL with Portronics popular soundbars',
      date: { month: 'April', day: 10, year: 2025 },
    },
    {
      image:
        'https://www.portronics.com/cdn/shop/articles/best_earbuds_in_india_answering_the_most_common_questions_a82a7059-387c-4626-b3d8-0f2b827e738e.png?v=1745672061&width=533',
      description: 'Best earbuds in India: Answering the most common questions',
      date: { month: 'March', day: 15, year: 2025 },
    },
    {
      image:
        'https://www.portronics.com/cdn/shop/articles/the_ultimate_ipl_watch_party_setup_with_portronics.png?v=1744108579&width=533',
      description: 'The ultimate IPL watch party setup with Portronics',
      date: { month: 'February', day: 5, year: 2025 },
    },
    {
      image:
        'https://www.portronics.com/cdn/shop/articles/LSG.png?v=1742989143&width=533',
      description: 'Latest tech gadgets review from LSG',
      date: { month: 'January', day: 25, year: 2025 },
    },
    {
      image:
        'https://www.portronics.com/cdn/shop/articles/How_to_Choose_Splash-Proof_Speakers_for_Holi_Celebrations.jpg?v=1741887098&width=533',
      description: 'How to choose splash-proof speakers for Holi celebrations',
      date: { month: 'December', day: 18, year: 2024 },
    },
    {
      image:
        'https://www.portronics.com/cdn/shop/articles/8_reasons_a_tyre_inflator_is_more_important_than_you_think.png?v=1741756796&width=533',
      description: '8 reasons a tyre inflator is more important than you think',
      date: { month: 'November', day: 30, year: 2024 },
    },
    {
      image:
        'https://www.portronics.com/cdn/shop/articles/laptop_stands_faq_everything_you_need_to_know_before_buying.png?v=1741766394&width=533',
      description: 'Laptop stands FAQ: Everything you need to know before buying',
      date: { month: 'October', day: 12, year: 2024 },
    },
    {
      image:
        'https://www.portronics.com/cdn/shop/articles/best-fast-charging-car-chargers-you-can-buy-right-now',
      description: 'Best fast charging car chargers you can buy right now',
      date: { month: 'September', day: 28, year: 2024 },
    },
    {
      image:
        'https://www.portronics.com/cdn/shop/articles/8_reasons_a_tyre_inflator_is_more_important_than_you_think.png?v=1741756796&width=533',
      description: 'Another blog post example',
      date: { month: 'November', day: 30, year: 2024 },
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const blogGroups = isMobile
    ? [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]]
    : [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

  const [groupIndex, setGroupIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGroupIndex((prev) => (prev + 1) % blogGroups.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [blogGroups.length]);

  const currentGroup = blogGroups[groupIndex];

  return (
    <div className="container py-4">
      {/* PRESS SECTION */}
      <div className="mb-4 text-start">
        <h3 className="mb-2 text-dark fw-bold text-uppercase text-center ">
          In The Press
        </h3>
        <p className="text-secondary text-center">
          Places where we have been featured
        </p>
        {isMobile ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 105px)',
              gap: '10px',
              justifyContent: 'start',
            }}
          >
            {featureImages.map((src, idx) => (
              <div
                key={idx}
                style={{
                  width: 105,
                  height: 105,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={src}
                  alt={`Feature ${idx + 1}`}
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
            ))}
          </div>
        ) : (
          // Desktop 3 columns, 2 images each
          <div className="d-flex justify-content-center gap-4">
            {[0, 1, 2].map((col) => (
              <div
                key={col}
                className="d-flex flex-column gap-3"
                style={{ width: 285.9 }}
              >
                {featureImages
                  .slice(col * 2, col * 2 + 2)
                  .map((src, idx) => (
                    <div
                      key={idx}
                      style={{
                        width: 285.9,
                        height: 285.9,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <img
                        src={src}
                        alt={`Feature ${col * 2 + idx + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* BLOG POST SECTION */}
      <div className="text-start mt-4">
        <h2 className="text-uppercase fw-bold fs-4 mb-4 text-left"
        style={{ marginLeft: '50px' }}
        >
          Blog Post
        </h2>
        <div className="d-flex justify-content-start justify-content-md-center gap-3 flex-nowrap overflow-hidden">
          {currentGroup.map((index) => {
            const post = blogPosts[index];
            return (
              <div
                key={index}
                className="d-flex flex-column rounded overflow-hidden"
                style={{
                  width: isMobile ? 175 : 386,
                  height: isMobile ? 98 : 'auto',
                  boxShadow: '0 0 6px rgba(0,0,0,0.1)',
                  backgroundColor: '#fff',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: isMobile ? 70 : 222,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={post.image}
                    alt={post.description}
                    style={{
                      objectFit: 'cover',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      display: 'block',
                    }}
                  />
                </div>
                {!isMobile && (
                  <div className="px-2 py-2 text-left">
                    <div>{post.description}</div>
                    <div className="text-muted mt-1">
                      {post.date.month}, {post.date.day}, {post.date.year}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dot Indicators */}
        <div className="d-flex justify-content-center mt-3 gap-2">
          {blogGroups.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setGroupIndex(idx)}
              style={{
                cursor: 'pointer',
                fontSize: '10px',
                color: groupIndex === idx ? '#000' : '#ccc',
              }}
            >
              {groupIndex === idx ? '●' : '○'}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PressConference;
