import React, { useState } from "react";
import { useDispatch } from "react-redux";
import plus from "../../assets/plus.svg";
import styles from "./CreateBook.module.css";
import * as actions from "../../actions.js";

export default function CreateBook({ sectionName }) {
  const dispatch = useDispatch();
  const [isForm, setIsForm] = useState(false);
  const [bookData, setBookData] = useState({});

  function submitHandler(event) {
    event.preventDefault();
    dispatch(actions.addBook(sectionName, bookData));
    setBookData({});
    setIsForm(false);
  }

  function handleChange(event) {
    setBookData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  function cancelHandler() {
    setIsForm(false);
    setBookData({});
  }

  return (
    <div>
      {isForm ? (
        <div>
          <form
            onSubmit={(event) => submitHandler(event)}
            className={styles.bookForm}
          >
            <p>Enter details:</p>
            <input
              className={styles.input}
              name="title"
              required
              onChange={(event) => handleChange(event)}
              placeholder="title"
            ></input>
            <input
              className={styles.input}
              name="author"
              required
              onChange={(event) => handleChange(event)}
              placeholder="author"
            ></input>
            <div>
              <button className="button" type="submit">
                Add to Library
              </button>
              <button onClick={cancelHandler} className="button">
                Cancel
              </button>
            </div>
          </form>
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
