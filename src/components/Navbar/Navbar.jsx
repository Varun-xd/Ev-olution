import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleExploreClick = (event) => {
    event.preventDefault();
    const exploreSection = document.getElementById("explore-section");
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={logo} className="vector-logo" alt="logo" />
      </div>
      <ul className="nav-menu">
        <li>
          <button onClick={handleHomeClick} className="nav-home">
            Home
          </button>
        </li>
        <li>
          <a href="#explore-section" onClick={handleExploreClick}>
            <button className="nav-home">Explore</button>
          </a>
        </li>
        <li>
          <button className="nav-about">About</button>
        </li>
        <li>
          <a href="#contact">
            <button onClick={handleContactClick} className="nav-contact">
              Contact
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
