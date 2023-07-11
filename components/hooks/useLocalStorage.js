"use client"

import { useState, useEffect } from "react"

const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = useState(
    typeof window === "object"
      ? JSON.parse(window?.localStorage.getItem(storageKey))
      : fallbackState,
  )

  useEffect(() => {
    if (typeof window === "object")
      window?.localStorage.setItem(storageKey, JSON.stringify(value))
  }, [value, storageKey])

  return [value, setValue]
}

export default useLocalStorage
