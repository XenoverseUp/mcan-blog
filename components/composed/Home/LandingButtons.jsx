"use client"

import Button from "@/components/primitives/Button"
import { useTailwindBreakpoint } from "@/hooks/useTailwind"

const LandingButtons = () => {
  const isDesktop = useTailwindBreakpoint("sm")

  return (
    <div className="flex flex-wrap gap-[10px]">
      <Button>Snippets</Button>
      <Button>Tutorials</Button>
      <Button>Opinions</Button>
      <Button>About Me</Button>
    </div>
  )
}

export default LandingButtons
