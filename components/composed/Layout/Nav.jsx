"use client"

import useScrollY from "@/hooks/useScrollPosition"
import cx from "@/utils/cx"
import { useParams, usePathname } from "next/navigation"

const Nav = ({
  children,
  className,
  atTopClassName,
  scrolledClassName,
  ...rest
}) => {
  const scrollY = useScrollY()

  const { slug } = useParams()
  const pathname = usePathname()

  console.log({ pathname: pathname.split("/").at(1), slug })

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
