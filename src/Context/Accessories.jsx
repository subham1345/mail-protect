// import React, { useState } from "react";
// import { Container, Row, Col, Nav, Button } from "react-bootstrap";

// const categories = [
//   "All",
//   "Soundbars",
//   "Party Speakers",
//   "Portable Speakers",
//   "Wireless Earbuds",
//   "Neckbands",
//   "Wireless Headphones",
//   "Wired Earphones",
//   "USB Speakers",
//   "Conference Speakers",
//   "Wireless Microphones",
// ];

// // Replace this object with your own products for each category
// const allProducts = {
//   Soundbars: [
//     {
//       image: "https://via.placeholder.com/290x296?text=Combo+1",
//       title: "Combo Product 1",
//       desc: "Description of Combo Product 1",
//       price: "₹1,999",
//       oldPrice: "₹2,999",
//       discount: "33%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Combo+2",
//       title: "Combo Product 2",
//       desc: "Description of Combo Product 2",
//       price: "₹1499",
//       oldPrice: "₹2499",
//       discount: "40%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Combo+3",
//       title: "Combo Product 3",
//       desc: "Description of Combo Product 3",
//       price: "₹1799",
//       oldPrice: "₹2799",
//       discount: "36%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Combo+4",
//       title: "Combo Product 4",
//       desc: "Description of Combo Product 4",
//       price: "₹1299",
//       oldPrice: "₹1999",
//       discount: "35%",
//     },
//   ],

//   "Party Speakers": [
//     {
//       image: "https://via.placeholder.com/290x296?text=USB+Hub+1",
//       title: "USB Hub 1",
//       desc: "High-speed USB Hub",
//       price: "₹899",
//       oldPrice: "₹1299",
//       discount: "30%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=USB+Hub+2",
//       title: "USB Hub 2",
//       desc: "Compact USB Hub",
//       price: "₹699",
//       oldPrice: "₹999",
//       discount: "30%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=USB+Hub+3",
//       title: "USB Hub 3",
//       desc: "USB Hub with Ethernet",
//       price: "₹1299",
//       oldPrice: "₹1799",
//       discount: "28%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=USB+Hub+4",
//       title: "USB Hub 4",
//       desc: "Multi-port USB Hub",
//       price: "₹999",
//       oldPrice: "₹1399",
//       discount: "29%",
//     },
//   ],

//   // Add your other categories similarly with up to 4 products each
// };

// // Generate "All" category by combining first 4 products from all other categories
// allProducts["All"] = Object.values(allProducts)
//   .flat()
//   .slice(0, 4 * (categories.length - 1)); // Adjust this if needed

// const Audio = () => {
//   const visibleCount = 8;
//   const [startIndex, setStartIndex] = useState(0);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const visibleCategories = categories.slice(
//     startIndex,
//     startIndex + visibleCount
//   );

//   const handlePrev = () => {
//     setStartIndex((prev) => Math.max(prev - 1, 0));
//   };

//   const handleNext = () => {
//     setStartIndex((prev) =>
//       Math.min(prev + 1, categories.length - visibleCount)
//     );
//   };

//   const handleCategoryClick = (cat) => {
//     setSelectedCategory(cat);
//   };

//   return (
//     <div style={{ backgroundColor: "rgb(248,249,250)", marginTop: "40px" }}>
//       <Container fluid className="py-3">
//         {/* Heading and View All */}
//         <div className="container px-3 px-sm-4 px-md-5 mb-3">
//           <div className="row align-items-center">
//             <div className="col-6 col-sm-6">
//               <h5
//                 className="mb-0 text-uppercase fw-bold"
//                 style={{ fontSize: "20px" }}
//               >
//                 Audio
//               </h5>
//             </div>
//             <div className="col-6 col-sm-6 text-end">
//               <a
//                 href="#"
//                 className="text-uppercase fw-bold"
//                 style={{
//                   fontSize: "12px",
//                   color: "red",
//                   textDecoration: "none",
//                 }}
//                 onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
//                 onMouseLeave={(e) => (e.target.style.color = "red")}
//               >
//                 View All
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Categories Navigation */}
//         {/* <div
//           className="mx-auto d-flex align-items-center position-relative"
//           style={{
//             width: "1400px",
//             background: "rgb(248,249,250)",
//             borderRadius: "6px",
//             padding: "10px 0",
//           }}
//         >
//           <Button
//             variant="light"
//             onClick={handlePrev}
//             disabled={startIndex === 0}
//             style={{
//               position: "absolute",
//               left: 90,
//               height: "30px",
//               width: "30px",
//               borderRadius: "50%",
//               padding: 0,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <svg width="6" height="16" viewBox="0 0 6 16">
//               <path
//                 d="M5 1L1 8L5 15"
//                 stroke="black"
//                 strokeWidth="2"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </Button>

