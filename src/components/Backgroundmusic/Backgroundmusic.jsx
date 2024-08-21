import React, { useEffect, useRef } from "react";
import backgroundmusic from "../../assets/backgroundmusic.mp3";

const Backgroundmusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
      document.removeEventListener("click", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={backgroundmusic} loop />
    </div>
  );
};

export default Backgroundmusic;
