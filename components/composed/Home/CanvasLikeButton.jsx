"use client"

import useBoolean from "@/hooks/useBoolean"
import cx from "@/utils/cx"
import { HeartFilledIcon } from "@radix-ui/react-icons"
import { useState } from "react"

const CanvasLikeButton = () => {
  const [liked, toggleLiked] = useBoolean(false)
  const [like, setLike] = useState(231)

  return (
    <button
      onClick={() => {
        toggleLiked()
        setLike(like => (liked ? like - 1 : like + 1))
      }}
      className={cx(
        "flex select-none items-center justify-center gap-[7px] rounded-full border px-[10px] py-[4px] font-staff-condensed transition-colors",
        {
          "border-red-400 bg-red-400/40": liked,
        },
      )}
    >
      <HeartFilledIcon
        className={cx("text-red-400", { "text-red-400": liked })}
      />
      <span className="text-sm">{like}</span>
    </button>
  )
}
export default CanvasLikeButton
