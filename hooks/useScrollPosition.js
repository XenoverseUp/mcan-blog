import { useEffect, useState } from "react"

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(null)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(document.getElementById("scroll-container").scrollTop)
    }
    document
      .getElementById("scroll-container")
      .addEventListener("scroll", updatePosition)
    updatePosition()
    return () =>
      document
        .getElementById("scroll-container")
        .removeEventListener("scroll", updatePosition)
  }, [])

  return scrollPosition
}

export default useScrollPosition
