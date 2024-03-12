import React, { useState } from "react";
import axios from "axios";
import List from "./List";
import styles from "../modules/Genres.module.scss";

const Genres = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${searchTerm}`
    );

    setSearchResults(response.data.items);
  };

  return (
    <>
      <div className={styles["search-container"]}>
        <h1>Search by Genre</h1>
        <input
          type="text"
          placeholder="Search by genre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className={styles["container"]}>
        <List books={searchResults} />
      </div>
    </>
  );
};

export default Genres;
