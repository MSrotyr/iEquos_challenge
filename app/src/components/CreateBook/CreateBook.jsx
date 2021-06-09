import React, { useState } from "react";
import plus from "../../assets/plus.svg";
import styles from "./CreateBook.module.css";

export default function CreateBook() {
  const [isForm, setIsForm] = useState(false);
  const [bookData, setBookData] = useState({});
  const [books, setBooks] = useState([]);

  function submitHandler(event) {
    event.preventDefault();
    setBooks((prevState) => [...prevState, bookData]);
    setBookData({});
    setIsForm(false);
  }

  function handleChange(event) {
    setBookData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div>
      {books.map((book) => (
        <div
          key={book.title}
        >{`"${book.title}" written by "${book.author}"`}</div>
      ))}
      {isForm ? (
        <div>
          <form
            onSubmit={(event) => submitHandler(event)}
            className={styles.bookForm}
          >
            <input
              name="title"
              required
              onChange={(event) => handleChange(event)}
              placeholder="title"
            ></input>
            <input
              name="author"
              required
              onChange={(event) => handleChange(event)}
              placeholder="author"
            ></input>
            <button className="button" type="submit">
              Add to Library
            </button>
          </form>
          <button className="button">Cancel</button>
        </div>
      ) : (
        <img
          onClick={() => setIsForm(true)}
          className={styles.plus}
          src={plus}
        />
      )}
    </div>
  );
}
