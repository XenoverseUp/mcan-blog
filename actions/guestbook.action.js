"use server"

import { getPaginatedSignatures } from "@/lib/guestbook"

/** @returns {import("@/lib/guestbook").PaginatedSignature} */
export const fetchSignatures = async (page = 0) => {
  const paginatedData = await getPaginatedSignatures(page, 3)

  return paginatedData
}
