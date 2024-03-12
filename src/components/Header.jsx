import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../modules/Header.module.scss";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        Bookly
      </Link>
      <nav>
        <Link
          to="/genres"
          className={activeLink === "/genres" ? styles["selected"] : ""}
          onClick={() => handleLinkClick("/genres")}
        >
          Search by Genres
        </Link>
        <Link
          to="/authors"
          className={activeLink === "/authors" ? styles["selected"] : ""}
          onClick={() => handleLinkClick("/authors")}
        >
          Search by Authors
        </Link>
        <Link
          to="/keywords"
          className={activeLink === "/keywords" ? styles["selected"] : ""}
          onClick={() => handleLinkClick("/keywords")}
        >
          Search by Keywords
        </Link>
        <Link
          to="/name"
          className={activeLink === "/name" ? styles["selected"] : ""}
          onClick={() => handleLinkClick("/name")}
        >
          Search by Name
        </Link>
      </nav>
    </div>
  );
};

export default Header;
