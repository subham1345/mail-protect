import React, { useState, useEffect } from "react";
import { Button, Nav } from "react-bootstrap";

const ResponsiveCategoryNav = ({ categories }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 576) setVisibleCount(2); // sm
      else if (width < 768) setVisibleCount(2); // md
      else if (width < 992) setVisibleCount(5); // lg
      else setVisibleCount(6); // xl and up
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const visibleCategories = categories.slice(
    startIndex,
    startIndex + visibleCount
  );

  const handlePrevNav = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNextNav = () => {
    if (startIndex < categories.length - visibleCount) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
  };

  return (
    <div
      className="mx-auto d-flex align-items-center position-relative"
      style={{
        width: "85%",
        maxWidth: "1400px",
        background: "rgb(248,249,250)",
        borderRadius: "6px",
        padding: "10px 0",
      }}
    >
      {/* Left Arrow */}
      <Button
        variant="light"
        onClick={handlePrevNav}
        disabled={startIndex === 0}
        style={{
          position: "absolute",
          left: 10,
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

      {/* Right Arrow */}
      <Button
        variant="light"
        onClick={handleNextNav}
        disabled={startIndex >= categories.length - visibleCount}
        style={{
          position: "absolute",
          right: 10,
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

      {/* Category Items */}
      <div
        className="d-flex justify-content-between w-100 px-5 px-sm-4"
        style={{ overflow: "hidden", margin: "0 10px",maxWidth: "100%" }}
      >
        {visibleCategories.map((cat, idx) => (
          <Nav.Link
            key={startIndex + idx}
            href="#"
            onClick={() => handleCategoryClick(cat)}
            style={{
                // width: "100%",
              flex: "1 0 auto",
            //   backgroundColor:'yellow',
              padding: "0.15rem 0px",
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
    </div>
  );
};

export default ResponsiveCategoryNav;
