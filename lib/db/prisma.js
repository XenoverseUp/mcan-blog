import { PrismaClient } from "@prisma/client"

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

export const Resources = {
  POST: "POST",
  SNIPPET: "SNIPPET",
  DASHBOARD_META: "DASHBOARD_META",
}

export default prisma
