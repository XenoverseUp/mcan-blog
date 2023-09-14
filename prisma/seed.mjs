import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"

const prisma = new PrismaClient()

async function main() {
  const password = await hash("test", 12)

  const admin = await prisma.user.upsert({
    where: { email: "admin@test.com" },
    update: {},
    create: {
      email: "admin@test.com",
      name: "Can Durmus",
      password,
      role: "ADMIN",
    },
  })

  const editor = await prisma.user.upsert({
    where: { email: "editor@test.com" },
    update: {},
    create: {
      email: "editor@test.com",
      name: "Tufan Kurt",
      password,
      role: "EDITOR",
    },
  })

  const reader = await prisma.user.upsert({
    where: { email: "reader@test.com" },
    update: {},
    create: {
      email: "reader@test.com",
      name: "Homer Hosbey",
      password,
    },
  })

  console.log({ admin, editor, reader })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
