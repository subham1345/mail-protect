// import React, { useState } from "react";
// import { Container, Row, Col, Nav, Button } from "react-bootstrap";
// import ResponsiveCategoryNav from "../Components/ResponsiveCategoryNav";

// const categories = [
//   "All",
//   "Powerbanks",
//   "Wireless Chargers",
//   "Mobile Holder",
//   "Chargers",
//   "Gadget Cleaner",
//   "Cables",
//   "Phone Wallets",
// ];

// // Replace this object with your own products for each category
// const allProducts = {

//   "Powerbanks": [
//     {
//       image: "https://via.placeholder.com/290x296?text=Powerbank",
//       title: "10,000mAh Powerbank",
//       desc: "Compact powerbank with fast charging support.",
//       price: "₹999",
//       oldPrice: "₹1,499",
//       discount: "33%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Powerbank",
//       title: "20,000mAh Powerbank",
//       desc: "High-capacity powerbank with dual USB output.",
//       price: "₹1,499",
//       oldPrice: "₹2,199",
//       discount: "32%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Powerbank",
//       title: "10,000mAh Solar Powerbank",
//       desc: "Eco-friendly solar powerbank with LED flashlight.",
//       price: "₹1,199",
//       oldPrice: "₹1,799",
//       discount: "33%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Powerbank",
//       title: "15,000mAh Powerbank",
//       desc: "Slim design with quick charge support.",
//       price: "₹1,299",
//       oldPrice: "₹1,899",
//       discount: "32%",
//     },
//   ],
//   "Wireless Chargers": [
//     {
//       image: "https://via.placeholder.com/290x296?text=Wireless+Charger",
//       title: "Qi Wireless Charger",
//       desc: "Fast wireless charging pad compatible with all Qi devices.",
//       price: "₹899",
//       oldPrice: "₹1,299",
//       discount: "31%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Wireless+Charger",
//       title: "10W Fast Wireless Charger",
//       desc: "High-speed wireless charger with anti-slip design.",
//       price: "₹1,199",
//       oldPrice: "₹1,799",
//       discount: "33%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Wireless+Charger",
//       title: "15W Wireless Charger Stand",
//       desc: "Adjustable stand for easy viewing while charging.",
//       price: "₹1,499",
//       oldPrice: "₹2,199",
//       discount: "32%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Wireless+Charger",
//       title: "Wireless Charging Pad",
//       desc: "Slim design with LED charging status indicator.",
//       price: "₹799",
//       oldPrice: "₹1,199",
//       discount: "33%",
//     },
//   ],
//   "Mobile Holder": [
//     {
//       image: "https://via.placeholder.com/290x296?text=Mobile+Holder",
//       title: "Universal Mobile Holder",
//       desc: "360° rotation dashboard and windshield mount.",
//       price: "₹349",
//       oldPrice: "₹599",
//       discount: "42%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Mobile+Holder",
//       title: "Car Vent Mobile Holder",
//       desc: "Clip-on holder for car air vents, adjustable grip.",
//       price: "₹299",
//       oldPrice: "₹499",
//       discount: "40%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Mobile+Holder",
//       title: "Desktop Phone Stand",
//       desc: "Adjustable stand for desk use, compatible with all phones.",
//       price: "₹399",
//       oldPrice: "₹699",
//       discount: "43%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Mobile+Holder",
//       title: "Magnetic Car Mount",
//       desc: "Strong magnetic holder for easy phone access in cars.",
//       price: "₹249",
//       oldPrice: "₹399",
//       discount: "38%",
//     },
//   ],
//   "Chargers": [
//     {
//       image: "https://via.placeholder.com/290x296?text=Charger",
//       title: "18W Fast Charger",
//       desc: "Dual USB wall charger with smart IC tech.",
//       price: "₹499",
//       oldPrice: "₹799",
//       discount: "38%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Charger",
//       title: "20W Fast Charger",
//       desc: "High-speed charger with USB-C Power Delivery.",
//       price: "₹699",
//       oldPrice: "₹999",
//       discount: "30%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Charger",
//       title: "30W GaN Charger",
//       desc: "Compact and efficient charger with foldable plug.",
//       price: "₹899",
//       oldPrice: "₹1,299",
//       discount: "31%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Charger",
//       title: "Multi-Port USB Charger",
//       desc: "4-port USB charger for multiple devices.",
//       price: "₹1,199",
//       oldPrice: "₹1,799",
//       discount: "33%",
//     },
//   ],
//   "Gadget Cleaner": [
//     {
//       image: "https://via.placeholder.com/290x296?text=Gadget+Cleaner",
//       title: "3-in-1 Gadget Cleaner",
//       desc: "Spray, brush, and wipe combo for phones and screens.",
//       price: "₹299",
//       oldPrice: "₹499",
//       discount: "40%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Gadget+Cleaner",
//       title: "Screen Cleaning Wipes",
//       desc: "Convenient wipes for cleaning screens and surfaces.",
//       price: "₹199",
//       oldPrice: "₹299",
//       discount: "33%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Gadget+Cleaner",
//       title: "Microfiber Cleaning Cloth",
//       desc: "Soft cloth for scratch-free cleaning of gadgets.",
//       price: "₹149",
//       oldPrice: "₹249",
//       discount: "40%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Gadget+Cleaner",
//       title: "Compressed Air Duster",
//       desc: "Blow away dust and debris from gadgets.",
//       price: "₹399",
//       oldPrice: "₹599",
//       discount: "33%",
//     },
//   ],
//   "Cables": [
//     {
//       image: "https://via.placeholder.com/290x296?text=Cable",
//       title: "Nylon Braided Cable",
//       desc: "Durable USB-A to Type-C cable, 1.5m length.",
//       price: "₹199",
//       oldPrice: "₹349",
//       discount: "43%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Cable",
//       title: "Fast Charging Cable",
//       desc: "USB-A to Type-C cable, 1.5m length.",
//       price: "₹299",
//       oldPrice: "₹499",
//       discount: "40%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Cable",
//       title: "Lightning Cable",
//       desc: "Apple-certified lightning cable, 1m length.",
//       price: "₹399",
//       oldPrice: "₹599",
//       discount: "33%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Cable",
//       title: "Multi-Device Charging Cable",
//       desc: "3-in-1 cable with USB-A, Type-C, and Lightning connectors.",
//       price: "₹499",
//       oldPrice: "₹799",
//       discount: "38%",
//     },
//   ],
//   "Phone Wallets": [
//     {
//       image: "https://via.placeholder.com/290x296?text=Phone+Wallet",
//       title: "Magnetic Phone Wallet",
//       desc: "Cardholder with magnetic attach for phones.",
//       price: "₹699",
//       oldPrice: "₹999",
//       discount: "30%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Phone+Wallet",
//       title: "Leather Phone Wallet",
//       desc: "Premium leather wallet case for phones.",
//       price: "₹1,199",
//       oldPrice: "₹1,799",
//       discount: "33%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Phone+Wallet",
//       title: "Silicone Phone Wallet",
//       desc: "Flexible silicone wallet for cards and cash.",
//       price: "₹399",
//       oldPrice: "₹599",
//       discount: "33%",
//     },
//     {
//       image: "https://via.placeholder.com/290x296?text=Phone+Wallet",
//       title: "RFID Blocking Phone Wallet",
//       desc: "Protects cards from RFID skimming.",
//       price: "₹899",
//       oldPrice: "₹1,299",
//       discount: "31%",
//     },
//   ],
// };

