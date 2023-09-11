"use client"

import Drawers from "@/components/composed/Layout/drawer/sheets/Drawer"
import Container from "@/components/primitives/Container"
import Logo from "@/components/primitives/Logo"
import useScrollY from "@/hooks/useScrollPosition"
import cx from "@/utils/cx"
import { atom, useAtomValue } from "jotai"
import Link from "next/link"

export const NavigationType = {
  DEFAULT: "DEFAULT",
  POST: "POST",
}

export const navigationTypeAtom = atom(NavigationType.DEFAULT)
export const postTitleAtom = atom("")

const Nav = ({ initialSignatures }) => {
  const scrollY = useScrollY()
  const navigationType = useAtomValue(navigationTypeAtom)
  const postTitle = useAtomValue(postTitleAtom)

  return (
    <nav
      className={cx(
        "sticky top-0 z-20 h-16 w-full border-b border-border before:absolute before:inset-0 before:-z-10 before:backdrop-blur-sm transition-colors duration-300",
        scrollY > 12 ||
          scrollY === null ||
          navigationType === NavigationType.POST
          ? "bg-background"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-full items-center justify-between">
        <Link
          href="/"
          className="focus-visible:ring-4 rounded-md relative flex items-center gap-4"
        >
          <Logo className="w-5" shadow />
          <div className="flex items-center gap-1">
            <span className="font-staff-wide text-xs uppercase md:text-sm">
              Can Durmus
            </span>
            <span className="px-1 opacity-40">/</span>
            <span className="font-mono text-xs tracking-tight md:text-sm">
              Blog
            </span>
          </div>
        </Link>
        <Drawers {...{ initialSignatures }} />
      </Container>
    </nav>
  )
}

export default Nav
