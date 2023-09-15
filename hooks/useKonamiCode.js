import { useEffect, useMemo, useState } from "react"

function useKonamiCode(handler, sequence) {
  const [keys, setKeys] = useState([])

  const isKonamiCode = useMemo(
    () => keys.join(" ").includes(sequence.join(" ")),
    [keys, sequence],
  )

  useEffect(() => {
    let timeout

    window.document.onkeydown = e => {
      setKeys(currentKeys => [...currentKeys, e.code])
      clearTimeout(timeout)
      timeout = setTimeout(() => setKeys([]), 3000)
    }
  }, [])

  useEffect(() => {
    if (isKonamiCode) {
      handler()
      setKeys([])
    }
  }, [isKonamiCode, handler])

  return isKonamiCode
}

export default useKonamiCode
