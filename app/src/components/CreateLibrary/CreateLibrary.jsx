import React from "react";
import CreateSection from "../CreateSection/CreateSection";
import styles from "./CreateLibrary.module.css";

export default function CreateLibrary() {
  return (
    <div className={styles.container}>
      <CreateSection sectionName="Fiction" />
      <CreateSection sectionName="Non-Fiction" />
      <CreateSection sectionName="Magazines" />
    </div>
  );
}
