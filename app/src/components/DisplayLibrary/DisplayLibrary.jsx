import React from "react";
import { useSelector } from "react-redux";

export default function DisplayLibrary() {
  const library = useSelector((state) => state.library);
  const sections = Object.keys(library);

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
        </div>
      ))}
    </div>
  );
}
