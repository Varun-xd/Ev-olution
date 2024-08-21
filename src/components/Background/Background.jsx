import "./Background.css";
import video1 from "../../assets/video1.mp4";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

const Background = ({ playStatus, heroCount }) => {
  return (
    <div className="home-screen">
      {playStatus ? (
        <video className="background fade-in" autoPlay loop muted>
          <source src={video1} type="video/mp4" />
        </video>
      ) : heroCount === 0 ? (
        <img src={image1} className="background fade-in" alt="" />
      ) : heroCount === 1 ? (
        <img src={image2} className="background fade-in" alt="" />
      ) : heroCount === 2 ? (
        <img src={image3} className="background fade-in" alt="" />
      ) : null}
    </div>
  );
};

export default Background;
