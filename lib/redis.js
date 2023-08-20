import { Redis } from "@upstash/redis/nodejs"

const redis = Redis.fromEnv()

export default redis
