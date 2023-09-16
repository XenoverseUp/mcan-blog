"use client"

import { Provider as JotaiProvider } from "jotai"
import { SessionProvider } from "next-auth/react"

const Provider = ({ children, session }) => (
  <SessionProvider {...{ session }}>
    <JotaiProvider>{children}</JotaiProvider>
  </SessionProvider>
)

export default Provider
