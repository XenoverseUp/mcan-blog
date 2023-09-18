"use client"

import useKonamiCode from "@/hooks/useKonamiCode"
import { UserRole } from "@prisma/client"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"

export const SecretActions = () => {
  const router = useRouter()
  const pathName = usePathname()
  const encoded = encodeURI(pathName)

  const { status, data: session } = useSession()

  useKonamiCode(() => {
    if (status === "unauthenticated")
      router.push(`/sign-in?callback=${encoded}`)
    else if (
      status === "authenticated" &&
      session?.user?.role === UserRole.ADMIN
    )
      router.push(`/dashboard`)
  }, ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"])

  return <></>
}
