"use client"

import Wrapper from "@/components/ui/Wrapper"
import { useParams } from "next/navigation"
import { Fragment } from "react"

export default function ConditionalLayout({ children }) {
  const params = useParams()
  const condition = params.hasOwnProperty("slug")
  return (
    <Wrapper element={condition ? Fragment : ContentLayout}>{children}</Wrapper>
  )
}

const ContentLayout = ({ children }) => (
  <div className="h-full w-full overflow-y-auto overflow-x-hidden">
    <nav className="flex h-16 w-full items-center justify-between border-b border-border px-10">
      amk
    </nav>
    {children}
  </div>
)
