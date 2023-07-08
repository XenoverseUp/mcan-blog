import Logo from "@/assets/svg/logo"
import { ImageResponse } from "next/server"

export const size = {
  width: 48,
  height: 48,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(<Logo />, {
    ...size,
  })
}
