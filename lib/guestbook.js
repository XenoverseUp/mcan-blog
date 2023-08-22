import Cache, { GUESTBOOK_COUNT, fetchGuestbookCount } from "@/lib/cache"
import {
  OutOfRangeError,
  RedisConnectionFailedError,
  ValidationError,
} from "@/lib/error"
import redis from "@/lib/redis"
import { Signature } from "@/lib/schema"

export const GUESTBOOK_REFERRER = "guestbook"
export const COUNT_REFERRER = "guestbook_count"

/**
 * @typedef {Object} PaginatedSignature
 * @property {number} currentPage
 * @property {number} totalPage
 * @property {number} totalSignature
 * @property {number} limit
 * @property {boolean} hasNextPage
 * @property {string|null} nextPageURL
 * @property {boolean} hasPreviousPage
 * @property {string|null} previousPageURL
 * @property {Signature[]} data
 */

/** Returns all guestbook signatures at once.
 * @async
 * @throws {RedisConnectionFailedError} when the connection to Redis has failed.
 * @returns {Promise<{count: number, entries: Signature[]}>} An array of guestbook signature objects. */
export const getAllEntries = async () => {
  if (!redis) throw new RedisConnectionFailedError()
  /** @type {Signature[]} */
  const entries = await redis.lrange(GUESTBOOK_REFERRER, 0, -1)

  return { count: await getSignatureCount(), entries }
}

/**
 * Return paginated guestbook entries for infinite scrolling.
 * @async
 * @param {number} page
 * @param {number} limit
 * @throws {RedisConnectionFailedError|OutOfRangeError}
 * @returns {Promise<PaginatedSignature>}
 */
export const getPaginatedSignatures = async (page, limit) => {
  if (!redis) throw new RedisConnectionFailedError()

  const entryCount = await getSignatureCount()
  const rem = entryCount % limit
  const totalFullPage = (entryCount - rem) / limit
  const pageLimit = totalFullPage + (rem ? 1 : 0)

  if (page >= pageLimit)
    throw new OutOfRangeError(
      "Page parameters you passed exceeds the total number of pages.",
    )

  /** @type {Signature[]} */
  const data = await redis.lrange(
    GUESTBOOK_REFERRER,
    page * limit,
    (page + 1) * limit - 1,
  )

  return JSON.parse(
    JSON.stringify({
      currentPage: page,
      totalPage: pageLimit,
      totalSignature: entryCount,
      limit,
      hasNextPage: page != pageLimit - 1,
      nextPageURL:
        page != pageLimit - 1
          ? `/api/guestbook/pagination?page=${page + 1}&limit=${limit}`
          : null,
      hasPreviousPage: page != 0,
      previousPageURL:
        page != 0
          ? `/api/guestbook/pagination?page=${page - 1}&limit=${limit}`
          : null,
      data,
    }),
  )
}

/**
 * @async
 * @throws {RedisConnectionFailedError}
 * @returns {Promise<number>} the number of entries in the guestbook from the cache.
 */
export const getSignatureCount = async () => {
  if (!redis) throw new RedisConnectionFailedError()
  await fetchGuestbookCount()
  return Cache.get(GUESTBOOK_COUNT)
}

/**
 * @async
 * @param {Pick<Signature, "name" | "content">} signature
 * @throws {ValidationError|RedisConnectionFailedError}
 * @returns {Promise<{success: boolean, data: Signature}>}
 */
export const createSignature = async ({ name, content }) => {
  if (!redis) throw new RedisConnectionFailedError()

  /** @type {Signature} */
  const signature = { name, content, createdAt: new Date() }

  const result = Signature.safeParse(signature)
  if (!result.success) throw new ValidationError(result?.error)

  await redis.lpush(GUESTBOOK_REFERRER, JSON.stringify(result.data))
  await redis.incr(COUNT_REFERRER)
  Cache.set(GUESTBOOK_COUNT, (await getSignatureCount()) + 1)

  return { success: true, data: result.data }
}
