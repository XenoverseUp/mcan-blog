/**
 * A function that converts any other naming convention to kebab-case.
 * @param {string} string - nonKebabCase string.
 * @returns {string} - kebab-case string.
 */

const kebabize = string =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .replace(/_{1,}/g, "-")
    .toLowerCase()

export default kebabize