// // Generate "All" category by combining first 4 products from all other categories
// allProducts["All"] = Object.values(allProducts)
//   .flat()
//   .slice(0, 4 * (categories.length - 1)); // Adjust this if needed

// const MobileAccessories = () => {
//   const visibleCount = 8;
//   const [startIndex, setStartIndex] = useState(0);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const visibleCategories = categories.slice(startIndex, startIndex + visibleCount);

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
//       <div style={{ backgroundColor: "rgb(248,249,250)", marginBottom: "90px" }}>

//     <Container fluid className="py-3">
//       {/* Heading and View All */}
//       <div
//         className="d-flex justify-content-between align-items-center mb-2"
//         style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 12px" }}
//       >
//         <h5
//           className="mb-0 text-uppercase font-weight-bold"
//           style={{ fontSize: "28px", marginLeft: "39px" }}
//         >
//           Mobile Accessories
//         </h5>

//         <a
//           href="#"
//           style={{
//             fontSize: "14px",
//             color: "red",
//             textDecoration: "none",
//             fontWeight: "bold",
//             textTransform: "uppercase",
//             marginRight: "49px",
//           }}
//           onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
//           onMouseLeave={(e) => (e.target.style.color = "red")}
//         >
//           View All
//         </a>
//       </div>

//       {/* Categories Navigation */}
//       <div
//         className="mx-auto d-flex align-items-center position-relative"
//         style={{
//           width: "1400px",
//           background: "rgb(248,249,250)",
//           borderRadius: "6px",
//           padding: "10px 0",
//         }}
//       >
//         <Button
//           variant="light"
//           onClick={handlePrev}
//           disabled={startIndex === 0}
//           style={{
//             position: "absolute",
//             left: 90,
//             height: "30px",
//             width: "30px",
//             borderRadius: "50%",
//             padding: 0,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <svg width="6" height="16" viewBox="0 0 6 16">
//             <path
//               d="M5 1L1 8L5 15"
//               stroke="black"
//               strokeWidth="2"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </Button>

