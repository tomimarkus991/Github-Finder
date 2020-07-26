import React, { useState } from "react";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <i
      className="scrollTop fas fa-arrow-up"
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
    ></i>
  );
};

export default ScrollToTop;
