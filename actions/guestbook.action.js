"use server"

import { createSignature, getPaginatedSignatures } from "@/lib/guestbook"

/** @returns {import("@/lib/guestbook").PaginatedSignature} */
export const fetchSignatures = async (page = 0) => {
  const paginatedData = await getPaginatedSignatures(page, 20)

  return paginatedData
}

/**
 *
 * @param {Pick<import("@/lib/schema").Signature, "name" | "content">} form
 */
export const create = async ({ name, content }) => {
  console.log({ name, content })
  return await createSignature({ name, content })
}
