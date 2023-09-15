import { getDashboardData } from "@/lib/dashboard"

export const GET = async req => {
  const res = await getDashboardData()

  return new Response(JSON.stringify(res), { status: 200 })
}
