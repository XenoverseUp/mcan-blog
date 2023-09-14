"use client"

import { signIn, signOut } from "next-auth/react"

const SignIn = () => <button onClick={() => signIn()}>Sign In</button>
const SignOut = () => <button onClick={() => signOut()}>Sign Out</button>

export { SignIn, SignOut }
