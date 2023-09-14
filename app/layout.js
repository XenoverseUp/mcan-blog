import { Providers } from "@/app/providers"
import {
  space_mono,
  staff,
  staff_condensed,
  staff_wide,
} from "@/app/style/font"
import "@/app/style/globals.css"

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Can Durmus | Blog",
  description: "Hello my bud!",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "var(--background)",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${space_mono.variable} ${staff.variable} ${staff_condensed.variable} ${staff_wide.variable} bg-background font-staff w-full text-t-primary`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
