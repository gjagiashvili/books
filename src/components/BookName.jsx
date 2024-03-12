import React, { useState } from "react";
import axios from "axios";
import List from "./List";
import styles from "../modules/BookName.module.scss";

const BookName = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchTerm}`
    );

    setSearchResults(response.data.items);
  };

  return (
    <>
      <div className={styles["search-container"]}>
        <h1>Search by Book Name</h1>
        <input
          type="text"
          placeholder="Search book name..."
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

export default BookName;
