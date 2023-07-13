import Sidebar from "@/components/layout/Sidebar"
import "./globals.css"
import { Inter, Red_Hat_Display } from "next/font/google"

export const red_hat_display = Red_Hat_Display({ subsets: ["latin"] })
export const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Can Durmus | Blog",
  description: "Hello my bud!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${red_hat_display.className} ${inter.className} w-full h-screen flex bg-primary-400 overflow-hidden opacity-0 transition-opacity`}
      >
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
