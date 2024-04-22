import React from "react";

const Toggle = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="toggle">
      <div className="topBtn" onClick={scrollToTop}>
        TOP
      </div>
    </div>
  );
};

export default Toggle;
