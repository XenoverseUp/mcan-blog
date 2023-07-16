"use client"

import Reload from "@/assets/svg/reload"
import Aa from "@/components/canvas/Aa"
import cx from "@/utils/cx"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import { useRef } from "react"

const CanvasShowcase = ({ className }) => {
  const art = useRef(null)
  const reload = useRef(null)

  return (
    <div
      className={cx(
        className,
        "relative grid place-items-center overflow-hidden rounded-3xl bg-red-400 shadow-xl"
      )}
    >
      <Aa
        ref={art}
        width={1500}
        height={540}
        count={400}
        radius={0.02}
        gridSize={30}
        className="absolute bottom-0 top-0 h-full w-full duration-1000"
      />
      <button
        aria-label="Reload"
        className="group absolute right-4 top-4 grid aspect-square w-7 place-items-center rounded-xl bg-black/50 transition-colors hover:bg-white focus:ring-2"
        onClick={() => {
          art.current.refresh()
          reload.current.animate(
            [
              { transform: "rotate(0) scale(1)" },
              { transform: "rotate(60deg) scale(1.025)" },
              { transform: "rotate(0) scale(1)" },
            ],
            { duration: 200, iterations: 1, easing: "ease-out" }
          )
        }}
      >
        <AccessibleIcon label="Reload">
          <Reload
            ref={reload}
            className="aspect-square w-4 fill-white transition-colors group-hover:fill-black"
          />
        </AccessibleIcon>
      </button>
    </div>
  )
}

export default CanvasShowcase
