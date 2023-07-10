"use client"

import Pause from "@/assets/svg/media/pause"
import Play from "@/assets/svg/media/play"
import useUpdateEffect from "@/components/hooks/useUpdateEffect"
import AudioPlayer from "@/components/ui/AudioPlayer"

const SpotifyPlayer = ({ src, onChange }) => (
  <AudioPlayer {...{ src }}>
    {({ playing, togglePlaying }) => {
      useUpdateEffect(() => onChange(), [playing])

      return (
        <button className="absolute top-4 right-4" onClick={togglePlaying}>
          {playing ? (
            <Pause className="fill-white w-6 aspect-square" />
          ) : (
            <Play className="fill-white w-6 aspect-square" />
          )}
        </button>
      )
    }}
  </AudioPlayer>
)

export default SpotifyPlayer
