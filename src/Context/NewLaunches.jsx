import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NewLaunches = () => {
  const launches = [
    {
      image:
        "https://www.portronics.com/cdn/shop/files/Portronics_Wallet_X_MagSafe_wallet_for_smartphone.jpg?v=1747636938&width=533",
      tag: "New Drop",
      title: "Product One",
      description: "This is product one description.",
      newPrice: 120,
      oldPrice: 150,
      discount: "20%",
    },
    {
      image:
        "https://www.portronics.com/cdn/shop/files/Artboard1_6dcb1b5c-887f-4566-ac79-11ba6dae0fe5.jpg?v=1747474056&width=533",
      tag: "Limited",
      title: "Product Two",
      description: "This is product two description.",
      newPrice: 90,
      oldPrice: 120,
      discount: "25%",
    },
    {
      image:
        "https://www.portronics.com/cdn/shop/files/Portronics_Toad_Ergo_3_Wireless_vertical_Mouse.jpg?v=1747310031&width=533",
      tag: "Trending",
      title: "Product Three",
      description: "This is product three description.",
      newPrice: 75,
      oldPrice: 100,
      discount: "25%",
    },
    {
      image:
        "https://www.portronics.com/cdn/shop/files/Portronics_sound_slick_x_250W_wireless_soundbar_with_wired_subwoofer_for_home.jpg?v=1746684243&width=533",
      tag: "Deal",
      title: "Product Four",
      description: "This is product four description.",
      newPrice: 200,
      oldPrice: 250,
      discount: "20%",
    },
    {
      image:
        "https://www.portronics.com/cdn/shop/files/1_1_afc121e4-89b2-47dc-bcf4-5213a8ff93c5.jpg?v=1747906829&width=533",
      tag: "Featured",
      title: "Product Five",
      description: "This is product five description.",
      newPrice: 300,
      oldPrice: 350,
      discount: "14%",
    },
    {
      image:
        "https://www.portronics.com/cdn/shop/files/Portronics_sound_slick_x_250W_wireless_soundbar_with_wired_subwoofer_for_home.jpg?v=1746684243&width=533",
      tag: "Hot",
      title: "Product Six",
      description: "This is product six description.",
      newPrice: 110,
      oldPrice: 140,
      discount: "21%",
    },
    {
      image:
        "https://www.portronics.com/cdn/shop/files/Portronics_CoolCube_portable_desktop_fan_with_Type_C_charging_cable.jpg?v=1747640777&width=533",
      tag: "Top Pick",
      title: "Product Seven",
      description: "This is product seven description.",
      newPrice: 85,
      oldPrice: 100,
      discount: "15%",
    },
    {
      image:
        "https://www.portronics.com/cdn/shop/files/Portronics_Mport_8_Plus_USB-C_PD_charging_hub_for_laptop.jpg?v=1746274873&width=533",
      tag: "Special",
      title: "Product Eight",
      description: "This is product eight description.",
      newPrice: 95,
      oldPrice: 130,
      discount: "27%",
    },
    { image: "", tag: "View All", isViewAll: true },
  ];

  // const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);

  // Update visible launches
  const visibleLaunches = launches.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  // Calculate total pages
  const totalPages = Math.ceil(launches.length / itemsPerPage);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      let perPage = 4;
      if (width < 768) perPage = 1;
      else if (width < 1024) perPage = 2;
      else perPage = 4;

      setItemsPerPage(perPage);
      setCurrentPage(0); // Reset to first page on resize
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Prev & Next logic (based on page, not index)
  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const calculateEMI = (price) => (price / 6).toFixed(2);

  // Determine right offset for Next button based on screen size
  const [rightOffset, setRightOffset] = useState("0px");

  useEffect(() => {
    const updateRightOffset = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setRightOffset("0px"); // sm
      } else if (width >= 768 && width < 1024) {
        setRightOffset("10px"); // md
      } else {
        setRightOffset("-40px"); // lg and up
      }
    };
    updateRightOffset();
    window.addEventListener("resize", updateRightOffset);
    return () => window.removeEventListener("resize", updateRightOffset);
  }, []);

  return (
    <div style={{ width: "100%", backgroundColor: "#f8f9fa", height: "auto" }}>
      <div
        className="container py-3 position-relative"
        style={{ paddingLeft: "60px" }}
      >
        <h2
          className="mb-4 fw-bold text-uppercase"
          style={{ fontSize: "24px", paddingLeft: "10px" }}
        >
          New Launches
        </h2>

        <div className="d-flex align-items-center position-relative">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="btn btn-link position-absolute"
            style={{ left: "-45px", zIndex: 10 }}
          >
            <svg
              width="24"
              height="24"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="row gx-3">
            {visibleLaunches.map((launch, idx) => (
              <div
                key={idx}
                className="col-12 col-md-6 col-lg-3 mb-3"
                style={{
                  cursor: launch.isViewAll ? "pointer" : "default",
                }}
                onClick={() => {
                  if (launch.isViewAll) alert("View All Clicked");
                }}
              >
                <div className="border bg-light d-flex flex-column h-100">
                  {!launch.isViewAll ? (
                    <>
                      <div
                        style={{
                          height: "296px",
                          width: "100%",
                          overflow: "hidden",
                          position: "relative",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`Clicked on image of ${launch.title}`);
                        }}
                      >
                        <img
                          src={launch.image}
                          alt={launch.tag}
                          className="img-fluid"
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            marginTop: "-7px",
                          }}
                        />
                        <div
                          className="position-absolute start-50 translate-middle"
                          style={{
                            top: "100%",
                            marginTop: "-9px",
                            zIndex: 1,
                            backgroundColor: "red",
                            color: "white",
                            padding: "2px 10px",
                            borderRadius: "50px",
                            width: "80%",
                            textAlign: "center",
                            fontSize: "14px",
                            fontWeight: "bold",
                            transform: "translate(-50%, -50%)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {launch.tag}
                        </div>
                      </div>

                      <div
                        className="p-3 d-flex flex-column justify-content-between"
                        style={{ height: "210px" }}
                      >
                        <div
                          className="fw-bold text-uppercase"
                          style={{ cursor: "pointer", fontSize: "16px" }}
                          onClick={() =>
                            alert(`Clicked on title of ${launch.title}`)
                          }
                        >
                          {launch.title}
                        </div>

                        <div
                          className="text-secondary"
                          style={{ fontSize: "14px", flexGrow: 1 }}
                        >
                          {launch.description}
                        </div>

                        <div className="d-flex align-items-center gap-2 fw-bold">
                          <span>₹{launch.newPrice.toFixed(2)}</span>
                          <sup className="text-muted text-decoration-line-through">
                            ₹{launch.oldPrice.toFixed(2)}
                          </sup>
                          <div
                            className="ms-auto"
                            style={{
                              display: "inline-block",
                              border: "1px solid red",
                              borderRadius: "40px",
                              padding: "2px",
                            }}
                          >
                            <div
                              style={{
                                backgroundColor: "red",
                                border: "1px solid red",
                                borderRadius: "40px",
                                padding: "2px 6px",
                                color: "white",
                                fontSize: "12px",
                              }}
                            >
                              {launch.discount} OFF
                            </div>
                          </div>
                        </div>

                        <div
                          className="d-flex justify-content-between align-items-center mt-2"
                          style={{ fontSize: "14px" }}
                        >
                          <div>
                            EMI: ₹{calculateEMI(launch.newPrice)} / month
                          </div>
                          <div
                            className="text-primary text-decoration-underline"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              alert(`Buy on EMI clicked for ${launch.title}`)
                            }
                          >
                            Buy on EMI
                          </div>
                        </div>

                        <button
                          className="btn btn-dark mt-2 text-uppercase fw-bold"
                          onClick={() =>
                            alert(`Add to cart clicked for ${launch.title}`)
                          }
                        >
                          Add to Cart
                        </button>
                      </div>
                    </>
                  ) : (
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        height: "504px",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      View All
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="btn btn-link position-absolute"
            style={{ right: rightOffset, zIndex: 10 }}
          >
            <svg
              width="24"
              height="24"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewLaunches;
