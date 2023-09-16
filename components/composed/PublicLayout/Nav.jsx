"use client"

import Drawers from "@/components/composed/PublicLayout/drawer/sheets/Drawer"
import When from "@/components/helper/When"
import { SignOutButton } from "@/components/primitives/Auth"
import Container from "@/components/primitives/Container"
import Logo from "@/components/primitives/Logo"
import useScrollY from "@/hooks/useScrollPosition"
import cx from "@/utils/cx"
import { UserRole } from "@prisma/client"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import { MixerVerticalIcon } from "@radix-ui/react-icons"
import { atom, useAtomValue } from "jotai"
import Link from "next/link"

export const NavigationType = {
  DEFAULT: "DEFAULT",
  POST: "POST",
}

export const navigationTypeAtom = atom(NavigationType.DEFAULT)
export const postTitleAtom = atom("")

const Nav = ({ initialSignatures, user }) => {
  const scrollY = useScrollY()
  const navigationType = useAtomValue(navigationTypeAtom)
  const postTitle = useAtomValue(postTitleAtom)

  return (
    <nav
      className={cx(
        "sticky top-0 z-20 h-14 w-full border-b border-border before:absolute before:inset-0 before:-z-10 before:backdrop-blur-sm transition-colors duration-300",
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
          <Logo className="w-4" shadow />
          <div className="flex items-center gap-1">
            <span className="font-staff-wide text-xs uppercase ">
              Can Durmus
            </span>
            <span className="px-1 opacity-40">/</span>
            <span className="font-mono text-xs tracking-tight">Blog</span>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <When asChild condition={!!user}>
            <SignOutButton className="text-xs px-3 h-7 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
              Sign Out
            </SignOutButton>
          </When>
          <When asChild condition={user?.role === UserRole.ADMIN}>
            <Link
              href="/dashboard"
              className="bg-white/5 hover:bg-white/10 h-7 aspect-square grid place-items-center rounded-lg transition-colors"
            >
              <AccessibleIcon label="Dashboard">
                <MixerVerticalIcon />
              </AccessibleIcon>
            </Link>
          </When>
          <Drawers {...{ initialSignatures }} />
        </div>
      </Container>
    </nav>
  )
}

export default Nav
