import { apercu, inter, red_hat_display } from "@/app/style/font"
import "@/app/style/globals.css"
import ConditionalLayout from "@/components/layout/ContentLayout"
import Sidebar from "@/components/layout/Sidebar"

export const metadata = {
  title: "Can Durmus | Blog",
  description: "Hello my bud!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${red_hat_display.variable} ${inter.variable} ${apercu.variable} bg-calm flex h-screen w-full overflow-hidden font-primary opacity-0 transition-opacity`}
      >
        <Sidebar />
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}
