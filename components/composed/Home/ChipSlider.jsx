"use client"

import Chip from "@/components/primitives/Chip"

const ChipSlider = ({ chips }) => {
  return (
    <div>
      {chips.map(({ name, color }) => (
        <Chip {...{ color }}>{name}</Chip>
      ))}
    </div>
  )
}
export default ChipSlider
