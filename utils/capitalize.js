/**
 * Capitalizes the first letter of each word in the passed string.
 * @param {string} string
 * @returns {string} The capitalized string.
 */

const capitalize = (string) =>
  string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ")

export default capitalize
