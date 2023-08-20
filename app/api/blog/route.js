/**
 *
 * @param {Request} req
 * @returns {Response}
 */
export function GET(req) {
  return new Response("blog", { status: 200 })
}
