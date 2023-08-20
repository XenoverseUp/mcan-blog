import { getTopTracks } from "@/lib/spotify"

/**
 *
 * @param {Request} req
 * @returns {Response}
 */
export async function GET(req) {
  const res = await getTopTracks()

  return new Response(JSON.stringify(res), { status: 200 })
}
