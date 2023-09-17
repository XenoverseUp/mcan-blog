import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getDashboardMeta } from "@/lib/dashboard"
import { Resources } from "@/lib/db/prisma"
import rbac from "@/lib/rbac"
import { Forbidden, Unauthorized } from "@/lib/response"
import { UserRole } from "@prisma/client"
import { getServerSession } from "next-auth"

export const GET = async () => {
  const session = await getServerSession(authOptions)

  if (!session) return Unauthorized()

  const permission = rbac
    .can(session?.user?.role ?? UserRole.READER)
    .read(Resources.DASHBOARD_META)

  if (!permission.granted) return Forbidden()

  const res = await getDashboardMeta()
  return new Response(JSON.stringify(res), { status: 200 })
}
