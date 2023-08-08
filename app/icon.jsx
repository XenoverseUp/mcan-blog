import Logo from "@/components/primitives/Logo"
import { ImageResponse } from "next/server"

export const size = {
  width: 27,
  height: 32,
}
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(<Logo />, {
    ...size,
  })
}
