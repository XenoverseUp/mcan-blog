import prisma from "@/lib/db/prisma"
import { compare } from "bcrypt"

export const login = async (email, password) => {
  const user = await prisma.user.findUnique({
    where: { email },
  })
  if (!user) return null

  const passwordValid = await compare(password, user.password)
  if (!passwordValid) return null

  return user
}

export const getUserRole = async email => {
  const user = await prisma.user.findUnique({
    where: { email },
  })
  if (!user) return null

  return user.role
}
