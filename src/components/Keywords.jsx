import React, { useState } from "react";
import axios from "axios";
import List from "./List";
import BookDetails from "./BookDetails"; // Make sure to import BookDetails
import styles from "../modules/Keywords.module.scss";

const Keywords = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = async () => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    );

    setSearchResults(response.data.items);
  };

  const handleBookmark = (book) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, book]);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <>
      <div className={styles["search-container"]}>
        <h1>Search by Keywords</h1>
        <input
          type="text"
          placeholder="Search by keywords..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className={styles["container"]}>
        {selectedBook ? (
          <BookDetails book={selectedBook} />
        ) : (
          <List books={searchResults} onBookmark={handleBookmark} />
        )}
      </div>
    </>
  );
};

export default Keywords;
