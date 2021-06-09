import React from "react";
import { useHistory } from "react-router";
import styles from "./Home.module.css";

export default function Home() {
  const history = useHistory();

  function clickHandler() {
    history.push(`/create_library`);
  }
  return (
    <div className={styles.container}>
      <button onClick={clickHandler} className="button">
        Create A Library
      </button>
    </div>
  );
}
