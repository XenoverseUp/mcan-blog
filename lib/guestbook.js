import {
  RedisConnectionFailedError,
  UnexpectedError,
  ValidationError,
} from "@/lib/errors"
import redis from "@/lib/redis"
import { Signature } from "@/lib/schemas"
import { z } from "zod"

const REFERRER = "guestbook"
const COUNT_REF = "guestbook_count"

/**
 * @typedef {z.infer<typeof Signature>} Signature
 */

/** Returns all guestbook signatures at once.
 * @async
 * @throws {RedisConnectionFailedError} when the connection to Redis has failed.
 * @returns {{count: number, entries: Signature[]}} An array of guestbook signature objects. */
export const getAllEntries = async () => {
  if (!redis) throw new RedisConnectionFailedError()

  /** @type {Signature[]} */
  const entries = await redis.lrange(REFERRER, 0, -1)
  const count = await getEntryCount()

  return { count, entries }
}

/**
 * !TODO
 * @param {number} page
 * @param {number} count
 */
export const getPaginatedEntries = async (page = 0, count = 20) => {
  if (!redis) throw new RedisConnectionFailedError()
}

/**
 * Returns guestbook signature count.
 * @throws {RedisConnectionFailedError}
 * @returns {number}
 */
export const getEntryCount = async () => {
  if (!redis) throw new RedisConnectionFailedError()
  return parseInt(await redis.get(COUNT_REF)) ?? 0
}

/**
 *
 * @param {Pick<Signature, "name" | "content">} signature
 * @throws {ValidationError|RedisConnectionFailedError}
 * @returns {Signature}
 */
export const createSignature = async ({ name, content }) => {
  if (!redis) throw new RedisConnectionFailedError()

  /** @type {Signature} */
  const signature = { name, content, createdAt: new Date() }

  const result = Signature.safeParse(signature)
  if (!result.success) throw new ValidationError(result?.error)

  redis.lpush(REFERRER, JSON.stringify(result.data))
  redis.incr(COUNT_REF)

  return { success: true, data: result.data }
}
