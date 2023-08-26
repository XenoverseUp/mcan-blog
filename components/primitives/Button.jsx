import ConditionalWrapper from "@/components/helper/ConditionalWrapper"
import When from "@/components/helper/When"
import cx from "@/utils/cx"
import { cva } from "class-variance-authority"
import Link from "next/link"
import { forwardRef } from "react"

const ButtonVariants = cva(
  "rounded-full select-none flex-shrink-0 w-fit h-9 flex items-center font-staff-condensed uppercase transition-colors motion-reduce:transition-none",
  {
    variants: {
      size: {
        small: ["px-4", "text-sm", "gap-2"],
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
          "text-accent",
          "bg-accent/10",
          "border",
          "border-accent",
          "hover:bg-accent",
          "hover:text-background",
          "active:text-background",
          "active:bg-accent/90",
        ],
        solid: [
          "text-background",
          "bg-accent",
          "hover:bg-accent/90",
          "active:bg-accent",
        ],
        soft: [
          "text-accent",
          "bg-accent/20",
          "border-transparent",
          "hover:bg-accent/30",
          "active:bg-accent/40",
        ],
        ghost: ["!px-2", "py-0", "rounded-none", "text-accent"],
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
      className={cx(ButtonVariants({ size, variant, textCase }), className)}
    >
      <When condition={!!leftIcon}>{leftIcon}</When>
      {children}
      <When condition={!!rightIcon}>{rightIcon}</When>
    </ConditionalWrapper>
  )
}

export default forwardRef(Button)
