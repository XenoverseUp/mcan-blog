import { ValidationError } from "@/lib/error"
import { getPaginatedEntries } from "@/lib/guestbook"
import { PaginationParameters } from "@/lib/schema"
import { try_ } from "@/utils/try"

/**
 * @param {Request} request
 */
export const GET = async request => {
  const url = new URL(request.url)
  const result = PaginationParameters.safeParse({
    page: url.searchParams.get("page") ?? undefined,
    limit: url.searchParams.get("limit") ?? undefined,
  })

  if (!result.success) {
    const error = new ValidationError(result?.error)

    return new Response(error, { status: error.errorCode })
  }

  const [err, data] = await try_(
    getPaginatedEntries,
    result.data.page,
    result.data.limit,
  )

  if (err) return new Response(err, { status: err.errorCode ?? 500 })
  return new Response(JSON.stringify(data), { status: 200 })
}
