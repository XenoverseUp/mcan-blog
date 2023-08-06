"use client"

import Pause from "@/assets/svg/media/pause"
import Play from "@/assets/svg/media/play"
import useUpdateEffect from "@/components/hooks/useUpdateEffect"
import AccessibleIcon from "@/components/ui/AcessibleIcon"
import AudioPlayer from "@/components/ui/AudioPlayer"

const MusicPlayer = ({ src, onChange }) => (
  <AudioPlayer {...{ src }}>
    {({ playing, togglePlaying }) => {
      useUpdateEffect(() => onChange(), [playing])

      return (
        <button className="absolute top-4 right-4" onClick={togglePlaying}>
          {playing ? (
            <AccessibleIcon label="Pause">
              <Pause className="fill-white w-6 aspect-square" />
            </AccessibleIcon>
          ) : (
            <AccessibleIcon label="Play">
              <Play className="fill-white w-6 aspect-square" />
            </AccessibleIcon>
          )}
        </button>
      )
    }}
  </AudioPlayer>
)

export default MusicPlayer
