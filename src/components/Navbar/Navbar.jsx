import "./Navbar.css";
import { useNavigate } from "react-router-dom";

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
  };

  return (
    <div className="nav">
      <div className="nav-logo">Ev-olution</div>
      <ul className="nav-menu">
        <li>
          <button onClick={handleHomeClick} className="nav-home">
            Home
          </button>
        </li>
        <li>
          <a href="#contact">
            <button onClick={handleExploreClick} className="nav-home">
              explore
            </button>
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
