
import React, { useEffect, useState } from "react";
import './ReactScrollMeter.css';

const ReactScrollMeter = ({barcolor}) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;

    return (
        <div className="scroll-container">
        <div className="indicator" style={{background:`${barcolor}`, width: `${scrollPosition*100/height}%` }}></div>
    </div>
    );
};

export default ReactScrollMeter;