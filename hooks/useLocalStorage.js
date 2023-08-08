"use client"

import { useState, useEffect } from "react"

const useLocalStorage = (storageKey, fallbackState) => {
  if (typeof window == "undefined") return [fallbackState, null]

  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState,
  )

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value))
  }, [value, storageKey])

  return [value, setValue]
}

export default useLocalStorage
