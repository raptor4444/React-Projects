import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div>
      <nav>
        <h1>Hello World</h1>
        <main>
          <HashLink to={"/#Home"}>Home</HashLink>
          <HashLink to={"/#About"}>About</HashLink>
          <Link to={"/Contact"}>Contact</Link>
          <HashLink to={"/#Brands"}>Brands</HashLink>
          <Link to={"/Services"}>Services</Link>
        </main>
      </nav>
    </div>
  );
};

export default Header;
