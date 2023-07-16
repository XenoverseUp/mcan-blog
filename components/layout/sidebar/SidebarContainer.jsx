"use client"

import useLocalStorage from "@/components/hooks/useLocalStorage"
import { useEffect, useRef, useState } from "react"

const SidebarContainer = ({ children }) => {
  /** @type {HTMLDivElement} */
  let resizable = useRef(null)

  const [initialPos, setInitialPos] = useState(null)
  const [initialSize, setInitialSize] = useLocalStorage(
    "xenoverse-sidebar-size",
    764
  )

  useEffect(() => {
    resizable.style.width = `${initialSize}px`
    document.body.style.opacity = "1"
  }, [])

  const start = e => {
    setInitialPos(e.clientX)
    setInitialSize(resizable.offsetWidth)
  }

  const resize = e => {
    if (e.clientX === 0) return

    const newSize = parseInt(initialSize) + parseInt(e.clientX - initialPos)
    e.preventDefault()
    resizable.style.width = `${Math.max(newSize, 468)}px`
  }

  const end = () => setInitialSize(resizable.offsetWidth)

  return (
    <header
      ref={instance => {
        resizable = instance
      }}
      className="relative hidden w-full flex-shrink-0 resize-x flex-col justify-between border-r border-neutral-300 @container md:flex md:max-w-[468px] lg:max-w-[568px] min-[1240px]:max-w-[764px]"
    >
      <span
        draggable
        onDragStart={start}
        onDrag={resize}
        onDragEnd={end}
        className="peer absolute bottom-0 right-0 top-0 w-2 translate-x-1/2 cursor-ew-resize"
      />
      <span className="pointer-events-none absolute right-0 top-1/2 h-6 w-4 -translate-y-1/2 translate-x-1/2 rounded-full border border-neutral-300 bg-white before:absolute before:left-1/2 before:top-2 before:h-[1.5px] before:w-1/2 before:-translate-x-1/2 before:rounded-full before:bg-orange-500 after:absolute after:bottom-2 after:left-1/2 after:h-[1.5px] after:w-1/2 after:-translate-x-1/2 after:rounded-full after:bg-orange-500"></span>
      {children}
    </header>
  )
}

export default SidebarContainer
