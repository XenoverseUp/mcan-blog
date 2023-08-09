"use client"

import Chip from "@/components/primitives/Chip"
import subdivide from "@/utils/subdivide"
import clsx from "clsx"

const ChipSlider = ({ chips }) => {
  const divisions = subdivide(chips, 3)

  return (
    <div className="relative flex flex-col gap-[6px] overflow-hidden before:absolute before:bottom-0 before:left-0 before:top-0 before:z-10 before:w-16 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:bottom-0 after:right-0 after:top-0 after:z-10 after:w-16 after:bg-gradient-to-l after:from-background after:to-transparent">
      {divisions.map((chipset, i) => (
        <div
          key={`chipset-${i}`}
          className={clsx("relative flex h-auto gap-1", {
            "-left-1/2": i % 2,
          })}
        >
          {chipset.map(({ name, color }, j) => (
            <Chip key={name + i + j} {...{ color }}>
              {name}
            </Chip>
          ))}
        </div>
      ))}
    </div>
  )
}
export default ChipSlider
