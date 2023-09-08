"use client"

import useScrollY from "@/hooks/useScrollPosition"
import cx from "@/utils/cx"

const Nav = ({
  children,
  className,
  atTopClassName,
  scrolledClassName,
  ...rest
}) => {
  const scrollY = useScrollY()

  return (
    <nav
      {...rest}
      className={cx(
        className,
        scrollY > 12 || scrollY === null ? scrolledClassName : atTopClassName,
      )}
    >
      {children}
    </nav>
  )
}

export default Nav
