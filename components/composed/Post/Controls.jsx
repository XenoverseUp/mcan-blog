"use client"

import {
  NavigationType,
  navigationTypeAtom,
  postTitleAtom,
} from "@/components/composed/Layout/Nav"
import Popover from "@/components/composed/Post/Popover"
import When from "@/components/helper/When"
import Button from "@/components/primitives/Button"
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons"
import { useSetAtom } from "jotai"
import { useEffect } from "react"

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
      <Popover {...{ postType }} />
    </div>
  )
}

export default Controls
