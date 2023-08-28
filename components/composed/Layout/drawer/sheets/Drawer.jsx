"use client"

import DragHandle from "@/components/composed/layout/drawer/helper/DragHandle"
import GuestBook from "@/components/composed/layout/drawer/sheets/GuestBook"
import { AccessibleIcon } from "@/components/primitives/Client"
import Container from "@/components/primitives/Container"
import { ArrowRightIcon, DragHandleDots2Icon } from "@radix-ui/react-icons"
import * as ScrollArea from "@radix-ui/react-scroll-area"
import { Drawer } from "vaul"

/**
 *
 * @param {{initialSignatures: import("@/lib/guestbook").PaginatedSignature[]}} props
 * @returns {import("react").FC}
 */
export default function Drawers({ initialSignatures }) {
  return (
    <Drawer.Root>
      <Drawer.Trigger className="grid aspect-square w-7 place-items-center rounded border border-border bg-neutral-50 dark:border-zinc-800 dark:bg-neutral-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
        <AccessibleIcon label="Navigation Menu" key="handle">
          <DragHandleDots2Icon className="origin-center scale-125 text-inherit" />
        </AccessibleIcon>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-background/60 z-30" />
        <Drawer.Content className="isolate bg-background dark:bg-zinc-950 z-40 rounded-t-[16px] !h-[80%] mt-24 fixed bottom-0 left-0 right-0 after:border-l after:border-r after:border-border">
          <div className="w-full h-full border-t flex flex-col border-l border-r border-border overflow-hidden rounded-t-[16px]">
            <DragHandle />
            <Container className="w-full flex-grow overflow-hidden">
              <ScrollArea.Root className="w-full h-full overflow-hidden relative after:absolute after:bottom-0 after:left-0 after:right-3 after:h-16 after:bg-gradient-to-t after:from-white dark:after:from-zinc-950 after:to-transparent after:pointer-events-none">
                <ScrollArea.Viewport className="w-full h-full">
                  <div className="pb-16">
                    <Drawer.Title className="text-accent font-staff-condensed flex gap-4 text-5xl uppercase my-6">
                      <span>Shelf</span>
                    </Drawer.Title>
                    <nav className="space-y-5 text-2xl font-bold capitalize">
                      <GuestBook {...{ initialSignatures }} />
                      <div
                        tabIndex={0}
                        className="focus-visible:outline-none focus-visible:underline focus-visible:text-accent hover:underline underline-offset-4 w-fit cursor-pointer"
                      >
                        snippets
                      </div>
                      <div
                        tabIndex={0}
                        className="focus-visible:outline-none focus-visible:underline focus-visible:text-accent hover:underline underline-offset-4 w-fit cursor-pointer"
                      >
                        tutorials
                      </div>
                      <div
                        tabIndex={0}
                        className="focus-visible:outline-none focus-visible:underline focus-visible:text-accent hover:underline underline-offset-4 w-fit cursor-pointer"
                      >
                        opinions
                      </div>
                    </nav>
                  </div>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar
                  forceMount
                  className="flex state-hidden:opacity-0 state-visible:opacity-100 transition select-none touch-none bg-white bg-opacity-[0.03] hover:bg-white/5 px-0.5 my-6 rounded-full duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                  orientation="vertical"
                >
                  <ScrollArea.Thumb className="flex-1 bg-accent rounded-[10px] relative before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                </ScrollArea.Scrollbar>
              </ScrollArea.Root>
            </Container>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
