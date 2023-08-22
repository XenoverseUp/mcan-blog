import { createClient } from "redis"

const redis = createClient(
  process.env.NODE_ENV === "development"
    ? undefined
    : {
        url: process.env.REDIS_URL,
      },
)

redis.on("error", function (err) {
  throw err
})
;(async () => await redis.connect())()

export default redis
