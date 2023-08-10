import ConditionalWrapper from "@/components/helper/ConditionalWrapper"
import When from "@/components/helper/When"
import Link from "next/link"

import { cva } from "class-variance-authority"

const ButtonVariants = cva(
  "rounded-full select-none w-fit h-fit flex items-center py-[3px] font-staff-condensed uppercase transition-colors motion-reduce:transition-none",
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
      },
      variant: {
        border: [
          "text-accent",
          "bg-accent/10",
          "border",
          "border-accent",
          "hover:bg-accent",
          "hover:text-background",
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
      variant: "soft",
      textCase: "uppercase",
    },
  }
)

const Button = ({
  children,
  variant,
  size,
  textCase,
  href,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  return (
    <ConditionalWrapper
      wrapper={href ? Link : "button"}
      condition={true}
      {...(href && { href })}
      {...rest}
      className={ButtonVariants({ size, variant, textCase })}
    >
      <When condition={!!leftIcon}>{leftIcon}</When>
      {children}
      <When condition={!!rightIcon}>{rightIcon}</When>
    </ConditionalWrapper>
  )
}

export default Button
