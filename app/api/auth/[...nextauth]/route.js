import { login } from "@/lib/auth"
import prisma from "@/lib/db/prisma"
import { UserRole } from "@prisma/client"
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

        const user = await login(credentials.email, credentials.password)
        if (!user) return null

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
          role: user.role,
        }
      },
    }),
  ],
  callbacks: {
    session: ({ token, session }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
        },
      }
    },
    jwt: ({ token, user }) => {
      if (!!user) {
        return { ...token, id: user.id, role: user.role }
      }
      return token
    },
  },
  pages: {
    signIn: "/sign-in",
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