//         <Button
//           variant="light"
//           onClick={handleNext}
//           disabled={startIndex >= categories.length - visibleCount}
//           style={{
//             position: "absolute",
//             right: 102,
//             height: "30px",
//             width: "30px",
//             borderRadius: "50%",
//             padding: 0,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <svg width="6" height="16" viewBox="0 0 6 16">
//             <path
//               d="M1 1L5 8L1 15"
//               stroke="black"
//               strokeWidth="2"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </Button>

//         <div
//           className="d-flex justify-content-between w-100"
//           style={{ margin: "0 140px" }}
//         >
//           {visibleCategories.map((cat, idx) => (
//             <Nav.Link
//               key={startIndex + idx}
//               href="#"
//               onClick={() => handleCategoryClick(cat)}
//               style={{
//                 flex: "1 0 auto",
//                 padding: "0.15rem 6px",
//                 whiteSpace: "nowrap",
//                 overflow: "hidden",
//                 textOverflow: "ellipsis",
//                 fontSize: "14px",
//                 fontWeight: 500,
//                 color: selectedCategory === cat ? "#000" : "#777",
//                 textDecoration: "none",
//               }}
//               onMouseEnter={(e) => {
//                 if (selectedCategory !== cat) e.target.style.color = "#000";
//               }}
//               onMouseLeave={(e) => {
//                 if (selectedCategory !== cat) e.target.style.color = "#777";
//               }}
//             >
//               {cat}
//             </Nav.Link>
//           ))}
//         </div>
//       </div>

//       {/* Product Boxes */}
//       <div
//         className="mt-4"
//         style={{ maxWidth: "1400px", margin: "0 auto", paddingLeft: "105px" }}
//       >
//         <Row className="g-0" style={{ gap: "8px" }}>
//           {allProducts[selectedCategory]?.slice(0, 4).map((product, idx) => {
//             const numericPrice = parseInt(product.price.replace(/[₹,]/g, ""), 10);
//             const numericOldPrice = parseInt(product.oldPrice.replace(/[₹,]/g, ""), 10);
//             const emiAmount = Math.ceil(numericPrice / 6);

//             return (
//               <Col key={idx} style={{ flex: "0 0 auto", width: "290px" }}>
//                 <div
//                   className="d-flex flex-column rounded"
//                   style={{ border: "1px solid #ddd" }}
//                 >

//                   {/* Upper Div */}
//                   <div
//                     className="position-relative"
//                       style={{
//                       width: "290px",
//                       height: "376px",
//                       overflow: "hidden",
//                       border: "1px solid #ddd", // Already exists
//                       borderBottom: "none", // Avoid double border
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

//                   {/* Lower Div */}
//                   <div
//                     className="p-2 border"
//                     style={{
//                       width: "290px",
//                       minHeight: "150px",
//                       border: "1px solid #ddd", // Add this
//                       borderTop: "none", // Avoid double border with upper div
//                       borderRadius: "0 0 6px 6px",
//                     }}
//                   >
//                     <h6 className="mb-1">{product.title}</h6>
//                     <p className="mb-2 text-muted" style={{ fontSize: "13px" }}>
//                       {product.desc}
//                     </p>

//                     {/* Price row with new price + old price superscript */}
//                     <div className="d-flex align-items-center gap-2 mb-2" style={{ fontSize: "14px" }}>
//                       <span className="fw-bold" style={{ color: "#000" }}>
//                         {product.price}
//                       </span>
//                       <sup
//                         className="text-muted text-decoration-line-through"
//                         style={{ fontSize: "12px", verticalAlign: "super" }}
//                       >
//                         {product.oldPrice}
//                       </sup>

