import { useEffect, useState } from "react"

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(null)

  useEffect(() => {
    const updatePosition = () => {
      if (document.documentElement.style.overflow === "hidden") return
      setScrollPosition(document.documentElement.scrollTop)
      console.log(document.documentElement.scrollTop)
    }
    window.addEventListener("scroll", updatePosition)
    updatePosition()
    return () => window.removeEventListener("scroll", updatePosition)
  }, [])

  return scrollPosition
}

export default useScrollPosition
