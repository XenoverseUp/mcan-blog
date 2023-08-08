"use client"

import Button from "@/components/primitives/Button"
import { useTailwindBreakpoint } from "@/hooks/useTailwind"

const LandingButtons = () => {
  const isDesktop = useTailwindBreakpoint("sm")

  return (
    <div className="flex flex-wrap gap-[10px]">
      <Button leftIcon={<h1>Hello</h1>} small={!isDesktop}>
        Snippets
      </Button>
      <Button small={!isDesktop}>Tutorials</Button>
      <Button small={!isDesktop}>Opinions</Button>
      <Button small={!isDesktop}>About Me</Button>
    </div>
  )
}

export default LandingButtons
