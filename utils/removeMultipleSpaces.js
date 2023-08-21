const removeMultipleSpaces = str =>
  str
    .split(" ")
    .filter(word => word != "")
    .join(" ")

export default removeMultipleSpaces
