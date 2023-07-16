import { Inter, Red_Hat_Display } from "next/font/google"
import localFont from "next/font/local"

export const red_hat_display = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat",
  display: "swap",
})
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const apercu = localFont({
  src: [
    {
      path: "../../assets/font/apercu/Apercu Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/font/apercu/Apercu Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/font/apercu/Apercu Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-apercu",
})
