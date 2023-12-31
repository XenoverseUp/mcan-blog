import { getTrack } from "@/lib/spotify"
import { headers } from "next/headers"

/**
 *
 * @param {Request} req
 * @returns {Response}
 */
export async function GET(req) {
  const headersList = headers()
  const res = await getTrack(headersList.get("track-id"))

  return new Response(JSON.stringify(res), { status: 200 })
}
