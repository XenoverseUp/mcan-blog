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
        "grid place-items-center shadow-xl bg-red-400 rounded-3xl overflow-hidden relative"
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
        className="focus:ring-2 transition-colors group hover:bg-white bg-black/50 w-7 aspect-square grid place-items-center rounded-xl absolute top-4 right-4"
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
            className="w-4 aspect-square fill-white group-hover:fill-black transition-colors"
          />
        </AccessibleIcon>
      </button>
    </div>
  )
}

export default CanvasShowcase
