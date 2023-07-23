import { apercu, inter, red_hat_display } from "@/app/style/font"
import "@/app/style/globals.css"
import MainFooter from "@/components/layout/MainFooter"
import MainNavigation from "@/components/layout/MainNavigation"

export const metadata = {
  title: "Can Durmus | Blog",
  description: "Hello my bud!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${red_hat_display.variable} ${inter.variable} ${apercu.variable} flex h-screen w-full flex-col justify-between overflow-hidden bg-calm font-primary`}
      >
        <MainNavigation />
        {children}
        <MainFooter />
      </body>
    </html>
  )
}
