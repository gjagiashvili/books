import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../modules/List.module.scss";

const List = ({ books, onBookmark }) => {
  const [bookmarkedID, setBookmarkedID] = useState([]);

  const toggleBookmark = (book) => {
    if (bookmarkedID.includes(book.id)) {
      setBookmarkedID((id) => id.filter((id) => id !== book.id));
    } else {
      setBookmarkedID((id) => [...id, book.id]);
    }

    onBookmark(book);
  };

  return (
    <div className={styles.list}>
      {books.map((book) => (
        <div
          key={book.id}
          className={`${styles["item"]} ${styles["container"]}`}
        >
          {book.volumeInfo.imageLinks &&
            book.volumeInfo.imageLinks.thumbnail && (
              <img
                className={styles["book-image"]}
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
              />
            )}
          <h3 className={styles["title"]}>{book.volumeInfo.title}</h3>
          <p className={styles["author"]}>
            {book.volumeInfo.authors
              ? book.volumeInfo.authors.join(", ")
              : "Unknown Author"}
          </p>
          <button
            className={`${styles["bookmark-button"]} ${
              bookmarkedID.includes(book.id)
                ? styles["bookmarked"]
                : styles["not bookmarked"]
            }`}
            onClick={() => toggleBookmark(book)}
          >
            {bookmarkedID.includes(book.id) ? "Bookmarked!" : "Bookmark"}
          </button>

          <Link to={`/book/${book.id}`} className={styles["related-button"]}>
            More Info & Related Books
          </Link>
        </div>
      ))}
    </div>
  );
};

export default List;
