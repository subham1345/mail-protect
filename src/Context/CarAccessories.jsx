import React, { useState, useEffect } from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import ResponsiveCategoryNav from "../Components/ResponsiveCategoryNav";

const categories = [
  "All",
  "Car Charger",
  "Car Bluetooth",
  "Tyre Inflator",
  "Car Mobile Holder",
  "Bike Mobile Holder",
  "Vacuum Cleaner",
  "Car Wireless Charger",
];

const allProducts = {
  "Car Charger": [
    {
      image: "https://via.placeholder.com/290x296?text=Car+Charger",
      title: "Fast Car Charger",
      desc: "Quick charge car adapter with dual USB.",
      price: "₹499",
      oldPrice: "₹799",
      discount: "38%",
    },
  ],
  "Car Bluetooth": [
    {
      image: "https://via.placeholder.com/290x296?text=Car+Bluetooth",
      title: "Wireless Car Bluetooth",
      desc: "Hands-free Bluetooth receiver for car audio.",
      price: "₹699",
      oldPrice: "₹999",
      discount: "30%",
    },
  ],
  "Tyre Inflator": [
    {
      image: "https://via.placeholder.com/290x296?text=Tyre+Inflator",
      title: "Portable Tyre Inflator",
      desc: "Digital air pump for car and bike tyres.",
      price: "₹1,299",
      oldPrice: "₹1,899",
      discount: "32%",
    },
  ],
  "Car Mobile Holder": [
    {
      image: "https://via.placeholder.com/290x296?text=Mobile+Holder",
      title: "Dashboard Mobile Holder",
      desc: "Adjustable car mount for smartphones.",
      price: "₹349",
      oldPrice: "₹599",
      discount: "42%",
    },
  ],
  "Bike Mobile Holder": [
    {
      image: "https://via.placeholder.com/290x296?text=Bike+Holder",
      title: "Bike Mobile Mount",
      desc: "Sturdy phone holder for bike handlebar.",
      price: "₹399",
      oldPrice: "₹699",
      discount: "43%",
    },
  ],
  "Vacuum Cleaner": [
    {
      image: "https://via.placeholder.com/290x296?text=Vacuum+Cleaner",
      title: "Mini Car Vacuum Cleaner",
      desc: "Compact handheld vacuum for car interiors.",
      price: "₹1,099",
      oldPrice: "₹1,599",
      discount: "31%",
    },
  ],
  "Car Wireless Charger": [
    {
      image: "https://via.placeholder.com/290x296?text=Wireless+Charger",
      title: "Wireless Charging Mount",
      desc: "Qi-enabled wireless charger with holder.",
      price: "₹1,499",
      oldPrice: "₹2,199",
      discount: "32%",
    },
  ],
};

// Generate "All" category by combining products from all other categories
allProducts["All"] = Object.values(allProducts)
  .flat()
  .slice(0, 4 * (categories.length - 1));

// Generate "All" category by combining first 4 products from all other categories
allProducts["All"] = Object.values(allProducts)
  .flat()
  .slice(0, 4 * (categories.length - 1)); // Adjust this if needed

