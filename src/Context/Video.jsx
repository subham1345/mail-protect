import React, { useState } from 'react';

const NewLaunches = () => {
  const launches = [
    {
      image:
        'https://www.portronics.com/cdn/shop/files/Portronics_Wallet_X_MagSafe_wallet_for_smartphone.jpg?v=1747636938&width=533',
      video: 'https://www.portronics.com/cdn/shop/files/quinn_y372gf37n4x201yccjtku4zz.mp4#t=0.1',
      title: 'Product One',
      description:
        'This is product one description. It is detailed and explains the features of the product clearly.',
      newPrice: 120,
      oldPrice: 150,
      discount: '20%',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/1603/9553/files/1_a8f5e9e6-92ec-431c-9a48-b6d6f5c81aad_720x720.jpg?v=1745824167',
      video: 'https://www.portronics.com/cdn/shop/files/quinn_oc1x50s4s0n38rt3k4c5zx6e.mp4#t=0.1',
      title: 'Product Two',
      description:
        'This is product two description. It is detailed and explains the features of the product clearly.',
      newPrice: 90,
      oldPrice: 120,
      discount: '25%',
    },
    {
      image:
        'https://www.portronics.com/cdn/shop/files/Portronics_Toad_Ergo_3_Wireless_vertical_Mouse.jpg?v=1747310031&width=533',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Product Three',
      description:
        'This is product three description. It is detailed and explains the features of the product clearly.',
      newPrice: 75,
      oldPrice: 100,
      discount: '25%',
    },
    {
      image:
        'https://www.portronics.com/cdn/shop/files/Portronics_sound_slick_x_250W_wireless_soundbar_with_wired_subwoofer_for_home.jpg?v=1746684243&width=533',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Product Four',
      description:
        'This is product four description. It is detailed and explains the features of the product clearly.',
      newPrice: 200,
      oldPrice: 250,
      discount: '20%',
    },
    {
      image:
        'https://www.portronics.com/cdn/shop/files/1_1_afc121e4-89b2-47dc-bcf4-5213a8ff93c5.jpg?v=1747906829&width=533',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Product Five',
      description:
        'This is product five description. It is detailed and explains the features of the product clearly.',
      newPrice: 300,
      oldPrice: 350,
      discount: '14%',
    },
    {
      image:
        'https://www.portronics.com/cdn/shop/files/Portronics_sound_slick_x_250W_wireless_soundbar_with_wired_subwoofer_for_home.jpg?v=1746684243&width=533',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Product Six',
      description:
        'This is product six description. It is detailed and explains the features of the product clearly.',
      newPrice: 110,
      oldPrice: 140,
      discount: '21%',
    },
    {
      image:
        'https://www.portronics.com/cdn/shop/files/Portronics_CoolCube_portable_desktop_fan_with_Type_C_charging_cable.jpg?v=1747640777&width=533',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Product Seven',
      description:
        'This is product seven description. It is detailed and explains the features of the product clearly.',
      newPrice: 85,
      oldPrice: 100,
      discount: '15%',
    },
    {
      image:
        'https://www.portronics.com/cdn/shop/files/Portronics_CoolCube_portable_desktop_fan_with_Type_C_charging_cable.jpg?v=1747640777&width=533',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Product Eight',
      description:
        'This is product eight description. It is detailed and explains the features of the product clearly.',
      newPrice: 85,
      oldPrice: 100,
      discount: '15%',
    },
    {
      image:
        'https://www.portronics.com/cdn/shop/files/Portronics_Mport_8_Plus_USB-C_PD_charging_hub_for_laptop.jpg?v=1746274873&width=533',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Product Nine',
      description:
        'This is product nine description. It is detailed and explains the features of the product clearly.',
      newPrice: 95,
      oldPrice: 130,
      discount: '27%',
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const steps = [0, 4, 5];
  const currentStepIndex = steps.indexOf(startIndex);

  const [popupLaunch, setPopupLaunch] = useState(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setStartIndex(steps[currentStepIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setStartIndex(steps[currentStepIndex - 1]);
    }
  };

  const visibleLaunches = launches.slice(
    startIndex,
    startIndex === 0 ? 4 : startIndex === 4 ? 8 : 9
  );

  return (
    <div style={{ width: '100%', marginTop: '40px' }}>
      <div
        style={{
          width: '85%',
          margin: '0 auto',
          padding: '10px',
          position: 'relative',
          marginLeft: '110px', // Shift whole content slightly right
        }}
      >
        <div style={{ position: 'relative' }}>
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '-32px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
               >
              <circle cx="12" cy="12" r="12" fill="red" />
              <polyline
                points="15 18 9 12 15 6"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

         
          </button>

          <div
            style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'start',
              flexWrap: 'nowrap',
              overflow: 'hidden',
            }}
          >
            {visibleLaunches.map((launch, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  width: '288px',
                  height: '545px',
                  backgroundColor: '#f0f0f0',
                  border: '1px solid grey',
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: '500',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'start',
                  alignItems: 'center',
                  boxSizing: 'border-box',
                  cursor: 'default',
                  textDecoration: 'none',
                }}
              >
                <div
                  style={{
                    width: '288px',
                    height: '389px',
                    position: 'relative',
                    border: '1px solid gray',
                    backgroundColor: '#ccc',
                    overflow: 'hidden',
                    cursor: 'pointer',
                  }}
                  onClick={() => setPopupLaunch({ ...launch, showFull: false })}
                >
                  <video
                    src={launch.video}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    autoPlay
                    muted
                    loop
                  />
                  <img
                    src={launch.image}
                    alt={launch.title}
                    style={{
                      position: 'absolute',
                      top: '320px',
                      left: '10px',
                      width: '50px',
                      height: '50px',
                    }}
                  />
                </div>

                {/* Section 3: Title, Prices, Discount and Button */}
                <div
                  style={{
                    width: '288px',
                    height: '156px',
                    borderTop: '1px solid gray',
                    padding: '10px',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontWeight: 'bold',
                      fontSize: '16px',
                      marginBottom: '6px',
                    }}
                  >
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={() => alert(`Clicked on title of ${launch.title}`)}
                    >
                      {launch.title}
                    </span>
                  </div>

                  {/* Price & OFF row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '8px',
                    }}
                  >
                    <div style={{ fontWeight: 'bold', fontSize: '16px' }}>
                      ${launch.newPrice.toFixed(2)}{' '}
                      <sup
                        style={{
                          fontSize: '12px',
                          color: 'gray',
                          textDecoration: 'line-through',
                        }}
                      >
                        ${launch.oldPrice.toFixed(2)}
                      </sup>
                    </div>

                    <div
                      style={{
                        backgroundColor: '#f8d7da',
                        border: '1px solid #f5c6cb',
                        borderRadius: '4px',
                        padding: '2px 6px',
                        color: '#721c24',
                        fontWeight: 'bold',
                        fontSize: '12px',
                      }}
                    >
                      {launch.discount} OFF
                    </div>
                  </div>

                  <button
                    style={{
                      marginTop: '10px',
                      backgroundColor: 'black',
                      color: 'white',
                      border: 'none',
                      padding: '10px',
                      textTransform: 'uppercase',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                    }}
                    onClick={() => alert(`Add to cart clicked for ${launch.title}`)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '-15px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
           <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
               >
              <circle cx="12" cy="12" r="12" fill="red" />
              <polyline
                points="9 6 15 12 9 18"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>


          </button>
        </div>
      </div>

      {/* Popup */}
      {popupLaunch && (
        <div
          onClick={() => setPopupLaunch(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '690px',
              height: '640px',
              backgroundColor: 'white',
              display: 'flex',
              boxSizing: 'border-box',
            }}
          >
            {/* 1st Div: Video with mute icon top-right */}
            <div
              style={{
                width: '345px',
                height: '640px',
                position: 'relative',
                backgroundColor: '#000',
              }}
            >
              <video
                src={popupLaunch.video}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                autoPlay
                loop
                muted={isMuted}
              />
              <div
                onClick={() => setIsMuted(!isMuted)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  color: 'white',
                  fontSize: '24px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  userSelect: 'none',
                  border: '1px solid white',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
              >
                {/* simple speaker icon */}
                {isMuted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path d="M5 9v6h4l5 5V4L9 9H5z" />
                    <line
                      x1="18"
                      y1="9"
                      x2="18"
                      y2="15"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path d="M5 9v6h4l5 5V4L9 9H5z" />
                    <path
                      d="M16 8.82a5 5 0 0 1 0 6.36"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M19 6a9 9 0 0 1 0 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* 2nd Div: subdivided into 3 divs */}
            <div
              style={{
                width: '345px',
                height: '640px',
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box',
                padding: '10px',
              }}
            >
              {/* 1st inner div: image 345x320 */}
              <div
                style={{
                  width: '345px',
                  height: '320px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                  marginBottom: '10px',
                }}
              >
                <img
                  src={popupLaunch.image}
                  alt="popup"
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                />
              </div>

              {/* 2nd inner div: title + description + Read More 345x220 */}
              <div
                style={{
                  width: '345px',
                  height: '220px',
                  overflowY: 'auto',
                  marginBottom: '10px',
                }}
              >
                <h4>{popupLaunch.title}</h4>
                <p>
                  {popupLaunch.description.length > 100 && !popupLaunch.showFull ? (
                    <>
                      {popupLaunch.description.slice(0, 100)}...
                      <span
                        style={{ color: 'blue', cursor: 'pointer' }}
                        onClick={() =>
                          setPopupLaunch({ ...popupLaunch, showFull: true })
                        }
                      >
                        {' '}
                        Read More
                      </span>
                    </>
                  ) : (
                    <>
                      {popupLaunch.description}
                      {popupLaunch.description.length > 100 && (
                        <span
                          style={{ color: 'blue', cursor: 'pointer' }}
                          onClick={() =>
                            setPopupLaunch({ ...popupLaunch, showFull: false })
                          }
                        >
                          {' '}
                          Show Less
                        </span>
                      )}
                    </>
                  )}
                </p>
              </div>

              {/* 3rd inner div: buttons 345x74 */}
              <div
                style={{
                  width: '345px',
                  height: '74px',
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                <button
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                  onClick={() => alert(`More Info clicked for ${popupLaunch.title}`)}
                >
                  More Info
                </button>
                <button
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                  onClick={() => alert(`Add to Cart clicked for ${popupLaunch.title}`)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewLaunches;
