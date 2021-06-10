import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

export default function DisplayLibrary() {
  const history = useHistory();
  const library = useSelector((state) => state.library);
  const sections = Object.keys(library);

  function clickHandler(sectionName) {
    history.push(`/create_library/${sectionName}`);
  }

  return (
    <div>
      <h2>Your Library:</h2>
      {sections.map((sectionName) => (
        <div key={sectionName}>
          <h3>{sectionName}</h3>
          <ul>
            {library[sectionName].map((book) => (
              <li
                key={book.title}
              >{`"${book.title}" written by "${book.author}"`}</li>
            ))}
          </ul>
          <button
            name={sectionName}
            className={"button"}
            onClick={(event) => clickHandler(event.target.name)}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}
