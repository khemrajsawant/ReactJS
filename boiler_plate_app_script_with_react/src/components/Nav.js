import { Link } from "react-router-dom";

import React from "react";

function Nav() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
