import Link from "next/link"
import AccessibleIcon from "./AcessibleIcon"
import Wrapper from "./Wrapper"

const Button = ({
  children,
  label,
  prependIcon: PrependIcon,
  appendIcon: AppendIcon,
  iconLabel,
  iconClassName,
  className,
  href,
  ...rest
}) => (
  <Wrapper
    element={href ? Link : "button"}
    {...(label && { "aria-label": label })}
    {...(href && { href })}
    {...{ className: className + " select-none" }}
    {...rest}
  >
    {PrependIcon && (
      <AccessibleIcon label={iconLabel}>
        <PrependIcon className={iconClassName} />
      </AccessibleIcon>
    )}
    {children}
    {AppendIcon && (
      <AccessibleIcon label={iconLabel}>
        <AppendIcon className={iconClassName} />
      </AccessibleIcon>
    )}
  </Wrapper>
)

export default Button
