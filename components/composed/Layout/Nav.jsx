"use client"

import useScrollY from "@/hooks/useScrollY"
import cx from "@/utils/cx"

const Nav = ({ children, className, atTopClassName, scrolledClassName }) => {
  const scrollY = useScrollY()

  return (
    <nav
      className={cx(
        className,
        scrollY > 12 || scrollY === null ? scrolledClassName : atTopClassName
      )}
    >
      {children}
    </nav>
  )
}

export default Nav