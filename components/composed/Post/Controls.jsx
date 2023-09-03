"use client"

import When from "@/components/helper/When"
import Button from "@/components/primitives/Button"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import {
  DotsVerticalIcon,
  GitHubLogoIcon,
  GlobeIcon,
  MixerVerticalIcon,
  QuoteIcon,
  Share2Icon,
} from "@radix-ui/react-icons"
import * as Popover from "@radix-ui/react-popover"

const Controls = ({ previewUrl, repoUrl }) => (
  <div className="flex items-center gap-2">
    <When asChild condition={!!previewUrl}>
      <Button
        size="small"
        textCase="capitalize"
        variant="soft"
        className="font-staff font-medium h-9 px-3"
        leftIcon={<GlobeIcon />}
      >
        Preview
      </Button>
    </When>
    <When asChild condition={!!repoUrl}>
      <Button
        size="small"
        textCase="capitalize"
        variant="soft"
        className="font-staff font-medium h-9 px-3"
        leftIcon={<GitHubLogoIcon />}
      >
        Source Code
      </Button>
    </When>
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="soft" className="aspect-square justify-center p-0">
          <AccessibleIcon label="More">
            <DotsVerticalIcon />
          </AccessibleIcon>
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          avoidCollisions
          hideWhenDetached
          align="end"
          collisionPadding={10}
          className="rounded-xl py-1 text-sm overflow-hidden bg-[#1B1A1A] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
          sideOffset={8}
        >
          <button className="whitespace-nowrap font-medium gap-2 items-center hover:bg-white/5 hover:text-accent focus-visible:text-accent focus-visible:bg-white/5 hover:opacity-100 focus-visible:opacity-100 opacity-90 transition w-full flex py-2 px-4">
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
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  </div>
)

export default Controls
