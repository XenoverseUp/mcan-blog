/**
 * Divides the array into `count` chunks.
 * @param {Array} array - The array to subdivide.
 * @param {number} count - Subdivison count.
 * @returns {Array} - An array containing subdivided arrays.
 */

const subdivide = (array, count) => {
  const { length } = array
  const rem = length % count

  const size = (length - rem) / count

  const divisions = []

  if (size) {
    for (let i = 0; i < length - size + 1; i += size)
      divisions.push(array.slice(i, i + size))
  }
  for (let i = 0; i < rem; i++) {
    if (divisions.length === 0) divisions.push(new Array())
    divisions.at(-1).push(array.at(-i))
  }

  return divisions
}

export default subdivide
