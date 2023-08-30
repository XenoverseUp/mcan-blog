import localFont from "next/font/local"

// export const space_mono = Space_Mono({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-space-mono",
//   display: "swap",
// })

export const space_mono = localFont({
  src: [
    {
      path: "../../assets/font/Space Mono/SpaceMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/font/Space Mono/SpaceMono-Bold.ttf",
      weight: "bold",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-mono",
})

export const staff = localFont({
  src: [
    {
      path: "../../assets/font/Staff/Staff-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/font/Staff/Staff-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../assets/font/Staff/Staff-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-staff",
})

export const staff_wide = localFont({
  src: [
    {
      path: "../../assets/font/Staff Wide/StaffWide-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-staff-wide",
})

export const staff_condensed = localFont({
  src: [
    {
      path: "../../assets/font/Staff Condensed/StaffCondensed-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-staff-condensed",
})
