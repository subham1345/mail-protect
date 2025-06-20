import React, { useState } from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";

const categories = [
  "All",
  "Keyboard & Mouse Combo",
  "USB HUB",
  "Projectors",
  "Wireless Mouse",
  "Wireless Keyboard",
  "Wired Keyboard",
  "Wired Mouse",
  "Gaming Keyboard",
  "Laptop Stand",
  "Laptop Table",
  "Laptop Bags",
  "Extension Board",
  "LCD Writing Pads",
  "PC Cables",
  "Wireless Presenter",
];

// Replace this object with your own products for each category
const allProducts = {
  "Keyboard & Mouse Combo": [
    {
      image: "https://via.placeholder.com/290x296?text=Combo+1",
      title: "Combo Product 1",
      desc: "Description of Combo Product 1",
      price: "₹1999",
      oldPrice: "₹2999",
      discount: "33%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Combo+2",
      title: "Combo Product 2",
      desc: "Description of Combo Product 2",
      price: "₹1499",
      oldPrice: "₹2499",
      discount: "40%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Combo+3",
      title: "Combo Product 3",
      desc: "Description of Combo Product 3",
      price: "₹1799",
      oldPrice: "₹2799",
      discount: "36%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Combo+4",
      title: "Combo Product 4",
      desc: "Description of Combo Product 4",
      price: "₹1299",
      oldPrice: "₹1999",
      discount: "35%",
    },
  ],

  "USB HUB": [
    {
      image: "https://via.placeholder.com/290x296?text=USB+Hub+1",
      title: "USB Hub 1",
      desc: "High-speed USB Hub",
      price: "₹899",
      oldPrice: "₹1299",
      discount: "30%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=USB+Hub+2",
      title: "USB Hub 2",
      desc: "Compact USB Hub",
      price: "₹699",
      oldPrice: "₹999",
      discount: "30%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=USB+Hub+3",
      title: "USB Hub 3",
      desc: "USB Hub with Ethernet",
      price: "₹1299",
      oldPrice: "₹1799",
      discount: "28%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=USB+Hub+4",
      title: "USB Hub 4",
      desc: "Multi-port USB Hub",
      price: "₹999",
      oldPrice: "₹1399",
      discount: "29%",
    },
  ],

  // Add your other categories similarly with up to 4 products each

};

// Generate "All" category by combining first 4 products from all other categories
allProducts["All"] = Object.values(allProducts)
  .flat()
  .slice(0, 4 * (categories.length - 1)); // Adjust this if needed

const ComputerAccessories = () => {
  const visibleCount = 8;
  const [startIndex, setStartIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const visibleCategories = categories.slice(startIndex, startIndex + visibleCount);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, categories.length - visibleCount)
    );
  };

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
  };

  return (
      <div style={{ backgroundColor: "rgb(248,249,250)" }}>

    <Container fluid className="py-3">
      {/* Heading and View All */}
      <div
        className="d-flex justify-content-between align-items-center mb-2"
        style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 12px" }}
      >
        <h5
          className="mb-0 text-uppercase font-weight-bold"
          style={{ fontSize: "28px", marginLeft: "39px" }}
        >
          Computer Accessories
        </h5>

        <a
          href="#"
          style={{
            fontSize: "14px",
            color: "red",
            textDecoration: "none",
            fontWeight: "bold",
            textTransform: "uppercase",
            marginRight: "49px",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.color = "red")}
        >
          View All
        </a>
      </div>

      {/* Categories Navigation */}
      <div
        className="mx-auto d-flex align-items-center position-relative"
        style={{
          width: "1400px",
          background: "rgb(248,249,250)",
          borderRadius: "6px",
          padding: "10px 0",
        }}
      >
        <Button
          variant="light"
          onClick={handlePrev}
          disabled={startIndex === 0}
          style={{
            position: "absolute",
            left: 90,
            height: "30px",
            width: "30px",
            borderRadius: "50%",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="6" height="16" viewBox="0 0 6 16">
            <path
              d="M5 1L1 8L5 15"
              stroke="black"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>

        <Button
          variant="light"
          onClick={handleNext}
          disabled={startIndex >= categories.length - visibleCount}
          style={{
            position: "absolute",
            right: 102,
            height: "30px",
            width: "30px",
            borderRadius: "50%",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="6" height="16" viewBox="0 0 6 16">
            <path
              d="M1 1L5 8L1 15"
              stroke="black"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>

        <div
          className="d-flex justify-content-between w-100"
          style={{ margin: "0 140px" }}
        >
          {visibleCategories.map((cat, idx) => (
            <Nav.Link
              key={startIndex + idx}
              href="#"
              onClick={() => handleCategoryClick(cat)}
              style={{
                flex: "1 0 auto",
                padding: "0.15rem 6px",
                whiteSpace: "normal",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontSize: "14px",
                fontWeight: 500,
                color: selectedCategory === cat ? "#000" : "#777",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== cat) e.target.style.color = "#000";
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== cat) e.target.style.color = "#777";
              }}
            >
              {cat}
            </Nav.Link>
          ))}
        </div>
      </div>

      {/* Product Boxes */}
      <div
        className="mt-4"
        style={{ maxWidth: "1400px", margin: "0 auto", paddingLeft: "105px" }}
      >
        <Row className="g-0" style={{ gap: "8px" }}>
          {allProducts[selectedCategory]?.slice(0, 4).map((product, idx) => {
            const numericPrice = parseInt(product.price.replace(/[₹,]/g, ""), 10);
            const numericOldPrice = parseInt(product.oldPrice.replace(/[₹,]/g, ""), 10);
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
                    <p className="mb-2 text-muted" style={{ fontSize: "13px" }}>
                      {product.desc}
                    </p>

                    {/* Price row with new price + old price superscript */}
                    <div className="d-flex align-items-center gap-2 mb-2" style={{ fontSize: "14px" }}>
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
                    <div className="mb-2 d-flex align-items-center gap-2" style={{ fontSize: "12px", color: "black" }}>
                      <span>
                           or Rs{emiAmount}/month
                      </span>
                      <a
                        href="#buy-on-emi"
                        style={{ textDecoration: "none", cursor: "pointer", color: "#007bff" }}
                        title={`Buy ${product.title} on 6-month EMI of ₹${emiAmount} per month`}
                        onClick={(e) => e.preventDefault()}
                      >
                        Buy on EMI
                      </a>
                      <svg width="10" height="8" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L9 8L1 15" stroke="blue" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
      </div>
    </Container>
      </div>
  );
};

export default ComputerAccessories;
