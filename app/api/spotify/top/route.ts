import { getTopTracks } from "@/lib/spotify"

export async function GET(req: Request) {
  const res = await getTopTracks()

  return new Response(JSON.stringify(res), { status: 200 })
}
