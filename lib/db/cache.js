import redis from "@/lib/db/redis"
import { GUESTBOOK_REFERRER } from "@/lib/guestbook"

/** @type {Map}  */
const Cache = new Map()
export const GUESTBOOK_COUNT = "guestbook_count"

export const fetchGuestbookCount = async () => {
  if (Cache.get(GUESTBOOK_COUNT) == undefined) {
    Cache.set(GUESTBOOK_COUNT, parseInt(await redis.lLen(GUESTBOOK_REFERRER)))
  }
}

export default Cache
