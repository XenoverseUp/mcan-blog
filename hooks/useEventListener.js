import { useRef, useEffect } from "react"

const useEventListener = ({
  event,
  handler,
  element = window,
  active = true,
}) => {
  const savedHandler = useRef()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])
  useEffect(() => {
    const isSupported = element && element.addEventListener
    if (!isSupported) return

    const eventListener = e => savedHandler.current(e)

    if (active) element.addEventListener(event, eventListener)

    return () => {
      element.removeEventListener(event, eventListener)
    }
  }, [event, element])
}

export default useEventListener
