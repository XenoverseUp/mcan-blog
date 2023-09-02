import { useCallback, useState } from "react"

/**
 *
 * @param {boolean} initial
 * @returns {[boolean, () => void, import("react").Dispatch<import("react").SetStateAction<boolean>>]}
 */
const useBoolean = initial => {
  const [value, setValue] = useState(initial)

  const toggle = useCallback(() => setValue(state => !state), [setValue])

  return [value, toggle, setValue]
}

export default useBoolean
