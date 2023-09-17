export const Forbidden = () =>
  new Response(JSON.stringify({ err: "Forbidden" }), {
    status: 403,
  })

export const Unauthorized = () =>
  new Response(JSON.stringify({ err: "Unauthorized" }), {
    status: 401,
  })
