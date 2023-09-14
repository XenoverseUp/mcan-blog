"use client"

import When from "@/components/helper/When"
import cx from "@/utils/cx"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import { InfoCircledIcon } from "@radix-ui/react-icons"
import * as Tooltip from "@radix-ui/react-tooltip"
import { forwardRef, useId, useRef } from "react"

const Input = (
  { value, nativeValue, label = "Label", hookForm, error, ...rest },
  ref,
) => {
  const input = useRef(null)
  const id = useId()

  return (
    <fieldset
      name="name"
      onClick={() => {
        input.current.focus()
      }}
      className="flex flex-col justify-center relative w-full group h-[3.75rem] [&:has(:focus-visible)]:ring-4 border border-border rounded-xl px-4 cursor-pointer"
    >
      <When condition={error}>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button className="absolute right-2 top-2 text-orange-500 focus-visible:ring-4 rounded-full">
                <AccessibleIcon label="Errors">
                  <InfoCircledIcon />
                </AccessibleIcon>
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="top"
                className="z-50 bg-zinc-100 text-background text-xs px-3 pt-[0.2rem] pb-1 rounded-lg will-change-[transform,opacity]"
                sideOffset={6}
              >
                {error}
                <Tooltip.Arrow className="fill-zinc-100" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </When>
      <div
        className={cx("group-focus-within:pb-1 flex", {
          "pb-1": !["", undefined, null].includes(value),
        })}
      >
        <label
          htmlFor={id}
          className={cx(
            "opacity-50 group-focus-within:text-xs group-focus-within:text-cool-lime-300 group-focus-within:opacity-100 transition-all cursor-pointer",
            {
              "text-xs text-cool-lime-300 opacity-100": ![
                "",
                undefined,
                null,
              ].includes(value),
            },
          )}
        >
          {label}
        </label>
      </div>
      <input
        {...hookForm}
        {...rest}
        ref={e => {
          ref?.(e)
          input.current = e
        }}
        {...{
          id,
          value: nativeValue,
        }}
        className={cx(
          "bg-transparent h-0 opacity-0 text-sm overflow-hidden transition-all group-focus-within:h-4 group-focus-within:mb-1 group-focus-within:opacity-100",
          {
            "h-4 mb-1 opacity-100": !["", undefined, null].includes(value),
          },
        )}
      />
    </fieldset>
  )
}

export default forwardRef(Input)
