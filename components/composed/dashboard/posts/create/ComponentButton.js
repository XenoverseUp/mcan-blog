"use client"

import { View } from "@/components/composed/dashboard/posts/create/ComponentBrowser"
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard"
import cx from "@/utils/cx"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import { PlusIcon } from "@radix-ui/react-icons"
import { useState } from "react"

/** @param {{data: import("@/components/composed/dashboard/posts/create/components").MarkdownComponent}} props */
const ComponentButton = ({ data, setComponent, setView, i }) => {
  const [docsHover, setDocsHover] = useState(false)
  const [copiedText, copy] = useCopyToClipboard()

  return (
    <div
      style={{
        "--i": i,
      }}
      className={cx(
        "component-button relative isolate flex items-center border h-10 border-border rounded-lg hover:bg-white/[0.025] transition-[background-color,border]",
        {
          "!bg-violet-400/10 border-violet-400": docsHover,
        },
      )}
    >
      <button
        className={cx(
          "flex items-center gap-4 w-full h-full pl-3 text-cool-lime-300 transition-colors",
          { "text-white": docsHover },
        )}
        onClick={() => {
          setComponent(data.name)
          setView(View.DOCS)
        }}
      >
        {data.icon}
        <span className="text-sm font-medium">{data.name}</span>
      </button>
      <button
        className="absolute top-1/2 z-10 -translate-y-1/2 right-0 p-3 text-t-secondary hover:text-violet-400 transition-colors"
        onMouseEnter={() => {
          setDocsHover(true)
        }}
        onMouseLeave={() => {
          setDocsHover(false)
        }}
        onClick={() => copy(data.template)}
      >
        <AccessibleIcon label="See documentation">
          <PlusIcon />
        </AccessibleIcon>
      </button>
    </div>
  )
}

export default ComponentButton
