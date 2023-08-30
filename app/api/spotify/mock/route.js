import { getMockTrack } from "@/lib/spotify"

/**
 *  Returns mock track data synchronously.
 *  @param {Request} _
 *  @returns {Response}
 */
export function GET(_) {
  const res = getMockTrack()

  return new Response(JSON.stringify(res), { status: 200 })
}
