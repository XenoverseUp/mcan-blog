"use client"

import { signOut } from "next-auth/react"
import Link from "next/link"

const SignIn = () => <Link href="/sign-in">Sign In</Link>
const SignOut = () => <button onClick={() => signOut()}>Sign Out</button>

const SignOutButton = ({ children, ...rest }) => (
  <button {...rest} onClick={signOut}>
    {children}
  </button>
)

export { SignIn, SignOut, SignOutButton }
