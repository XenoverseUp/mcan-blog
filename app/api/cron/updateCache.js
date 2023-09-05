import Cache, { GUESTBOOK_COUNT } from "@/lib/db/cache"
import redis from "@/lib/db/redis"
import { GUESTBOOK_REFERRER } from "@/lib/guestbook"

/**
 * This method runs at 5AM everyday to update cache.
 */
export const GET = async () => {
  console.log(`\n\nUPDATING CACHE...\n\n`)
  Cache.set(GUESTBOOK_COUNT, await redis.lLen(GUESTBOOK_REFERRER))
}
