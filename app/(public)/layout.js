import MainFooter from "@/components/composed/PublicLayout/MainFooter"
import MainNavigation from "@/components/composed/PublicLayout/MainNavigation"
import { SecretRedirect } from "@/components/composed/PublicLayout/SecretActions"

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Can Durmus | Blog",
  description: "Hello my bud!",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "var(--background)",
}

export default async function Layout({ children }) {
  return (
    <div
      scroll-container="true"
      className="h-[100dvh] w-full overflow-auto relative"
    >
      <SecretRedirect />
      <MainNavigation />
      {children}
      <MainFooter />
    </div>
  )
}
