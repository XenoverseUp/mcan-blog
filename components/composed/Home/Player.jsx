"use client"

import Sine from "@/components/canvas/Sine"
import AudioPlayer from "@/components/primitives/AudioPlayer"
import CircularProgress from "@/components/primitives/CircularProgress"
import cx from "@/utils/cx"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import Image from "next/image"
import { useEffect } from "react"

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
                  className={cx(
                    "inset-0 grid-rows-1 grid-cols-1 bg-background/50 rounded-sm absolute z-10 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity",
                    {
                      "opacity-100": playing,
                    },
                  )}
                  onClick={togglePlaying}
                >
                  <CircularProgress
                    start={playing}
                    duration={29}
                    className={{
                      base: cx(
                        "col-span-full row-span-full transition-opacity duration-200",
                        {
                          "opacity-0": !playing,
                        },
                      ),
                      thumb: "fill-white/40 stroke-white/75 stroke-1",
                      track: "fill-cool-lime-300",
                    }}
                  />
                  {playing ? (
                    <AccessibleIcon label="Pause">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="col-span-full row-span-full aspect-square w-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </AccessibleIcon>
                  ) : (
                    <AccessibleIcon label="Play">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="col-span-full row-span-full aspect-square w-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                          clipRule="evenodd"
                        />
                      </svg>
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
