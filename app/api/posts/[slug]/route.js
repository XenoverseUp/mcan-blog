import { NotFoundError } from "@/lib/error"
import { getSinglePost } from "@/lib/post"
import { try_ } from "@/utils/try"

/**
 * @param {Request} request
 * @returns {Response}
 *
 */
export async function GET(request, { params }) {
  const [err, post] = await try_(getSinglePost, params.slug)

  if (err) {
    const error = new NotFoundError("No post is found with the given slug.")
    return new Response(error, {
      status: error.errorCode,
    })
  }

  return new Response(JSON.stringify(post), { status: 200 })
}
