import cx from "@/utils/cx"
import { cloneElement } from "react"

const container = "mx-auto w-full max-w-6xl px-12"

const Container = ({
  children,
  className,
  element: Element = "div",
  asChild = false,
}) => {
  if (asChild)
    return cloneElement(children, {
      className: cx(children.props.className, container, className),
    })

  return (
    <Element aria-hidden className={cx(className, container)}>
      {children}
    </Element>
  )
}

export default Container
