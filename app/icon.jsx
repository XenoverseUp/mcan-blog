import Logo from "@/assets/svg/ui/Logo.svg"
import { ImageResponse } from "next/server"

export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(<Logo />, {
    ...size,
  })
}
