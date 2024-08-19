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

  const handleExploreClick = () => {
    navigate("/");
    setTimeout(() => {
      const exploreSection = document.getElementById("explore-section");
      if (exploreSection) {
        exploreSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
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
          <button onClick={handleExploreClick} className="nav-home">
            Explore
          </button>
        </li>
        <li>
          <button onClick={handleContactClick} className="nav-contact">
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
