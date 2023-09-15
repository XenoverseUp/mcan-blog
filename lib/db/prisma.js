import { PostType, PrismaClient, Publication } from "@prisma/client"

/** @type {PrismaClient} */
let prisma

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export { PostType, Publication }
export default prisma
