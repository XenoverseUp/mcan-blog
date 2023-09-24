"use client"

import Share from "@/components/composed/post/Share"
import {
  NavigationType,
  navigationTypeAtom,
  postTitleAtom,
} from "@/components/composed/public-layout/Nav"
import When from "@/components/helper/When"
import Button from "@/components/primitives/Button"
import Popover from "@/components/primitives/Popover"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import {
  DotsVerticalIcon,
  GitHubLogoIcon,
  GlobeIcon,
  MixerVerticalIcon,
  QuoteIcon,
  Share2Icon,
} from "@radix-ui/react-icons"
import { useSetAtom } from "jotai"
import { Fragment, useEffect } from "react"

const Controls = ({ title, previewUrl, repoUrl, postType = "opinions" }) => {
  const setNavigation = useSetAtom(navigationTypeAtom)
  const setTitle = useSetAtom(postTitleAtom)

  useEffect(() => {
    setTitle(title)
    setNavigation(NavigationType.POST)

    return () => {
      setTitle("")
      setNavigation(NavigationType.DEFAULT)
    }
  }, [])

  return (
    <div className="flex items-center gap-2">
      <When asChild condition={!!previewUrl}>
        <Button
          size="small"
          textCase="capitalize"
          variant="soft"
          className="font-staff font-medium h-9"
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
          className="font-staff font-medium h-9"
          leftIcon={<GitHubLogoIcon />}
        >
          Source Code
        </Button>
      </When>

      <Popover
        trigger={
          <Button variant="soft" className="aspect-square justify-center p-0">
            <AccessibleIcon label="More">
              <DotsVerticalIcon />
            </AccessibleIcon>
          </Button>
        }
      >
        {({ setOpen }) => (
          <Fragment>
            <Share
              onSuccess={() => setOpen(false)}
              onError={() => setOpen(false)}
              shareData={{
                text: "Hello World",
                title: "Hello World",
                url: "https://guthib.com/",
              }}
            >
              <button className="whitespace-nowrap font-medium gap-2 items-center hover:bg-white/5 hover:text-cool-lime-300 focus-visible:text-cool-lime-300 focus-visible:bg-white/5 hover:opacity-100 focus-visible:opacity-100 opacity-90 transition w-full flex py-2 px-4">
                <Share2Icon />
                <span>Share</span>
              </button>
            </Share>
            <button className="whitespace-nowrap font-medium gap-2 items-center hover:bg-white/5 hover:text-cool-lime-300 focus-visible:text-cool-lime-300 focus-visible:bg-white/5 hover:opacity-100 focus-visible:opacity-100 opacity-90 transition w-full flex py-2 px-4">
              <QuoteIcon />
              <span>References & Links</span>
            </button>
            <button className="whitespace-nowrap font-medium gap-2 items-center hover:bg-white/5 hover:text-cool-lime-300 focus-visible:text-cool-lime-300 focus-visible:bg-white/5 hover:opacity-100 focus-visible:opacity-100 opacity-90 transition w-full flex py-2 px-4">
              <MixerVerticalIcon />
              <span>Post Stats</span>
            </button>
          </Fragment>
        )}
      </Popover>

      {/* <Popover {...{ postType }} /> */}
    </div>
  )
}

export default Controls
