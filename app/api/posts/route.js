import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { Resources } from "@/lib/db/prisma"
import { createPost, getAllPosts } from "@/lib/post"
import rbac from "@/lib/rbac"
import { Forbidden, Unauthorized } from "@/lib/response"
import { try_ } from "@/utils/try"
import { UserRole } from "@prisma/client"
import { getServerSession } from "next-auth"

/**
 * Retrieves metadata for specified filters.
 * @param {Request} request
 * @returns {Response}
 *
 * &published={"1"|"0"}
 * &page={number}
 * &limit={number}
 * &publication={"opinions"|"tutorials"|"snippets"}
 * &type={"insightful"|"controversial"|...}
 *
 */
export async function GET(request) {
  const url = new URL(request.url)
  const published = url.searchParams.get("published")

  const posts = await getAllPosts({
    where: {
      draft: published === null ? undefined : published === "0" ? true : false,
    },
  })
  return new Response(JSON.stringify(posts), { status: 200 })
}

/**
 *
 * @param {Request} req
 */
export async function POST(request) {
  const session = await getServerSession(authOptions)

  if (!session) return Unauthorized()

  const permission = rbac
    .can(session?.user?.role ?? UserRole.READER)
    .create(Resources.POST)

  if (!permission.granted) return Forbidden()

  const [parseErr, body] = await try_(request.json)
  if (parseErr) return new Response(parseErr, { status: 400 })

  const [err, result] = await try_(createPost, body)

  if (err) return new Response(err, { status: err.errorCode ?? 500 })

  return new Response(JSON.stringify(result), { status: 201 })
}
