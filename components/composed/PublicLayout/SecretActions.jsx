"use client"

import useKonamiCode from "@/hooks/useKonamiCode"
import { usePathname, useRouter } from "next/navigation"

export const SecretRedirect = () => {
  const router = useRouter()
  const pathName = usePathname()
  const encoded = encodeURI(pathName)
  useKonamiCode(
    () => router.push(`/sign-in?callback=${encoded}`),
    ["ArrowLeft", "ArrowRight"],
  )

  return <></>
}
