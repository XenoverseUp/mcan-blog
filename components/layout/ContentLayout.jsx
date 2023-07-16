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
  <div>
    <p>Content Layout</p>
    {children}
  </div>
)
