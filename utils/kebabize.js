/**
 * A function that converts any other naming convention to kebab-case.
 * @param {string} string - nonKebabCase string.
 * @returns {string} - kebab-case string.
 */

const kebabize = string =>
  string.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? "-" : "") + $.toLowerCase()
  )

export default kebabize
