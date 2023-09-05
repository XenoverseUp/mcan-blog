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
export function GET(req) {
  return new Response("blog", { status: 200 })
}
