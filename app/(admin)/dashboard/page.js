import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { SignOut } from "@/components/primitives/Auth"
import Button from "@/components/primitives/Button"
import { UserRole } from "@prisma/client"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (session?.user) {
    if (session.user.role !== UserRole.ADMIN) redirect("/", "replace")
  } else redirect("/sign-in", "replace")

  return (
    <main className="space-y-4">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <Button>
        <SignOut />
      </Button>
    </main>
  )
}
