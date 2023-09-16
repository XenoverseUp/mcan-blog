import Provider from "@/app/Provider"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
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
  const session = await getServerSession(authOptions)

  return (
    <html lang="en" className="dark">
      <body
        className={`${space_mono.variable} ${staff.variable} ${staff_condensed.variable} ${staff_wide.variable} bg-background font-staff w-full text-t-primary`}
      >
        <Provider {...{ session }}>{children}</Provider>
      </body>
    </html>
  )
}
