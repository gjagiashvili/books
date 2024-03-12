import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styles from "../modules/BookDetails.module.scss";

const BookDetails = () => {
  let { id } = useParams();
  const [book, setBook] = useState({});
  const [relatedBooks, setRelatedBooks] = useState([]);

  useEffect(() => {
    const bookFetch = async () => {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );

      setBook(response.data);
    };

    const fetchRelatedBooks = async () => {
      const detailsFetch = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );

      if (detailsFetch.data.volumeInfo.categories) {
        const relatedBooksFetch = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${detailsFetch.data.volumeInfo.categories}&maxResults=5`
        );

        setRelatedBooks(relatedBooksFetch.data.items || "No Related Books");
      }
    };
    bookFetch();
    fetchRelatedBooks();
  }, [id]);

  return (
    <div className={styles["book-container"]}>
      <h2 className={styles["book-title"]}>
        {book.volumeInfo ? book.volumeInfo.title : ""}
      </h2>
      <p className={styles["book-desc"]}>
        {book.volumeInfo ? book.volumeInfo.description : ""}
      </p>

      <div className={styles["related-container"]}>
        <h3>Related Books</h3>
        {relatedBooks &&
          relatedBooks.map((related) => (
            <Link
              to={`/book/${related.id}`}
              key={related.id}
              className={styles["related-link"]}
            >
              <h4 className={styles["related-title"]}>
                {related.volumeInfo.title}
              </h4>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default BookDetails;
