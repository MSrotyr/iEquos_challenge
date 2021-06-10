export function addBook(sectionName, book) {
  return {
    type: "ADD_SECTION",
    payload: {
      sectionName,
      book,
    },
  };
}
