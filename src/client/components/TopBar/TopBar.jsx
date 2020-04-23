import React from "react";

import logo from "../../img/yelp.png"

const TopBar = ({title}) => (
  <nav className="navbar navbar-light bg-light justify-content-center">
    <a className="navbar-brand" href="#">
      <img src={logo} width="30" height="30" className="d-inline-flex align-center mr-2" alt="yelp logo" />
      {title}
    </a>
  </nav>
);

export default TopBar;