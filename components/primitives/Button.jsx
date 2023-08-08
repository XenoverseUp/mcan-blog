import ConditionalWrapper from "@/components/helper/ConditionalWrapper"
import When from "@/components/helper/When"
import Link from "next/link"

import { cva } from "class-variance-authority"

const ButtonVariants = cva(
  "rounded-full flex items-center gap-3 py-1 border border-accent font-staff-condensed uppercase transition-colors motion-reduce:transition-none",
  {
    variants: {
      size: {
        small: ["px-4", "text-sm"],
        normal: ["px-5", "text-lg"],
      },
      variant: {
        border: [
          "text-accent",
          "bg-accent/10",
          "hover:bg-accent",
          "hover:text-background",
        ],
        filled: ["text-background", "bg-accent", "hover:brightness-90"],
      },
    },
    defaultVariants: {
      size: "normal",
      variant: "border",
    },
  }
)

const Button = ({
  children,
  variant,
  size,
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
      className={ButtonVariants({ size, variant })}
    >
      <When condition={!!leftIcon}>{leftIcon}</When>
      {children}
      <When condition={!!rightIcon}>{rightIcon}</When>
    </ConditionalWrapper>
  )
}

export default Button
