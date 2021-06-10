import React from "react";
import { useSelector } from "react-redux";

export default function DisplayLibrary() {
  const library = useSelector((state) => state.library);
  const sections = Object.keys(library);

  return (
    <div>
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
