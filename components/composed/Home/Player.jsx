"use client"

import Sine from "@/components/canvas/Sine"
import AudioPlayer from "@/components/primitives/AudioPlayer"
import CircularProgress from "@/components/primitives/CircularProgress"
import useUpdateEffect from "@/hooks/useUpdateEffect"
import cx from "@/lib/utils/cx"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import { PauseIcon, PlayIcon } from "@radix-ui/react-icons"
import Image from "next/image"

const Player = ({ coverImagePlaceholder, coverImage, title, previewUrl }) => {
  return (
    <>
      <Image
        src={coverImagePlaceholder}
        alt={`${title}-cover-placeholder`}
        fill
        priority
        quality={0}
        className="pointer-events-none object-cover transition-all -z-20 rounded-xl"
      />

      <AudioPlayer src={previewUrl}>
        {({ playing, togglePlaying }) => {
          return (
            <>
              <div
                className={cx(
                  "absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-[2s]",
                  {
                    "opacity-40": playing,
                  },
                )}
              >
                <Sine
                  width={600}
                  className={cx("h-full w-full invert dark:invert-0")}
                />
              </div>

              <div className="relative isolate grid group place-items-center hover:scale-[1.025] transition-all hover:shadow-xl cursor-pointer aspect-square h-full overflow-hidden rounded-[0.25rem] shadow-md bg-black/5 dark:bg-white/5">
                <Image
                  src={coverImage}
                  alt={`${title}-cover`}
                  placeholder="blur"
                  blurDataURL={coverImagePlaceholder}
                  fill
                  priority
                  quality={100}
                />

                <button
                  className="inset-0 grid-rows-1 grid-cols-1 bg-background/50 rounded-sm absolute z-10 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={togglePlaying}
                >
                  <CircularProgress className="col-span-full row-span-full" />
                  {playing ? (
                    <AccessibleIcon label="Pause">
                      <PauseIcon className="col-span-full row-span-full aspect-square w-6 scale-150" />
                    </AccessibleIcon>
                  ) : (
                    <AccessibleIcon label="Play">
                      <PlayIcon className="col-span-full row-span-full aspect-square w-6 scale-150" />
                    </AccessibleIcon>
                  )}
                </button>
              </div>
            </>
          )
        }}
      </AudioPlayer>
    </>
  )
}

export default Player
