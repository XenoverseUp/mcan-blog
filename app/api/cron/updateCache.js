import Cache, { GUESTBOOK_COUNT } from "@/lib/cache"
import { GUESTBOOK_REFERRER } from "@/lib/guestbook"
import redis from "@/lib/redis"

/**
 * This method runs at 5AM everyday to update cache.
 */
export const GET = async () => {
  console.log(`\n\nUPDATING CACHE...\n\n`)
  Cache.set(GUESTBOOK_COUNT, await redis.lLen(GUESTBOOK_REFERRER))
}
