"use client"

import Sine from "@/components/canvas/Sine"
import SpotifyPlayer from "./SpotifyPlayer"
import { useRef } from "react"

const Visualizer = ({ preview }) => {
  const ref = useRef(null)

  return (
    <>
      <div className="absolute inset-0 pointer-events-none">
        <Sine
          ref={ref}
          width={600}
          height={400}
          className="w-full h-full duration-[3s]"
        />
      </div>
      <SpotifyPlayer
        onChange={() => ref.current.toggleExcitement()}
        src={preview}
      />
    </>
  )
}

export default Visualizer
