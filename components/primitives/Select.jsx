import cx from "@/utils/cx"
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons"
import * as RadixSelect from "@radix-ui/react-select"

import tailwindConfig from "@/tailwind.config"
import { forwardRef } from "react"
import resolveConfig from "tailwindcss/resolveConfig"

const {
  theme: { colors },
} = resolveConfig(tailwindConfig)

export const Select = forwardRef(
  (
    {
      name,
      placeholder,
      children,
      onChange,
      label,
      accent = colors["cool-lime"][300],
      ...props
    },
    ref,
  ) => (
    <RadixSelect.Root {...props} onValueChange={onChange}>
      <RadixSelect.Trigger
        style={{
          "--select-accent": accent,
        }}
        className="inline-flex items-center bg-neutral-950 border border-border justify-center rounded-lg px-[15px] text-[13px] leading-none h-[35px] gap-1 hover:bg-white/5 text-[--select-accent] data-[placeholder]:text-[--select-accent] outline-none"
        aria-label={label}
      >
        <RadixSelect.Value {...{ placeholder }} />
        <RadixSelect.Icon className="text-[--select-accent]">
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          ref={ref}
          style={{
            "--select-accent": accent,
          }}
          className="overflow-hidden bg-neutral-950 rounded-lg border border-border shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
        >
          <RadixSelect.ScrollUpButton className="flex items-center justify-center h-[25px] text-[--select-accent] cursor-default">
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className="rounded-lg text-sm overflow-hidden select-none min-w-[7.5rem]">
            {children}
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-[--select-accent] cursor-default">
            <ChevronDownIcon />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  ),
)

export const SelectItem = ({ value, text }) => (
  <RadixSelect.Item
    {...{ value }}
    className="whitespace-nowrap state-checked:text-[--select-accent] group text-[13px] gap-2 items-center hover:bg-white/5 hover:text-[--select-accent] focus-visible:text-[--select-accent] focus-visible:bg-white/5 hover:opacity-100 focus-visible:opacity-100 opacity-90 transition w-full flex py-2 px-8 cursor-pointer"
  >
    <RadixSelect.ItemIndicator className="absolute left-1 w-[25px] inline-flex items-center justify-center">
      <CheckIcon />
    </RadixSelect.ItemIndicator>
    <div className="absolute left-1 w-[25px] inline-flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity !text-white">
      <CheckIcon />
    </div>
    <RadixSelect.ItemText>{text}</RadixSelect.ItemText>
  </RadixSelect.Item>
)

export const SelectGroup = ({ children, ...rest }) => (
  <RadixSelect.Group {...rest}>{children}</RadixSelect.Group>
)

export const SelectGroupLabel = ({ children, className, ...rest }) => (
  <RadixSelect.Label
    {...rest}
    className={cx(
      className,
      "py-[6px] text-background px-4 text-xs bg-[--select-accent]",
    )}
  >
    {children}
  </RadixSelect.Label>
)
