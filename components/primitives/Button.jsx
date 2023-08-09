import ConditionalWrapper from "@/components/helper/ConditionalWrapper"
import When from "@/components/helper/When"
import Link from "next/link"

import { cva } from "class-variance-authority"

const ButtonVariants = cva(
  "rounded-full w-fit h-fit flex items-center py-1 font-staff-condensed uppercase transition-colors motion-reduce:transition-none",
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
          "hover:bg-accent",
          "hover:text-background",
          "border",
          "border-accent",
        ],
        solid: ["text-background", "bg-accent", "hover:brightness-90"],
        soft: [
          "text-accent",
          "bg-accent/20",
          "border-transparent",
          "hover:bg-accent/30",
        ],
        ghost: ["px-2", "py-0", "rounded-none", "text-accent"],
      },
    },
    defaultVariants: {
      size: "normal",
      variant: "border",
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
