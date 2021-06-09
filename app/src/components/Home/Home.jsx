import React from "react";
import { useHistory } from "react-router";
import "./Home.css";

export default function Home() {
  const history = useHistory();

  function clickHandler() {
    history.push(`/library_create`);
  }

  return (
    <div className="container">
      <button onClick={clickHandler} className="button">
        Create A Library
      </button>
    </div>
  );
}
