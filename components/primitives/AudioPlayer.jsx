"use client"

import useEventListener from "@/hooks/useEventListener"
import usePrevious from "@/hooks/usePrevious"
import gsap from "gsap"
import { useCallback, useEffect, useRef, useState } from "react"

const AudioPlayer = ({ src, children }) => {
  const [playing, setPlaying] = useState(false)
  const previous = usePrevious(playing)
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
      if (!audio.current.paused) {
        gsap.to(audio.current, {
          volume: 1,
          overwrite: true,
        })
        return
      }
      audio.current.play()
      gsap.fromTo(
        audio.current,
        {
          volume: 0,
        },
        { volume: 1, duration: 1, overwrite: true },
      )
    } else {
      if (previous === null) audio.current.currentTime = 0

      gsap.to(audio.current, {
        volume: 0,
        duration: audio.current.currentTime < 25 ? 0.15 : 1,
        overwrite: true,
        onComplete: () => {
          audio.current.pause()
          audio.current.volume = 0
          audio.current.currentTime = 0
        },
      })
    }
  }, [playing])

  useEventListener({
    event: "timeupdate",
    element: audio.current,
    handler: e => {
      const { currentTime, duration } = e.target

      if (currentTime > duration - 1.2) setPlaying(false)
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

  return children({
    playing,
    setPlaying,
    togglePlaying,
  })
}

export default AudioPlayer
