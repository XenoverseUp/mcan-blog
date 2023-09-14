import { PostType, PrismaClient, Publication } from "@prisma/client"

const prisma = new PrismaClient()

export { PostType, Publication }
export default prisma
