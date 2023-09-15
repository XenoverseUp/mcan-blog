import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import BackButton from "@/components/composed/Auth/BackButton"
import SignInForm from "@/components/composed/Auth/SignInForm"
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
      <header className="text-center space-y-2">
        <Logo className="w-10 mb-4 mx-auto" shadow />
        <h1 className="font-staff-wide text-xl">Sign In</h1>
        <p className="text-sm text-t-secondary">Sign in to access dashboard.</p>
      </header>
      <SignInForm />
    </main>
  )
}
