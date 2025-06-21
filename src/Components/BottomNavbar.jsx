import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

const BottomNavbar = () => {
return (
    <div
        className="d-lg-none " id="bottom-nevbar"
        // style={{
        //     position: "fixed",
        //     bottom: 0,
        //     left: 0,
        //     right: 0,
        //     height: "60px",
        //     backgroundColor: "#fff",
        //     boxShadow: "0 -1px 5px rgba(0,0,0,0.1)",
        //     zIndex: 1050,
        //     display: "flex",
        //     justifyContent: "space-around",
        //     alignItems: "center",
        //     borderTop: "1px solid #ddd"
        // }}
    >
        <button className="btn btn-link" style={{ color: "gray", textDecoration: "none" }}>
            <FontAwesomeIcon icon={faHome} style={{ fontSize: "1.25rem", color: "gray" }} />
            <span style={{ fontSize: "0.75rem", display: "block", color: "gray" }}>Home</span>
        </button>
        <button className="btn btn-link" style={{ color: "gray", textDecoration: "none" }}>
            <FontAwesomeIcon icon={faSearch} style={{ fontSize: "1.25rem", color: "gray" }} />
            <span style={{ fontSize: "0.75rem", display: "block", color: "gray" }}>Search</span>
        </button>
        <button className="btn btn-link" style={{ color: "gray", textDecoration: "none" }}>
            <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: "1.25rem", color: "gray" }} />
            <span style={{ fontSize: "0.75rem", display: "block", color: "gray" }}>Cart</span>
        </button>
        <button className="btn btn-link" style={{ color: "gray", textDecoration: "none" }}>
            <FontAwesomeIcon icon={faUser} style={{ fontSize: "1.25rem", color: "gray" }} />
            <span style={{ fontSize: "0.75rem", display: "block", color: "gray" }}>Profile</span>
        </button>
    </div>
);
};

export default BottomNavbar;
