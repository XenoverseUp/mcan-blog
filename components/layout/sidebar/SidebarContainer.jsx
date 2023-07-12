"use client"

import useLocalStorage from "@/components/hooks/useLocalStorage"
import { useEffect, useRef, useState } from "react"

const SidebarContainer = ({ children }) => {
  /** @type {HTMLDivElement} */
  let resizable = useRef(null)

  const [initialPos, setInitialPos] = useState(null)
  const [initialSize, setInitialSize] = useLocalStorage(
    "xenoverse-sidebar-size",
    764,
  )

  useEffect(() => {
    resizable.style.width = `${initialSize}px`
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
      className="min-[1240px]:max-w-[764px] relative @container w-full flex-shrink-0 border-r border-neutral-300 md:flex md:max-w-[468px] lg:max-w-[568px] flex-col justify-between resize-x hidden"
    >
      <span
        draggable
        onDragStart={start}
        onDrag={resize}
        onDragEnd={end}
        className="absolute right-0 top-0 translate-x-1/2 bottom-0 w-2 cursor-ew-resize peer"
      />
      <span className="absolute top-1/2 -translate-y-1/2 translate-x-1/2 right-0 w-4 h-6 pointer-events-none rounded-full border border-neutral-300 bg-white before:absolute before:top-2 before:left-1/2 before:-translate-x-1/2 before:w-1/2 before:h-[1.5px] before:bg-orange-500 before:rounded-full after:rounded-full after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-[1.5px] after:bg-orange-500"></span>
      {children}
    </header>
  )
}

export default SidebarContainer
