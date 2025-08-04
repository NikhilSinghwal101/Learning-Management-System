import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const ScrollPage = () => {
  const history = useHistory();

  useEffect(() => {
    // Retrieve scroll position on mount
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
      sessionStorage.removeItem("scrollPosition"); // Clear after use
    }

    // Save scroll position on unmount
    return () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    };
  }, [history.location.key]); // Rerun effect on location change

  return (
    <div style={{ height: "2000px" }}>
      {" "}
      {/* Simulate a tall page */}
      <h1>Scroll Down and Navigate</h1>
      <button onClick={() => history.push("/nextPage")}>Go to Next Page</button>
    </div>
  );
};

export default ScrollPage;
