import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import CreateBook from "../CreateBook/CreateBook";
import styles from "./CreateSection.module.css";

export default function CreateSection({ sectionName }) {
  const library = useSelector((state) => state.library);
  const sections = Object.keys(library);
  const books = useSelector((state) => state.library[sectionName]);
  const history = useHistory();
  const nextSection = sections[sections.indexOf(sectionName) + 1];

  function clickHandler() {
    if (nextSection) history.push(`/create_library/${nextSection}`);
  }

  return (
    <div className={styles.container}>
      <h2>{`Add ${sectionName} books:`}</h2>
      <ul>
        {books.map((book) => (
          <li
            key={book.title}
          >{`"${book.title}" written by "${book.author}"`}</li>
        ))}
      </ul>
      <CreateBook sectionName={sectionName} />
      <button onClick={clickHandler} className="button">
        Next
      </button>
    </div>
  );
}
