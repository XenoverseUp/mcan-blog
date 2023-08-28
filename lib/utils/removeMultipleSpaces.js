/**
 *
 * @param   {string}  str String that contains many spaces.
 * @returns {string}
 */
const removeMultipleSpaces = str =>
  str
    .split(" ")
    .filter(word => word != "")
    .join(" ")

export default removeMultipleSpaces
