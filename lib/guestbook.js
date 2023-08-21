import Cache, { GUESTBOOK_COUNT } from "@/lib/cache"
import {
  OutOfRangeError,
  RedisConnectionFailedError,
  ValidationError,
} from "@/lib/error"
import redis from "@/lib/redis"
import { Signature } from "@/lib/schema"
import { z } from "zod"

export const GUESTBOOK_REFERRER = "guestbook"
export const COUNT_REFERRER = "guestbook_count"

/** @typedef {z.infer<typeof Signature>} Signature */

/**
 * @typedef {Object} PaginatedSignature
 * @property {number} currentPage
 * @property {number} totalPage
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
 * @returns {{count: number, entries: Signature[]}} An array of guestbook signature objects. */
export const getAllEntries = async () => {
  if (!redis) throw new RedisConnectionFailedError()
  if (Cache.get(GUESTBOOK_COUNT) == undefined)
    Cache.set(GUESTBOOK_COUNT, parseInt(await redis.llen(GUESTBOOK_REFERRER)))

  const entries = await redis.lrange(GUESTBOOK_REFERRER, 0, -1)

  return { count: Cache.get(GUESTBOOK_COUNT), entries }
}

/**
 * Return paginated guestbook entries for infinite scrolling.
 * @async
 * @param {number} page
 * @param {number} limit
 * @throws {RedisConnectionFailedError|OutOfRangeError}
 * @returns {PaginatedSignature}
 */
export const getPaginatedEntries = async (page, limit) => {
  if (!redis) throw new RedisConnectionFailedError()
  if (Cache.get(GUESTBOOK_COUNT) == undefined)
    Cache.set(GUESTBOOK_COUNT, parseInt(await redis.llen(GUESTBOOK_REFERRER)))

  const entryCount = Cache.get(GUESTBOOK_COUNT)
  const rem = entryCount % limit
  const totalFullPage = (entryCount - rem) / limit
  const pageLimit = totalFullPage + (rem ? 1 : 0)

  if (page >= pageLimit)
    throw new OutOfRangeError(
      "Page parameters you passed exceeds the total number of pages.",
      404,
    )

  const data = await redis.lrange(
    GUESTBOOK_REFERRER,
    page * limit,
    (page + 1) * limit - 1,
  )

  return {
    currentPage: page,
    totalPage: pageLimit,
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
  }
}

/**
 * @async
 * @param {Pick<Signature, "name" | "content">} signature
 * @throws {ValidationError|RedisConnectionFailedError}
 * @returns {Signature}
 */
export const createSignature = async ({ name, content }) => {
  if (!redis) throw new RedisConnectionFailedError()
  if (Cache.get(GUESTBOOK_COUNT) == undefined)
    Cache.set(GUESTBOOK_COUNT, parseInt(await redis.llen(GUESTBOOK_REFERRER)))

  /** @type {Signature} */
  const signature = { name, content, createdAt: new Date() }

  const result = Signature.safeParse(signature)
  if (!result.success) throw new ValidationError(result?.error)

  await redis.lpush(GUESTBOOK_REFERRER, JSON.stringify(result.data))
  await redis.incr(COUNT_REFERRER)
  Cache.set(GUESTBOOK_COUNT, Cache.get(GUESTBOOK_COUNT) + 1)

  return { success: true, data: result.data }
}
