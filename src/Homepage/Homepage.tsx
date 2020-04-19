import React, { FC } from "react";
import { Link } from "react-router-dom";

const Homepage: FC = () => {
  return (
    <ul>
      <li>
        <Link to="/homepage">Home</Link>
      </li>
      <li>
        <Link to="/review">Review</Link>
      </li>
      <li>
        <Link to="/about-us">About us</Link>
      </li>
    </ul>
  );
};

export default Homepage;
