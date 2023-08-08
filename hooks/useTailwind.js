import create from "@kodingdotninja/use-tailwind-breakpoint"
import resolveConfig from "tailwindcss/resolveConfig"

import tailwindConfig from "@/tailwind.config.js"

const config = resolveConfig(tailwindConfig)

export const {
  useBreakpoint: useTailwindBreakpoint,
  useBreakpointEffect: useTailwindBreakpointEffect,
  useBreakpointValue: useTailwindBreakpointValue,
} = create(config.theme.screens)
