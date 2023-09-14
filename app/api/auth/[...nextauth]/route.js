import prisma from "@/lib/db/prisma"
import { compare } from "bcrypt"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

/** @type {import("next-auth").NextAuthOptions} */
export const authOptions = {
  providers: [
    Credentials({
      name: "Sign In",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        })
        if (!user) return null

        const passwordValid = await compare(credentials.password, user.password)
        if (!passwordValid) return null

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
          role: user.role,
        }
      },
    }),
  ],
  callbacks: {},
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
