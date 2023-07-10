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
    console.log(playing)
    if (playing) audio.current.play()
    else {
      if (restartOnPause) audio.current.currentTime = 0
      audio.current.pause()
    }
  }, [playing])

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
