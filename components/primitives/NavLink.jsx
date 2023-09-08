"use client"

import cx from "@/utils/cx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { forwardRef, useMemo } from "react"

const NavLink = (
  { className, activeClassName, href, exact = false, children, ...rest },
  ref,
) => {
  const pathname = usePathname()
  const isActive = useMemo(
    () => (exact ? pathname === href : pathname.startsWith(href)),
    [pathname],
  )

  return (
    <Link
      {...{ href, ref }}
      {...rest}
      className={cx(
        {
          [activeClassName]: isActive,
        },
        className,
      )}
    >
      {children}
    </Link>
  )
}

export default forwardRef(NavLink)
