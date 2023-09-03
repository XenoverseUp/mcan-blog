"use client"

import ShareSheet from "@/components/composed/Post/ShareSheet"
import When from "@/components/helper/When"
import Button from "@/components/primitives/Button"
import useShare from "@/hooks/useShare"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import {
  DotsVerticalIcon,
  MixerVerticalIcon,
  QuoteIcon,
  Share2Icon,
} from "@radix-ui/react-icons"
import * as RadixPopover from "@radix-ui/react-popover"
import { Fragment, useState } from "react"

const Popover = () => {
  const { canNativelyShare, nativelyShare } = useShare({
    title: "Guthib",
    url: "https://guthib.com",
  })
  const [shareSheetOpen, setShareSheetOpen] = useState(false)

  return (
    <Fragment>
      <RadixPopover.Root>
        <RadixPopover.Trigger asChild>
          <Button variant="soft" className="aspect-square justify-center p-0">
            <AccessibleIcon label="More">
              <DotsVerticalIcon />
            </AccessibleIcon>
          </Button>
        </RadixPopover.Trigger>
        <RadixPopover.Portal>
          <RadixPopover.Content
            avoidCollisions
            hideWhenDetached
            align="end"
            collisionPadding={10}
            className="rounded-xl py-1 text-sm overflow-hidden bg-[#1B1A1A]"
            sideOffset={8}
          >
            <button
              onClick={
                canNativelyShare
                  ? nativelyShare
                  : () => alert("Browser doesn't support this API !")
              }
              className="whitespace-nowrap font-medium gap-2 items-center hover:bg-white/5 hover:text-accent focus-visible:text-accent focus-visible:bg-white/5 hover:opacity-100 focus-visible:opacity-100 opacity-90 transition w-full flex py-2 px-4"
            >
              <Share2Icon />
              <span>Share</span>
            </button>
            <button className="whitespace-nowrap font-medium gap-2 items-center hover:bg-white/5 hover:text-accent focus-visible:text-accent focus-visible:bg-white/5 hover:opacity-100 focus-visible:opacity-100 opacity-90 transition w-full flex py-2 px-4">
              <QuoteIcon />
              <span>References & Links</span>
            </button>
            <button className="whitespace-nowrap font-medium gap-2 items-center hover:bg-white/5 hover:text-accent focus-visible:text-accent focus-visible:bg-white/5 hover:opacity-100 focus-visible:opacity-100 opacity-90 transition w-full flex py-2 px-4">
              <MixerVerticalIcon />
              <span>Post Stats</span>
            </button>
          </RadixPopover.Content>
        </RadixPopover.Portal>
      </RadixPopover.Root>
      <When condition={!canNativelyShare}>
        <ShareSheet open={shareSheetOpen} setOpen={setShareSheetOpen} />
      </When>
    </Fragment>
  )
}

export default Popover
