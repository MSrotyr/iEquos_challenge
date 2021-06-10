export function addSection(sectionName, books) {
  return {
    type: "ADD_SECTION",
    payload: {
      sectionName,
      books,
    },
  };
}
