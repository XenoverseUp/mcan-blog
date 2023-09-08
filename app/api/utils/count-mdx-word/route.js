import countMDXWord from "@/utils/countMDXWord"

/**
 * @param {Request} request
 */
export const POST = async request => {
  const { content } = await request.json()

  if (!content)
    return new Response(
      {
        success: false,
        error: "`content` field must be provided in the request body.",
      },
      { status: 400 },
    )

  const count = countMDXWord(content)
  return new Response(count, { status: 200 })
}
