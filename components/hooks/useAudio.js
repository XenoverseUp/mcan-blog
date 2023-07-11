"use client"
// !TODO: Reimplement using setInterval rather than `timeupdate` evet.

import { useCallback, useEffect, useRef, useState } from "react"
import useEventListener from "./useEventListener"

const useAudio = ({
  src,
  paused = true,
  fade = true,
  fadeDuration = 4,
  restartOnPause = true,
}) => {
  const [playing, setPlaying] = useState(!paused)
  const audio = useRef(null)

  useEffect(() => {
    audio.current = new Audio(src)
  }, [])

  const togglePlaying = useCallback(
    () => setPlaying(state => !state),
    [setPlaying],
  )

  useEffect(() => {
    if (playing) {
      audio.current.volume = 0
      audio.current.play()
    } else {
      if (restartOnPause) audio.current.currentTime = 0
      audio.current.pause()
    }
  }, [playing])

  useEventListener({
    event: "timeupdate",
    element: audio.current,
    handler: e => {
      const { currentTime, duration } = e.target

      if (currentTime < fadeDuration && e.target.volume < 0.5)
        e.target.volume += 0.03
      else if (
        currentTime >= fadeDuration &&
        currentTime < duration - fadeDuration - 1
      )
        e.target.volume = 0.5
      else if (
        currentTime >= duration - fadeDuration - 1 &&
        e.target.volume > 0.02
      )
        e.target.volume -= 0.03
      else e.target.volume = 0
    },
  })

  useEventListener({
    event: "ended",
    element: audio.current,
    handler: () => {
      audio.current.currentTime = 0
      setPlaying(false)
    },
  })

  return { playing, setPlaying, togglePlaying }
}

export default useAudio