const CarAccessories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerPage(1);
      } else if (width < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
      setStartIndex(0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    const total = allProducts[selectedCategory]?.length || 0;
    if (startIndex + itemsPerPage < total) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  // const handleCategoryClick = (cat) => {
  //   setSelectedCategory(cat);
  //   setStartIndex(0);
  // };

  const products = allProducts[selectedCategory] || [];
  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div style={{ backgroundColor: "rgb(248,249,250)" }}>
      {/* <Container fluid className="py-3"> */}
      <div className="py-3">
        {/* Heading and View All */}
        <div className="container px-3 px-md-5 mb-3">
          <div className="row align-items-center">
            <div className="col-6">
              <h5
                className="mb-0 text-uppercase fw-bold"
                style={{ fontSize: "20px" }}
              >
                Car Accessories
              </h5>
            </div>
            <div className="col-6 text-end">
              <a
                href="#"
                className="text-uppercase fw-bold"
                style={{
                  fontSize: "12px",
                  color: "red",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
                onMouseLeave={(e) => (e.target.style.color = "red")}
              >
                View All
              </a>
            </div>
          </div>
        </div>

        <ResponsiveCategoryNav categories={categories} />

        <div
          className="d-md-none position-relative  px-3 w-100"
          style={{ height: "auto" }}
        >
          <div
            className="position-relative w-100 overflow-hidden"
            style={{ height: "auto" }}
          >
            {/* Prev Button - left side */}
            <Button
              onClick={handlePrev}
              disabled={startIndex === 0}
              size="sm"
              className="position-absolute"
              style={{
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                backgroundColor: "#fff",
                color: "#000",
                border: "1px solid #ccc",
              }}
            >
              ‹
            </Button>

            {/* Next Button - right side */}
            <Button
              onClick={handleNext}
              disabled={startIndex + itemsPerPage >= products.length}
              size="sm"
              className="position-absolute"
              style={{
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                backgroundColor: "#fff",
                color: "#000",
                border: "1px solid #ccc",
              }}
            >
              ›
            </Button>
            <div
              className="d-flex  justify-content-center"
              style={{ transition: "transform 0.3s ease" }}
            >
              {visibleProducts.map((product, idx) => (
                <div
                  key={idx}
                  className="border rounded me-3 flex-shrink-0 d-flex flex-column"
                  style={{ width: "80%", maxWidth: "100%" }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-100"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div className="p-2 bg-white">
                    <h6>{product.title}</h6>
                    <p className="text-muted" style={{ fontSize: "13px" }}>
                      {product.desc}
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="fw-bold text-dark">{product.price}</span>
                      <small className="text-muted text-decoration-line-through">
                        {product.oldPrice}
                      </small>
                      <span className="badge bg-danger text-white">
                        {product.discount}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Boxes */}
        <Container
          className="mt-4 d-none d-md-flex "
          style={{ maxWidth: "1400px", margin: "0 auto", paddingLeft: "105px" }}
        >
          <Row className="g-0" style={{ gap: "8px" }}>
            {allProducts[selectedCategory]?.slice(0, 4).map((product, idx) => {
              const numericPrice = parseInt(
                product.price.replace(/[₹,]/g, ""),
                10
              );
              const emiAmount = Math.ceil(numericPrice / 6);

              return (
                <Col key={idx} style={{ flex: "0 0 auto", width: "290px" }}>
                  <div
                    className="d-flex flex-column rounded"
                    style={{ border: "1px solid #ddd" }}
                  >
                    {/* Upper Div */}
                    <div
                      className="position-relative"
                      style={{
                        width: "290px",
                        height: "376px",
                        overflow: "hidden",
                        border: "1px solid #ddd", // Already exists
                        borderBottom: "none", // Avoid double border
                        borderRadius: "6px 6px 0 0",
                      }}
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    {/* Lower Div */}
                    <div
                      className="p-2 border"
                      style={{
                        width: "290px",
                        minHeight: "150px",
                        border: "1px solid #ddd", // Add this
                        borderTop: "none", // Avoid double border with upper div
                        borderRadius: "0 0 6px 6px",
                      }}
                    >
                      <h6 className="mb-1">{product.title}</h6>
                      <p
                        className="mb-2 text-muted"
                        style={{ fontSize: "13px" }}
                      >
                        {product.desc}
                      </p>

                      {/* Price row with new price + old price superscript */}
                      <div
                        className="d-flex align-items-center gap-2 mb-2"
                        style={{ fontSize: "14px" }}
                      >
                        <span className="fw-bold" style={{ color: "#000" }}>
                          {product.price}
                        </span>
                        <sup
                          className="text-muted text-decoration-line-through"
                          style={{ fontSize: "12px", verticalAlign: "super" }}
                        >
                          {product.oldPrice}
                        </sup>

                        {/* Discount box aligned right */}
                        <div
                          style={{
                            marginLeft: "120px",
                            border: "1px solid #ddd",
                            boxShadow: "0 0 0 2px red",
                            borderRadius: "50px",
                            padding: "6px 10px",
                            fontSize: "12px",
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                            height: "20px",
                            backgroundColor: "red",
                            color: "white",
                          }}
                        >
                          {product.discount}
                        </div>
                      </div>

                      {/* EMI Row with icon */}
                      <div
                        className="mb-2 d-flex align-items-center gap-2"
                        style={{ fontSize: "12px", color: "black" }}
                      >
                        <span>or Rs{emiAmount}/month</span>
                        <a
                          href="#buy-on-emi"
                          style={{
                            textDecoration: "none",
                            cursor: "pointer",
                            color: "#007bff",
                          }}
                          title={`Buy ${product.title} on 6-month EMI of ₹${emiAmount} per month`}
                          onClick={(e) => e.preventDefault()}
                        >
                          Buy on EMI
                        </a>
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1L9 8L1 15"
                            stroke="blue"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      {/* Add to Cart Button row */}
                      <div>
                        <Button
                          variant="dark"
                          className="w-100 text-uppercase border border-dark py-2"
                          style={{ height: "40px" }}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      {/* </Container> */}
    </div>
  );
};

export default CarAccessories;
