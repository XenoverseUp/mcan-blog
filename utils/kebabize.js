/**
 * A function that converts any other naming convention to kebab-case.
 * @param {string} string - nonKebabCase string.
 * @returns {string} - kebab-case string.
 */

const kebabize = string =>
  string
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .split(" ")
    .map(word => word.toLowerCase())
    .join("-")

export default kebabize
