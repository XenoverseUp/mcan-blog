"use client"

import * as RadixTooltip from "@radix-ui/react-tooltip"
const Tooltip = ({ children, content }) => (
  <RadixTooltip.Provider>
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          side="top"
          className="z-50 bg-zinc-100 text-background text-xs px-2 pt-[0.2rem] pb-1 rounded-lg will-change-[transform,opacity]"
          sideOffset={6}
        >
          {content}
          <RadixTooltip.Arrow className="fill-zinc-100" />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  </RadixTooltip.Provider>
)

export default Tooltip
