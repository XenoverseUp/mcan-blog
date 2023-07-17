"use client"

import MenuIcon from "@/assets/svg/menu"
import { Transition } from "@headlessui/react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Fragment, useState } from "react"

const Menu = () => {
  const [show, setShow] = useState(false)
  const router = useRouter()

  return (
    <DropdownMenu.Root open={show} onOpenChange={setShow}>
      <DropdownMenu.Trigger className="z-20 rounded bg-blue px-2 py-1">
        <AccessibleIcon label="Menu">
          <MenuIcon className="h-4 w-4 stroke-secondary stroke-2" />
        </AccessibleIcon>
      </DropdownMenu.Trigger>
      <Transition.Root {...{ show }}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-1"
          leave="ease-in duration-200"
          leaveFrom="opacity-1"
          leaveTo="opacity-0"
        >
          <div
            className={`scale absolute inset-0 bg-white/80 backdrop-blur-md transition-all`}
          />
        </Transition.Child>
        <DropdownMenu.Portal forceMount>
          <Transition.Child
            as={Fragment}
            enter="ease-[cubic-bezier(0.25, 1, 0.5, 1)] duration-300"
            enterFrom="translate-y-2 opacity-0 scale-95"
            enterTo="translate-y-0 opacity-1 scale-100"
            leave="ease-in duration-100"
            leaveFrom="translate-y-0 opacity-1 scale-100"
            leaveTo="translate-y-2 opacity-0 scale-95"
          >
            <DropdownMenu.Content
              sideOffset={10}
              collisionPadding={5}
              align="end"
              className="w-48 select-none overflow-hidden rounded-lg bg-white text-sm text-primary shadow-2xl"
            >
              <DropdownMenu.Label className="bg-blue px-4 py-2 text-xs text-primary/75">
                Navigation
              </DropdownMenu.Label>
              <DropdownMenu.Item
                as={Link}
                className="cursor-pointer px-4 py-2 transition-colors hover:bg-calm-shade"
                href="/snippets"
                onSelect={() => router.push("/snippets")}
              >
                Snippets
              </DropdownMenu.Item>
              <DropdownMenu.Item
                as={Link}
                className="cursor-pointer px-4 py-2 transition-colors hover:bg-calm-shade"
                href="/tutorials"
                onSelect={() => router.push("/tutorials")}
              >
                Tutorials
              </DropdownMenu.Item>
              <DropdownMenu.Item
                as={Link}
                className="cursor-pointer px-4 py-2 transition-colors hover:bg-calm-shade"
                href="/opinions"
                onSelect={() => router.push("/opinions")}
              >
                Opinions
              </DropdownMenu.Item>
              <DropdownMenu.Label className="bg-blue px-4 py-2 text-xs text-primary/75">
                Social
              </DropdownMenu.Label>
              <DropdownMenu.Item
                as={Link}
                className="cursor-pointer px-4 py-2 transition-colors hover:bg-calm-shade"
                href="/opinions"
                onSelect={() => router.push("/opinions")}
              >
                Github
              </DropdownMenu.Item>
              <DropdownMenu.Item
                as={Link}
                className="cursor-pointer px-4 py-2 transition-colors hover:bg-calm-shade"
                href="/opinions"
                onSelect={() => router.push("/opinions")}
              >
                LinkedIn
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </Transition.Child>
        </DropdownMenu.Portal>
      </Transition.Root>
    </DropdownMenu.Root>
  )
}

export default Menu
