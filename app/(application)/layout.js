import Sidebar from "@/components/layout/Sidebar"
import "../globals.css"
import { Hanken_Grotesk } from "next/font/google"

const grotesk = Hanken_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "mcan's blog",
  description: "Hello my bud!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${grotesk.className} w-full h-screen flex bg-primary-400`}
      >
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
