"use client"

import AudioPlayer from "@/components/primitives/AudioPlayer"

import useUpdateEffect from "@/hooks/useUpdateEffect"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import { PauseIcon, PlayIcon } from "@radix-ui/react-icons"

const MusicPlayer = ({ src, onChange }) => (
  <AudioPlayer {...{ src }}>
    {({ playing, togglePlaying }) => {
      useUpdateEffect(() => onChange(), [playing])

      return (
        <button className="absolute right-4 top-4" onClick={togglePlaying}>
          {playing ? (
            <AccessibleIcon label="Pause">
              <PauseIcon className="aspect-square w-6 fill-white" />
            </AccessibleIcon>
          ) : (
            <AccessibleIcon label="Play">
              <PlayIcon className="aspect-square w-6 fill-white" />
            </AccessibleIcon>
          )}
        </button>
      )
    }}
  </AudioPlayer>
)

export default MusicPlayer