//                       {/* Discount box aligned right */}
//                       <div
//                         style={{
//                           marginLeft: "120px",
//                           border: "1px solid #ddd",
//                           boxShadow: "0 0 0 2px red",
//                           borderRadius: "50px",
//                           padding: "6px 10px",
//                           fontSize: "12px",
//                           fontWeight: "bold",
//                           display: "flex",
//                           alignItems: "center",
//                           height: "20px",
//                           backgroundColor: "red",
//                           color: "white",
//                         }}
//                       >
//                           {product.discount}
//                       </div>
//                     </div>

//                     {/* EMI Row with icon */}
//                     <div className="mb-2 d-flex align-items-center gap-2" style={{ fontSize: "12px", color: "black" }}>
//                       <span>
//                            or Rs{emiAmount}/month
//                       </span>
//                       <a
//                         href="#buy-on-emi"
//                         style={{ textDecoration: "none", cursor: "pointer", color: "#007bff" }}
//                         title={`Buy ${product.title} on 6-month EMI of ₹${emiAmount} per month`}
//                         onClick={(e) => e.preventDefault()}
//                       >
//                         Buy on EMI
//                       </a>
//                       <svg width="10" height="8" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1L9 8L1 15" stroke="blue" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                           </svg>
//                     </div>

//                     {/* Add to Cart Button row */}
//                     <div>
//                       <Button
//                           variant="dark"
//                           className="w-100 text-uppercase border border-dark py-2"
//                           style={{ height: "40px" }}
//                         >
//                           Add to Cart
//                         </Button>
//                     </div>
//                   </div>
//                 </div>
//               </Col>
//             );
//           })}
//         </Row>
//       </div>
//     </Container>
//       </div>
//   );
// };

// export default MobileAccessories;
import React, { useState,useEffect } from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import ResponsiveCategoryNav from "../Components/ResponsiveCategoryNav";

const categories = [
  "All",
  "Powerbanks",
  "Wireless Chargers",
  "Mobile Holder",
  "Chargers",
  "Gadget Cleaner",
  "Cables",
  "Phone Wallets",
];

