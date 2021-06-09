import React from "react";
import CreateBook from "../CreateBook/CreateBook";
import styles from "./CreateSection.module.css";

export default function CreateSection({ sectionName }) {
  return (
    <div className={styles.container}>
      <h2>{`Add ${sectionName} books:`}</h2>
      <CreateBook />
    </div>
  );
}
