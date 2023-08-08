import ConditionalWrapper from "@/components/helper/ConditionalWrapper"
import When from "@/components/helper/When"
import cx from "@/utils/cx"
import Link from "next/link"

const Button = ({
  children,
  small,
  href,
  leftIcon,
  rightIcon,
  animateIconOnHover = { left: false, right: true },
  ...rest
}) => {
  return (
    <ConditionalWrapper
      wrapper={href ? Link : "button"}
      condition={true}
      {...(href && { href })}
      {...rest}
      className={cx(
        "rounded-full border border-accent bg-accent/10 px-5 py-1 font-staff-condensed text-lg uppercase text-accent transition-colors hover:bg-accent hover:text-background motion-reduce:transition-none",
        {
          "px-4 text-sm": small,
        }
      )}
    >
      <When condition={!!leftIcon}>{leftIcon}</When>
      {children}
      <When condition={!!rightIcon}>{rightIcon}</When>
    </ConditionalWrapper>
  )
}

export default Button
