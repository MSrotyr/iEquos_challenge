import React from "react";
import { useParams } from "react-router";
import CreateSection from "../CreateSection/CreateSection";
import styles from "./CreateLibrary.module.css";

export default function CreateLibrary() {
  const { sectionName } = useParams();

  return (
    <div className={styles.container}>
      <div>
        <CreateSection sectionName={sectionName} />
      </div>
    </div>
  );
}
