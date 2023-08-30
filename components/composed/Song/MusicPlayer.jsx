"use client"

import Pause from "@/assets/svg/media/pause"
import Play from "@/assets/svg/media/play"
import AudioPlayer from "@/components/composed/song/AudioPlayer"
import AccessibleIcon from "@/components/ui/AcessibleIcon"
import useUpdateEffect from "@/hooks/useUpdateEffect"

const MusicPlayer = ({ src, onChange }) => (
  <AudioPlayer {...{ src }}>
    {({ playing, togglePlaying }) => {
      useUpdateEffect(() => onChange(), [playing])

      return (
        <button className="absolute right-4 top-4" onClick={togglePlaying}>
          {playing ? (
            <AccessibleIcon label="Pause">
              <Pause className="aspect-square w-6 fill-white" />
            </AccessibleIcon>
          ) : (
            <AccessibleIcon label="Play">
              <Play className="aspect-square w-6 fill-white" />
            </AccessibleIcon>
          )}
        </button>
      )
    }}
  </AudioPlayer>
)

export default MusicPlayer