//           <Button
//             variant="light"
//             onClick={handleNext}
//             disabled={startIndex >= categories.length - visibleCount}
//             style={{
//               position: "absolute",
//               right: 102,
//               height: "30px",
//               width: "30px",
//               borderRadius: "50%",
//               padding: 0,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <svg width="6" height="16" viewBox="0 0 6 16">
//               <path
//                 d="M1 1L5 8L1 15"
//                 stroke="black"
//                 strokeWidth="2"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </Button>

//           <div
//             className="d-flex justify-content-between w-100"
//             style={{ margin: "0 140px" }}
//           >
//             {visibleCategories.map((cat, idx) => (
//               <Nav.Link
//                 key={startIndex + idx}
//                 href="#"
//                 onClick={() => handleCategoryClick(cat)}
//                 style={{
//                   flex: "1 0 auto",
//                   padding: "0.15rem 6px",
//                   whiteSpace: "nowrap",
//                   overflow: "hidden",
//                   textOverflow: "ellipsis",
//                   fontSize: "14px",
//                   fontWeight: 500,
//                   color: selectedCategory === cat ? "#000" : "#777",
//                   textDecoration: "none",
//                 }}
//                 onMouseEnter={(e) => {
//                   if (selectedCategory !== cat) e.target.style.color = "#000";
//                 }}
//                 onMouseLeave={(e) => {
//                   if (selectedCategory !== cat) e.target.style.color = "#777";
//                 }}
//               >
//                 {cat}
//               </Nav.Link>
//             ))}
//           </div>
//         </div> */}

//         {/* Product Boxes */}
//         <div className="mt-4 container-fluid px-3 bg-primary">
//           {/* For small screens: horizontal scroll */}
//           <div className="d-flex d-md-none overflow-auto gap-3">
//             {allProducts[selectedCategory]?.map((product, idx) => {
//               const numericPrice = parseInt(
//                 product.price.replace(/[₹,]/g, ""),
//                 10
//               );
//               const emiAmount = Math.ceil(numericPrice / 6);

//               return (
//                 <div
//                   key={idx}
//                   className="flex-shrink-0"
//                   style={{
//                     width: "290px",
//                     border: "1px solid #ddd",
//                     borderRadius: "6px",
//                   }}
//                 >
//                   {/* Image */}
//                   <div
//                     style={{
//                       height: "376px",
//                       overflow: "hidden",
//                       borderBottom: "none",
//                       borderRadius: "6px 6px 0 0",
//                     }}
//                   >
//                     <img
//                       src={product.image}
//                       alt={product.title}
//                       className="w-100 h-100"
//                       style={{ objectFit: "cover" }}
//                     />
//                   </div>

//                   {/* Details */}
//                   <div
//                     className="p-2 border"
//                     style={{
//                       minHeight: "150px",
//                       borderTop: "none",
//                       borderRadius: "0 0 6px 6px",
//                     }}
//                   >
//                     <h6 className="mb-1">{product.title}</h6>
//                     <p className="mb-2 text-muted" style={{ fontSize: "13px" }}>
//                       {product.desc}
//                     </p>

