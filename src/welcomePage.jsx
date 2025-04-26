import React from "react";
import { Link } from "react-router-dom"; // Import komponentu Link

const WelcomePage = () => {
  return (
    <div>
      <div className="welcomePage_topBAr"></div>
      <Link to="/" className="button">
        Powrót do strony głównej
      </Link>
    </div>
  );
};

export default WelcomePage;