export const try_ = async (fn, ...args) => {
  try {
    const res = await fn(...args)
    return [null, res]
  } catch (error) {
    return [error, null]
  }
}

export const trySync = (fn, ...args) => {
  try {
    const res = fn(...args)
    return [null, res]
  } catch (error) {
    return [error, null]
  }
}
