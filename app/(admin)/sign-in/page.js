import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import BackButton from "@/components/composed/auth/BackButton"
import SignInForm from "@/components/composed/auth/SignInForm"
import Logo from "@/components/primitives/Logo"
import { UserRole } from "@prisma/client"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export const dynamic = "force-dynamic"

export default async function SignIn({ searchParams }) {
  const session = await getServerSession(authOptions)

  if (session) {
    if (session.user.role === UserRole.ADMIN) redirect("/dashboard")
    else redirect(searchParams.callback ?? "/")
  }

  return (
    <main className="w-full h-screen flex flex-col gap-8 items-center px-6 justify-center">
      <BackButton className="absolute top-4 left-4" />
      <SignInForm />
    </main>
  )
}
