"use client"

import AudioPlayer from "@/components/ui/AudioPlayer"

const SpotifyPlayer = ({ src }) => (
  <AudioPlayer {...{ src }}>
    {({ playing, togglePlaying }) => (
      <button onClick={togglePlaying}>{playing ? "pause" : "play"}</button>
    )}
  </AudioPlayer>
)

export default SpotifyPlayer
