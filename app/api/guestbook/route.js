import { createSignature, getAllEntries } from "@/lib/guestbook"
import { try_ } from "@/utils/try"

/** @param {Request} _ */
export const GET = async _ => {
  const [err, data] = await try_(getAllEntries)
  if (err) return new Response(err, { status: err.errorCode ?? 500 })
  return new Response(JSON.stringify(data), { status: 200 })
}

/** @param {Request} request */
export const POST = async request => {
  const body = await request.json()
  const [err, data] = await try_(createSignature, body)

  if (err) return new Response(err, { status: err.errorCode ?? 500 })
  return new Response(JSON.stringify(data), { status: 200 })
}
