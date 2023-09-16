import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Sidebar from "@/components/composed/DashboardLayout/Sidebar"
import StatusBar from "@/components/composed/DashboardLayout/StatusBar"
import { getDashboardMeta } from "@/lib/dashboard"
import { UserRole } from "@prisma/client"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export const metadata = {
  title: "Can Durmus | Dashboard",
}

const DashboardLayout = async ({ children }) => {
  const session = await getServerSession(authOptions)

  if (session?.user) {
    if (session.user.role !== UserRole.ADMIN) redirect("/", "replace")
  } else redirect("/sign-in", "replace")

  const dashboardMeta = await getDashboardMeta()
  return (
    <div className="w-full h-screen grid grid-cols-[auto_1fr] grid-rows-[1fr_auto]">
      <Sidebar {...{ dashboardMeta }} className="row-span-full" />
      {children}
      <StatusBar {...{ dashboardMeta }} />
    </div>
  )
}
export default DashboardLayout
