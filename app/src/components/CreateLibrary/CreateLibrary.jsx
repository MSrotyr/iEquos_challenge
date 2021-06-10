import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import CreateSection from "../CreateSection/CreateSection";
import styles from "./CreateLibrary.module.css";

export default function CreateLibrary() {
  const history = useHistory();
  const library = useSelector((state) => state.library);
  const sections = Object.keys(library);
  const { sectionName } = useParams();
  const nextSection = sections[sections.indexOf(sectionName) + 1];

  function clickHandler() {
    if (nextSection) history.push(`/create_library/${nextSection}`);
  }

  return (
    <div className={styles.container}>
      <div>
        <CreateSection sectionName={sectionName} />
        <button onClick={clickHandler} className="button">
          Next
        </button>
      </div>
    </div>
  );
}
