import SessionProvider from "@/app/SessionProvider"
import {
  space_mono,
  staff,
  staff_condensed,
  staff_wide,
} from "@/app/style/font"
import "@/app/style/globals.css"
import { getServerSession } from "next-auth"

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Can Durmus | Blog",
  description: "Hello my bud!",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "var(--background)",
}

export default async function RootLayout({ children }) {
  const session = await getServerSession()

  return (
    <html lang="en" className="dark">
      <body
        className={`${space_mono.variable} ${staff.variable} ${staff_condensed.variable} ${staff_wide.variable} bg-background font-staff w-full text-t-primary`}
      >
        <SessionProvider {...{ session }}>{children}</SessionProvider>
      </body>
    </html>
  )
}
