import { createSignature, getAllEntries } from "@/lib/guestbook"
import { try_ } from "@/lib/utils/try"

/** @param {Request} _ */
export const GET = async _ => {
  const [err, data] = await try_(getAllEntries)
  if (err) return new Response(err, { status: err.errorCode ?? 500 })
  return new Response(JSON.stringify(data), { status: 200 })
}

/** @param {Request} request */
export const POST = async request => {
  const [parseErr, body] = await try_(request.json)
  if (parseErr) return new Response(parseErr, { status: 400 })

  const [err, data] = await try_(createSignature, body)

  if (err) return new Response(err, { status: err.errorCode ?? 500 })
  return new Response(JSON.stringify(data), { status: 200 })
}