//                     {/* Price Row */}
//                     <div
//                       className="d-flex align-items-center gap-2 mb-2"
//                       style={{ fontSize: "14px" }}
//                     >
//                       <span className="fw-bold text-dark">{product.price}</span>
//                       <sup
//                         className="text-muted text-decoration-line-through"
//                         style={{ fontSize: "12px", verticalAlign: "super" }}
//                       >
//                         {product.oldPrice}
//                       </sup>
//                       <div
//                         style={{
//                           marginLeft: "auto",
//                           boxShadow: "0 0 0 2px red",
//                           borderRadius: "50px",
//                           padding: "6px 10px",
//                           fontSize: "12px",
//                           fontWeight: "bold",
//                           backgroundColor: "red",
//                           color: "white",
//                         }}
//                       >
//                         {product.discount}
//                       </div>
//                     </div>

//                     {/* EMI Row */}
//                     <div
//                       className="mb-2 d-flex align-items-center gap-2"
//                       style={{ fontSize: "12px", color: "black" }}
//                     >
//                       <span>or Rs. {emiAmount}/month</span>
//                       <a
//                         href="#buy-on-emi"
//                         style={{
//                           textDecoration: "none",
//                           cursor: "pointer",
//                           color: "#007bff",
//                         }}
//                         onClick={(e) => e.preventDefault()}
//                       >
//                         Buy on EMI
//                       </a>
//                       <svg
//                         width="10"
//                         height="8"
//                         viewBox="0 0 10 16"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M1 1L9 8L1 15"
//                           stroke="blue"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>

//                     <Button
//                       variant="dark"
//                       className="w-100 text-uppercase border border-dark py-2"
//                       style={{ height: "40px" }}
//                     >
//                       Add to Cart
//                     </Button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* For md+ screens: grid layout */}
//           <Row
//             className="d-none d-md-flex g-0 justify-content-start"
//             style={{ gap: "8px" }}
//           >
//             {allProducts[selectedCategory]?.slice(0, 4).map((product, idx) => {
//               const numericPrice = parseInt(
//                 product.price.replace(/[₹,]/g, ""),
//                 10
//               );
//               const emiAmount = Math.ceil(numericPrice / 6);

//               return (
//                 <Col key={idx} style={{ flex: "0 0 auto", width: "290px" }}>
//                   <div
//                     className="d-flex flex-column rounded"
//                     style={{ border: "1px solid #ddd" }}
//                   >
//                     {/* Upper Div */}
//                     <div
//                       className="position-relative"
//                       style={{
//                         width: "290px",
//                         height: "376px",
//                         overflow: "hidden",
//                         borderBottom: "none",
//                         borderRadius: "6px 6px 0 0",
//                       }}
//                     >
//                       <img
//                         src={product.image}
//                         alt={product.title}
//                         className="w-100 h-100"
//                         style={{ objectFit: "cover" }}
//                       />
//                     </div>

//                     {/* Lower Div */}
//                     <div
//                       className="p-2 border"
//                       style={{
//                         width: "290px",
//                         minHeight: "150px",
//                         borderTop: "none",
//                         borderRadius: "0 0 6px 6px",
//                       }}
//                     >
//                       <h6 className="mb-1">{product.title}</h6>
//                       <p
//                         className="mb-2 text-muted"
//                         style={{ fontSize: "13px" }}
//                       >
//                         {product.desc}
//                       </p>

//                       {/* Price Row */}
//                       <div
//                         className="d-flex align-items-center gap-2 mb-2"
//                         style={{ fontSize: "14px" }}
//                       >
//                         <span className="fw-bold" style={{ color: "#000" }}>
//                           {product.price}
//                         </span>
//                         <sup
//                           className="text-muted text-decoration-line-through"
//                           style={{ fontSize: "12px", verticalAlign: "super" }}
//                         >
//                           {product.oldPrice}
//                         </sup>
//                         <div
//                           style={{
//                             marginLeft: "auto",
//                             boxShadow: "0 0 0 2px red",
//                             borderRadius: "50px",
//                             padding: "6px 10px",
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             backgroundColor: "red",
//                             color: "white",
//                           }}
//                         >
//                           {product.discount}
//                         </div>
//                       </div>

