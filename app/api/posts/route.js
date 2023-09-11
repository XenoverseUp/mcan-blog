import { createPost, getAllPosts } from "@/lib/post"
import { try_ } from "@/utils/try"

/**
 * Retrieves metadata for specified filters.
 * @param {Request} req
 * @returns {Response}
 *
 * &page={number}
 * &limit={number}
 * &publication={"opinions"|"tutorials"|"snippets"}
 * &type={"insightful"|"controversial"|...}
 *
 */
export async function GET(request) {
  const posts = await getAllPosts()
  return new Response(JSON.stringify(posts), { status: 200 })
}

/**
 *
 * @param {Request} req
 */
export async function POST(request) {
  const [parseErr, body] = await try_(request.json)
  if (parseErr) return new Response(parseErr, { status: 400 })

  const [err, result] = await try_(createPost, body)

  if (err) return new Response(err, { status: err.errorCode ?? 500 })

  return new Response(JSON.stringify(result), { status: 200 })
}