// Replace this object with your own products for each category
const allProducts = {
  Powerbanks: [
    {
      image: "https://via.placeholder.com/290x296?text=Powerbank",
      title: "10,000mAh Powerbank",
      desc: "Compact powerbank with fast charging support.",
      price: "₹999",
      oldPrice: "₹1,499",
      discount: "33%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Powerbank",
      title: "20,000mAh Powerbank",
      desc: "High-capacity powerbank with dual USB output.",
      price: "₹1,499",
      oldPrice: "₹2,199",
      discount: "32%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Powerbank",
      title: "10,000mAh Solar Powerbank",
      desc: "Eco-friendly solar powerbank with LED flashlight.",
      price: "₹1,199",
      oldPrice: "₹1,799",
      discount: "33%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Powerbank",
      title: "15,000mAh Powerbank",
      desc: "Slim design with quick charge support.",
      price: "₹1,299",
      oldPrice: "₹1,899",
      discount: "32%",
    },
  ],
  "Wireless Chargers": [
    {
      image: "https://via.placeholder.com/290x296?text=Wireless+Charger",
      title: "Qi Wireless Charger",
      desc: "Fast wireless charging pad compatible with all Qi devices.",
      price: "₹899",
      oldPrice: "₹1,299",
      discount: "31%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Wireless+Charger",
      title: "10W Fast Wireless Charger",
      desc: "High-speed wireless charger with anti-slip design.",
      price: "₹1,199",
      oldPrice: "₹1,799",
      discount: "33%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Wireless+Charger",
      title: "15W Wireless Charger Stand",
      desc: "Adjustable stand for easy viewing while charging.",
      price: "₹1,499",
      oldPrice: "₹2,199",
      discount: "32%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Wireless+Charger",
      title: "Wireless Charging Pad",
      desc: "Slim design with LED charging status indicator.",
      price: "₹799",
      oldPrice: "₹1,199",
      discount: "33%",
    },
  ],
  "Mobile Holder": [
    {
      image: "https://via.placeholder.com/290x296?text=Mobile+Holder",
      title: "Universal Mobile Holder",
      desc: "360° rotation dashboard and windshield mount.",
      price: "₹349",
      oldPrice: "₹599",
      discount: "42%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Mobile+Holder",
      title: "Car Vent Mobile Holder",
      desc: "Clip-on holder for car air vents, adjustable grip.",
      price: "₹299",
      oldPrice: "₹499",
      discount: "40%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Mobile+Holder",
      title: "Desktop Phone Stand",
      desc: "Adjustable stand for desk use, compatible with all phones.",
      price: "₹399",
      oldPrice: "₹699",
      discount: "43%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Mobile+Holder",
      title: "Magnetic Car Mount",
      desc: "Strong magnetic holder for easy phone access in cars.",
      price: "₹249",
      oldPrice: "₹399",
      discount: "38%",
    },
  ],
  Chargers: [
    {
      image: "https://via.placeholder.com/290x296?text=Charger",
      title: "18W Fast Charger",
      desc: "Dual USB wall charger with smart IC tech.",
      price: "₹499",
      oldPrice: "₹799",
      discount: "38%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Charger",
      title: "20W Fast Charger",
      desc: "High-speed charger with USB-C Power Delivery.",
      price: "₹699",
      oldPrice: "₹999",
      discount: "30%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Charger",
      title: "30W GaN Charger",
      desc: "Compact and efficient charger with foldable plug.",
      price: "₹899",
      oldPrice: "₹1,299",
      discount: "31%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Charger",
      title: "Multi-Port USB Charger",
      desc: "4-port USB charger for multiple devices.",
      price: "₹1,199",
      oldPrice: "₹1,799",
      discount: "33%",
    },
  ],
  "Gadget Cleaner": [
    {
      image: "https://via.placeholder.com/290x296?text=Gadget+Cleaner",
      title: "3-in-1 Gadget Cleaner",
      desc: "Spray, brush, and wipe combo for phones and screens.",
      price: "₹299",
      oldPrice: "₹499",
      discount: "40%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Gadget+Cleaner",
      title: "Screen Cleaning Wipes",
      desc: "Convenient wipes for cleaning screens and surfaces.",
      price: "₹199",
      oldPrice: "₹299",
      discount: "33%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Gadget+Cleaner",
      title: "Microfiber Cleaning Cloth",
      desc: "Soft cloth for scratch-free cleaning of gadgets.",
      price: "₹149",
      oldPrice: "₹249",
      discount: "40%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Gadget+Cleaner",
      title: "Compressed Air Duster",
      desc: "Blow away dust and debris from gadgets.",
      price: "₹399",
      oldPrice: "₹599",
      discount: "33%",
    },
  ],
  Cables: [
    {
      image: "https://via.placeholder.com/290x296?text=Cable",
      title: "Nylon Braided Cable",
      desc: "Durable USB-A to Type-C cable, 1.5m length.",
      price: "₹199",
      oldPrice: "₹349",
      discount: "43%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Cable",
      title: "Fast Charging Cable",
      desc: "USB-A to Type-C cable, 1.5m length.",
      price: "₹299",
      oldPrice: "₹499",
      discount: "40%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Cable",
      title: "Lightning Cable",
      desc: "Apple-certified lightning cable, 1m length.",
      price: "₹399",
      oldPrice: "₹599",
      discount: "33%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Cable",
      title: "Multi-Device Charging Cable",
      desc: "3-in-1 cable with USB-A, Type-C, and Lightning connectors.",
      price: "₹499",
      oldPrice: "₹799",
      discount: "38%",
    },
  ],
  "Phone Wallets": [
    {
      image: "https://via.placeholder.com/290x296?text=Phone+Wallet",
      title: "Magnetic Phone Wallet",
      desc: "Cardholder with magnetic attach for phones.",
      price: "₹699",
      oldPrice: "₹999",
      discount: "30%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Phone+Wallet",
      title: "Leather Phone Wallet",
      desc: "Premium leather wallet case for phones.",
      price: "₹1,199",
      oldPrice: "₹1,799",
      discount: "33%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Phone+Wallet",
      title: "Silicone Phone Wallet",
      desc: "Flexible silicone wallet for cards and cash.",
      price: "₹399",
      oldPrice: "₹599",
      discount: "33%",
    },
    {
      image: "https://via.placeholder.com/290x296?text=Phone+Wallet",
      title: "RFID Blocking Phone Wallet",
      desc: "Protects cards from RFID skimming.",
      price: "₹899",
      oldPrice: "₹1,299",
      discount: "31%",
    },
  ],
};

// Generate "All" category by combining first 4 products from all other categories
allProducts["All"] = Object.values(allProducts)
  .flat()
  .slice(0, 4 * (categories.length - 1)); // Adjust this if needed

const MobileAccessories = () => {
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
                Mobile Accessories
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

export default MobileAccessories;
