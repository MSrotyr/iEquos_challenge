import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import DisplayLibrary from "../DisplayLibrary/DisplayLibrary";
import styles from "./Home.module.css";

export default function Home() {
  const history = useHistory();

  const library = useSelector((state) => state.library);
  let isLibrary;
  for (let sectionBooks of Object.values(library)) {
    if (sectionBooks.length) {
      isLibrary = true;
      break;
    }
  }

  function clickHandler() {
    history.push(`/create_library/Fiction`);
  }
  return (
    <div className={styles.outerContainer}>
      <h1 className={styles.title}>The Amazing Book Library Creator</h1>
      <div className={styles.container}>
        {isLibrary ? (
          <DisplayLibrary />
        ) : (
          <div>
            <h2>
              Looks like you don&apos;t have a Library, would you like to create
              one?
            </h2>
            <button onClick={clickHandler} className="buttonLarge">
              Create A Library
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
