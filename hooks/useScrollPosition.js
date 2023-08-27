import { useEffect, useState } from "react"

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(null)

  useEffect(() => {
    const updatePosition = () => {
      if (
        document.querySelector("[scroll-container]").style.overflow === "hidden"
      )
        return
      setScrollPosition(document.querySelector("[scroll-container]").scrollTop)
    }
    document
      .querySelector("[scroll-container]")
      .addEventListener("scroll", updatePosition)
    updatePosition()
    return () =>
      document
        .querySelector("[scroll-container]")
        .removeEventListener("scroll", updatePosition)
  }, [])

  return scrollPosition
}

export default useScrollPosition
