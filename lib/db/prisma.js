import { Post, PrismaClient, Publication } from "@prisma/client"

const prisma = new PrismaClient()

export { Post, Publication }
export default prisma
