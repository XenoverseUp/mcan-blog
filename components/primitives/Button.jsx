import ConditionalWrapper from "@/components/helper/ConditionalWrapper"
import When from "@/components/helper/When"
import cx from "@/utils/cx"
import { cva } from "class-variance-authority"
import Link from "next/link"
import { forwardRef } from "react"

const ButtonVariants = cva(
  "rounded-full select-none flex-shrink-0 w-fit h-9 flex items-center font-staff-condensed uppercase transition-colors motion-reduce:transition-none focus-visible:ring-4",
  {
    variants: {
      size: {
        small: ["px-4", "h-7", "text-sm", "gap-2"],
        normal: ["px-5", "text-lg", "gap-3"],
      },
      textCase: {
        capitalize: ["capitalize"],
        uppercase: ["uppercase"],
        lowercase: ["lowercase"],
        none: ["normal-case"],
      },
      variant: {
        border: [
          "text-cool-lime-300",
          "bg-cool-lime-300/10",
          "border",
          "border-cool-lime-300",
          "hover:bg-cool-lime-300",
          "hover:text-background",
          "focus-visible:bg-cool-lime-300",
          "focus-visible:text-background",
          "active:text-background",
          "active:bg-cool-lime-300/90",
        ],
        solid: [
          "text-background",
          "bg-cool-lime-300",
          "hover:bg-cool-lime-300/90",
          "focus-visible:bg-cool-lime-300/90",
          "active:bg-cool-lime-300",
        ],
        "soft-inverted": [
          "text-cool-lime-300",
          "bg-white",
          "dark:bg-cool-lime-300/20",
          "hover:bg-cool-lime-300/90",
          "hover:text-white",
          "dark:hover:text-cool-lime-300",
          "focus-visible:bg-cool-lime-300/90",
          "active:bg-cool-lime-300",
          "border-transparent",
          "dark:hover:bg-cool-lime-300/30",
          "dark:focus-visible:bg-cool-lime-300/30",
          "dark:active:bg-cool-lime-300/40",
        ],
        soft: [
          "text-cool-lime-300",
          "bg-cool-lime-300/20",
          "border-transparent",
          "hover:bg-cool-lime-300/30",
          "focus-visible:bg-cool-lime-300/30",
          "active:bg-cool-lime-300/40",
        ],
        ghost: ["!px-2", "py-0", "text-cool-lime-300"],
      },
    },
    defaultVariants: {
      size: "normal",
      variant: "border",
      textCase: "uppercase",
    },
  },
)

/**
 * Generic button component.
 * @param {import("class-variance-authority").VariantProps<ButtonVariants> & {leftIcon: import("react").FC, rightIcon: import("react").FC} & (import("react").HTMLAttributes<HTMLButtonElement> | import("next/link").LinkProps)} props
 * @param {import("react").Ref} ref
 * @returns {import("react").FC}
 */
const Button = (
  {
    children,
    variant,
    size,
    textCase,
    href,
    leftIcon,
    rightIcon,
    className,
    ...rest
  },
  ref,
) => {
  return (
    <ConditionalWrapper
      wrapper={href ? Link : "button"}
      condition={true}
      {...(href && { href })}
      {...rest}
      ref={ref}
      className={cx(ButtonVariants({ size, variant, textCase }), className, {
        "px-3": leftIcon && size === "small",
      })}
    >
      <When condition={!!leftIcon}>{leftIcon}</When>
      {children}
      <When condition={!!rightIcon}>{rightIcon}</When>
    </ConditionalWrapper>
  )
}

export default forwardRef(Button)
