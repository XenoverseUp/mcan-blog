"use client"

import Button from "@/components/primitives/Button"
import { ArrowRightIcon } from "@radix-ui/react-icons"

const LandingButtons = () => {
  return (
    <div className="flex flex-wrap gap-[10px]">
      <Button>Snippets</Button>
      <Button>Tutorials</Button>
      <Button>Opinions</Button>
      <Button rightIcon={<ArrowRightIcon />}>About Me</Button>
    </div>
  )
}

export default LandingButtons
