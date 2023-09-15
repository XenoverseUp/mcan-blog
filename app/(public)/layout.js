import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import MainFooter from "@/components/composed/Layout/MainFooter"
import MainNavigation from "@/components/composed/Layout/MainNavigation"
import { SecretRedirect } from "@/components/composed/Layout/SecretActions"
import When from "@/components/helper/When"
import { SignIn, SignOut } from "@/components/primitives/Auth"
import { UserRole } from "@prisma/client"
import { getServerSession } from "next-auth"

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Can Durmus | Blog",
  description: "Hello my bud!",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "var(--background)",
}

export default async function Layout({ children }) {
  const session = await getServerSession(authOptions)

  return (
    <div
      scroll-container="true"
      className="h-[100dvh] w-full overflow-auto relative"
    >
      <SecretRedirect />
      <MainNavigation
        announce={
          session ? (
            <div className="flex gap-4">
              <pre>{JSON.stringify(session)}</pre>
              <When condition={session.user.role !== UserRole.ADMIN}>
                <SignOut />
              </When>
            </div>
          ) : undefined
        }
      />
      {children}
      <MainFooter />
    </div>
  )
}
