import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const MainNavbar = () => {
  const [topNavbarHidden, setTopNavbarHidden] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showCartPanel, setShowCartPanel] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setTopNavbarHidden(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleCartPanel = () => {
    setShowCartPanel((prev) => !prev);
    if (!showCartPanel) setShowSearch(false);
    setShowUserPopup(false);
  };

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
    setShowCartPanel(false);
    setShowUserPopup(false);
  };

  const openUserPopup = () => {
    setShowUserPopup(true);
    setShowCartPanel(false);
    setShowSearch(false);
  };

  return (
    <>
      <style>{`
        /* Navbar Styles */
        .main-navbar {
          position: fixed;
          top: 40px;
          height: 69px;
          background-color: #ffffff;
          border-bottom: 1px solid #eee;
          z-index: 1050;
          width: 100%;
          transition: top 0.3s ease;
        }
        .main-navbar.move-up {
          top: 0;
        }
        .search-form {
          max-width: 500px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          justify-content: center;
        }
        .search-input-wrapper {
          position: relative;
          width: 100%;
        }
        .search-input {
          height: 36px;
          font-size: 1rem;
          padding-left: 2.5rem;
          padding-right: 2.5rem;
        }
        .search-icon-left {
          position: absolute;
          left: 0.5rem;
          top: 50%;
          transform: translateY(-50%);
          color: #666;
          font-size: 1.1rem;
          pointer-events: none;
        }
        .search-close-btn {
          position: absolute;
          right: 0.5rem;
          top: 50%;
          transform: translateY(-50%);
          padding: 0;
          color: #666;
          font-size: 1.25rem;
          line-height: 1;
          background: none;
          border: none;
          cursor: pointer;
        }
        .nav-links {
          white-space: nowrap;
        }
        .icon-button {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          color: #000;
        }
        /* Cart Panel */
        .cart-panel {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          width: 30vw;
          max-width: 400px;
          background: #fff;
          box-shadow: -3px 0 8px rgba(0,0,0,0.1);
          transform: translateX(100%);
          transition: transform 0.3s ease;
          z-index: 1100;
          display: flex;
          flex-direction: column;
          padding: 1rem;
        }
        .cart-panel.open {
          transform: translateX(0);
        }
        .cart-panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #eee;
          padding-bottom: 0.5rem;
          margin-bottom: 1rem;
        }
        .cart-close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #666;
        }
        .cart-content {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .cart-content p {
          margin-bottom: 1rem;
          font-weight: 600;
          font-size: 1.1rem;
        }

        /* User Icon */
        .user-icon-button {
          font-size: 20px;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* User Popup Overlay */
        .user-popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
        }

        /* User Popup */
        .user-popup {
          width: 878px;
          height: 385px;
          background-color: #fff;
          display: flex;
          position: relative;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          border-radius: 6px;
          overflow: hidden;
          font-family: Arial, sans-serif;
        }

        /* Left Side */
        .user-popup-left {
          width: 536px;
          height: 385px;
          background-color: #f9f9f9;
          display: flex;
          flex-direction: column;
          padding: 20px 25px;
          box-sizing: border-box;
        }

        .left-top-box {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding-bottom: 15px;
          border-bottom: 1px solid #ddd;
        }

        .left-top-box img {
          max-height: 40px;
          margin-bottom: 15px;
          object-fit: contain;
          margin-left: -105px;
        }

        .left-top-box p {
          font-size: 1.3rem;
          color: #555;
          font-weight: bold;
          line-height: 1.4;
          margin: 0;
        }

        /* Left Bottom box now has 3 divs stacked vertically */
        .left-bottom-box {
          flex: 1;
          padding-top: 15px;
          display: flex;
          flex-direction: grid;
          gap: 15px;
          justify-content: center;
          text-align: left;
        }

        .left-bottom-box > div {
          background: #fff;
          padding: 10px 15px;
          border-radius: 4px;
          box-shadow: 0 0 6px rgb(0 0 0 / 0.05);
        }

        .left-bottom-box h4 {
          margin: 0 0 6px;
          font-size: 1.1rem;
          color: #222;
          font-weight: 600;
        }

        .left-bottom-box p {
          margin: 0;
          font-size: 0.95rem;
          color: #666;
          line-height: 1.3;
        }

        /* Right Side */
        .user-popup-right {
          width: 342px;
          height: 385px;
          background-color: #fff;
          color: #333;
          padding: 20px 25px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          text-align: left;
          font-family: Arial, sans-serif;
          font-size: 0.95rem;
        }

        .user-popup-right p {
          margin-bottom: 10px;
          line-height: 1.4;
          color: #444;
        }

        .user-popup-right label {
          display: block;
          margin-bottom: 4px;
          font-weight: 600;
          font-size: 0.9rem;
          color: #222;
        }

        .user-popup-right input[type="text"],
        .user-popup-right input[type="tel"] {
          width: 100%;
          padding: 7px 10px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 0.95rem;
          box-sizing: border-box;
        }

        .notify-updates {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }

        .notify-updates input[type="checkbox"] {
          margin-right: 8px;
          transform: scale(1.1);
          cursor: pointer;
        }

        .privacy-policy,
        .trouble-login {
          margin-top: 10px;
          font-size: 0.9rem;
          color: #007bff;
          cursor: pointer;
          text-decoration: underline;
          user-select: none;
        }
        .privacy-policy:hover,
        .trouble-login:hover {
          color: #0056b3;
        }

        /* Close button outside popup */
        .close-button {
          position: fixed;
          top: 20px;
          right: 20px;
          font-size: 28px;
          color: #fff;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 2100;
          transition: color 0.2s ease;
        }
        .close-button:hover {
          color: #ff4444;
        }
      `}</style>

      {/* Navbar */}
      <Navbar
        className={`main-navbar ${topNavbarHidden ? "move-up" : ""}`}
        expand="lg"
      >
        <Container
          className="d-flex align-items-center justify-content-between"
          style={{ maxWidth: "1200px", marginLeft: "130px" }}
        >
          <Navbar.Brand href="/" className="p-0">
            <img
              src="https://www.milprotech.com/public/logo.png"
              alt="Logo"
              style={{
                height: "45px",
                width: "210px",
                objectFit: "contain",
                marginLeft: "-15px",
              }}
            />
          </Navbar.Brand>

          {!showSearch ? (
            <Nav
              className="justify-content-center gap-4 px-3 mx-auto nav-links"
              style={{ whiteSpace: "nowrap" }}
            >
              <NavDropdown
                title="Categories"
                id="categories-dropdown"
                className="text-dark fw-medium px-2"
                menuVariant="light"
              >
                <NavDropdown.Item href="#cat1">Category 1</NavDropdown.Item>
                <NavDropdown.Item href="#cat2">Category 2</NavDropdown.Item>
                <NavDropdown.Item href="#cat3">Category 3</NavDropdown.Item>
                <NavDropdown.Item href="#cat4">Category 4</NavDropdown.Item>
                <NavDropdown.Item href="#cat5">Category 5</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#new" className="text-dark fw-medium px-2">
                New Arrival
              </Nav.Link>
              <Nav.Link href="#gifting" className="text-dark fw-medium px-2">
                Corporate Gifting
              </Nav.Link>
              <Nav.Link href="#warranty" className="text-dark fw-medium px-2">
                Warranty Registration
              </Nav.Link>
              <Nav.Link href="#support" className="text-dark fw-medium px-2">
                Support
              </Nav.Link>
            </Nav>
          ) : (
            <Form
              className="search-form"
              onSubmit={(e) => e.preventDefault()}
              role="search"
              aria-label="Site Search"
            >
              <div className="search-input-wrapper">
                <FontAwesomeIcon icon={faSearch} className="search-icon-left" />
                <input
                  type="search"
                  placeholder="Search by Product Name or SKU"
                  className="form-control search-input"
                  autoFocus
                  aria-label="Search"
                />
                <button
                  type="button"
                  className="search-close-btn"
                  onClick={() => setShowSearch(false)}
                  aria-label="Close search"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </Form>
          )}

          {/* Icon Group */}
          <div className="d-flex align-items-center gap-3">
            <button
              className="icon-button"
              aria-label="Search"
              onClick={toggleSearch}
            >
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </button>

            <button
              className="icon-button"
              aria-label="Cart"
              onClick={toggleCartPanel}
            >
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </button>

            <button
              className="user-icon-button"
              aria-label="User"
              onClick={openUserPopup}
            >
              <FontAwesomeIcon icon={faUser} />
            </button>
          </div>
        </Container>
      </Navbar>

      {/* Cart Panel */}
      <div className={`cart-panel ${showCartPanel ? "open" : ""}`}>
        <div className="cart-panel-header">
          <h5>Your Cart</h5>
          <button
            onClick={() => setShowCartPanel(false)}
            aria-label="Close Cart"
            className="cart-close-btn"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="cart-content">
          <p>Your cart is empty</p>
          {/* Add your cart items here */}
        </div>
      </div>

      {/* User Popup */}
      {showUserPopup && (
        <>
          <div
            className="user-popup-overlay"
            onClick={() => setShowUserPopup(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="user-popup-title"
          >
            <div
              className="user-popup"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left side */}
              <div className="user-popup-left">
                {/* Top Box: logo + paragraph */}
                <div className="left-top-box">
                  <img
                    src="https://www.milprotech.com/public/logo.png"
                    alt="Logo"
                  />
                  <p>
                    Welcome to Portronics-India’s most loved gadget Brand!
                  </p>
                </div>

                {/* Bottom Box: 3 divs with heading + paragraph */}
                <div className="left-bottom-box">
                  <div>
                    <h4>Need Help?</h4>
                    <p>
                      Reach out to our support team for any assistance or queries.
                    </p>
                  </div>
                  <div>
                    <h4>Contact Us</h4>
                    <p>
                      Email us at support@example.com or call us during business hours.
                    </p>
                  </div>
                  <div>
                    <h4>FAQ</h4>
                    <p>
                      Find answers to common questions and troubleshooting tips.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side */}
              <div className="user-popup-right">
                <p>
                  Stay updated with the latest news and offers. Enter your mobile number below to receive notifications.
                </p>

                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                  id="mobileNumber"
                  type="tel"
                  placeholder="+1 234 567 8901"
                  aria-label="Mobile Number"
                />



                <div className="notify-updates">
                  <input
                    type="checkbox"
                    id="notifyUpdates"
                    aria-label="Notify Updates"
                  />
                  <label htmlFor="notifyUpdates">Notify Updates</label>
                </div>

                <p>
                  We respect your privacy and will never share your information without your consent.
                </p>

                <div
                  className="privacy-policy"
                  role="button"
                  tabIndex={0}
                  onClick={() => alert("Privacy Policy clicked")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") alert("Privacy Policy clicked");
                  }}
                >
                  Privacy Policy
                </div>

                <div
                  className="trouble-login"
                  role="button"
                  tabIndex={0}
                  onClick={() => alert("Trouble logging in clicked")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") alert("Trouble logging in clicked");
                  }}
                >
                  Trouble Logging In?
                </div>
              </div>
            </div>
          </div>

          {/* Close button outside popup */}
          <button
            className="close-button"
            onClick={() => setShowUserPopup(false)}
            aria-label="Close user popup"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </>
      )}
    </>
  );
};

export default MainNavbar;
