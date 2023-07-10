import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import useEventListener from "./useEventListener"

const useAudio = ({
  src,
  paused = true,
  fade = true,
  fadeDuration = 4,
  restartOnPause = true,
}) => {
  const [playing, setPlaying] = useState(!paused)
  const audio = useRef(new Audio(src))
  const duration = useRef(0)

  const togglePlaying = useCallback(
    () => setPlaying(state => !state),
    [setPlaying]
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
      const { currentTime, volume, duration } = e.target
      console.log({ currentTime, volume })

      if (currentTime < fadeDuration && e.target.volume < 1)
        e.target.volume += 0.06
      else if (
        currentTime >= fadeDuration &&
        currentTime < duration - fadeDuration - 1
      )
        e.target.volume = 1
      else if (
        currentTime >= duration - fadeDuration - 1 &&
        e.target.volume > 0.05
      )
        e.target.volume -= 0.06
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