//                       {/* EMI */}
//                       <div
//                         className="mb-2 d-flex align-items-center gap-2"
//                         style={{ fontSize: "12px", color: "black" }}
//                       >
//                         <span>or Rs. {emiAmount}/month</span>
//                         <a
//                           href="#buy-on-emi"
//                           style={{
//                             textDecoration: "none",
//                             cursor: "pointer",
//                             color: "#007bff",
//                           }}
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           Buy on EMI
//                         </a>
//                         <svg
//                           width="10"
//                           height="8"
//                           viewBox="0 0 10 16"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M1 1L9 8L1 15"
//                             stroke="blue"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       </div>

//                       <Button
//                         variant="dark"
//                         className="w-100 text-uppercase border border-dark py-2"
//                         style={{ height: "40px" }}
//                       >
//                         Add to Cart
//                       </Button>
//                     </div>
//                   </div>
//                 </Col>
//               );
//             })}
//           </Row>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Audio;

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import ResponsiveCategoryNav from "../Components/ResponsiveCategoryNav";

const categories = [
  "All",
  "Soundbars",
  "Party Speakers",
  "Portable Speakers",
  "Wireless Earbuds",
  "Neckbands",
  "Wireless Headphones",
  "Wired Earphones",
  "Conference Speakers",
  "USB Speakers",
  "Wireless Microphones",
];

const allProducts = {
  Soundbars: [
    {
      image: "https://via.placeholder.com/290x296?text=Combo+1",
      title: "Combo Product 1",
      desc: "Description of Combo Product 1",
      price: "₹1,999",
      oldPrice: "₹2,999",
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

  "Party Speakers": [
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

// allProducts["All"] = Object.values(allProducts).flat();
// Generate "All" category by combining first 4 products from all other categories
allProducts["All"] = Object.values(allProducts)
  .flat()
  .slice(0, 4 * (categories.length - 1)); // Adjust this if needed

const Audio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
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

  // const visibleCount = 8;
  //   const [startIndex, setStartIndex] = useState(0);
  //   const [selectedCategory, setSelectedCategory] = useState("All");

  // const visibleCategories = categories.slice(
  //   startIndex,
  //   startIndex + visibleCount
  // );

  //   const handlePrevNav = () => {
  //     setStartIndex((prev) => Math.max(prev - 1, 0));
  //   };

  //   const handleNextNav = () => {
  //     setStartIndex((prev) =>
  //       Math.min(prev + 1, categories.length - visibleCount)
  //     );
  //   };

  //   const handleCategoryClick = (cat) => {
  //     setSelectedCategory(cat);
  //   };

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#f8f9fa", marginTop: "40px" }}
    >
      {/* <Container fluid className="py-3"> */}
      <div className="py-3">
        <div className="container px-3 px-md-5 mb-3">
          <div className="row align-items-center">
            <div className="col-6">
              <h5
                className="mb-0 text-uppercase fw-bold"
                style={{ fontSize: "20px" }}
              >
                Audio
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

        {/* Categories Navigation */}
        {/* <div
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
            onClick={handlePrevNav}
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
            onClick={handleNextNav}
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
                  whiteSpace: "nowrap",
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
        </div> */}
        <ResponsiveCategoryNav categories={categories} />

        {/* Carousel for small screens */}
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

        {/* Grid for md+ screens */}
        <Container className="d-none d-md-flex px-3 ">
          <Row className="w-100   g-3 align-items-stretch">
            {products.slice(0, 4).map((product, idx) => (
              <Col key={idx} md={3} className="d-flex flex-column ">
                <div className="border rounded h-100 d-flex flex-column">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-100"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div className="p-2 d-flex flex-column justify-content-between flex-grow-1">
                    <div>
                      <h6>{product.title}</h6>
                      <p className="text-muted" style={{ fontSize: "13px" }}>
                        {product.desc}
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-auto">
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
              </Col>
            ))}
          </Row>
        </Container>

        {/* </Container> */}
      </div>
    </div>
  );
};

export default Audio;
