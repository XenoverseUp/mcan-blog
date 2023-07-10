"use client"

import useAudio from "@/components/hooks/useAudio"

const AudioPlayer = ({ src, children, fade, paused }) => {
  const { playing, setPlaying, togglePlaying } = useAudio({
    src,
    ...(fade && { fade }),
    ...(paused && { paused }),
  })

  return children({ playing, setPlaying, togglePlaying })
}

export default AudioPlayer
