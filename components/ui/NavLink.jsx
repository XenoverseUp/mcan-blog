"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo } from "react"
import important from "@/utils/important"
import cx from "@/utils/cx"

const NavLink = ({
  className,
  activeClassName,
  href,
  exact = false,
  children,
}) => {
  const pathname = usePathname()
  const isActive = useMemo(
    () => (exact ? pathname === href : pathname.startsWith(href)),
    [pathname]
  )

  return (
    <Link
      {...{ href }}
      className={cx(
        {
          [activeClassName]: isActive,
        },
        className
      )}
    >
      {children}
    </Link>
  )
}

export default NavLink
