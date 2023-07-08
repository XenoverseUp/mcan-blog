/**
 *
 * @param {string} classnames
 * @returns {string}
 */

const important = classnames =>
  classnames
    .split(" ")
    .map(classname => `!${classname}`)
    .join(" ")

export default important
