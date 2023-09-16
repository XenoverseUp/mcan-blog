import { getDashboardMeta } from "@/lib/dashboard"

export const GET = async req => {
  const res = await getDashboardMeta()

  return new Response(JSON.stringify(res), { status: 200 })
}
