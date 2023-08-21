import { getPaginatedEntries } from "@/lib/guestbook"
import { try_ } from "@/utils/try"

/**
 * @param {Request} request
 */
export const GET = async request => {
  const url = new URL(request.url)
  const page = parseInt(url.searchParams.get("page"))
  const limit = parseInt(url.searchParams.get("limit"))

  const [err, data] = await try_(
    getPaginatedEntries,
    isNaN(page) ? 0 : page,
    isNaN(limit) ? 20 : limit,
  )
  if (err) return new Response(err, { status: err.errorCode ?? 500 })
  return new Response(JSON.stringify(data), { status: 200 })
}
