"use client"

import Popover from "@/components/composed/Post/Popover"
import When from "@/components/helper/When"
import Button from "@/components/primitives/Button"
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons"

const Controls = ({ previewUrl, repoUrl, postType = "opinions" }) => (
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

export default Controls
