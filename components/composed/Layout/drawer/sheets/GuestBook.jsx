"use client"

import DragHandle from "@/components/composed/Layout/drawer/helper/DragHandle"
import GuestBookForm from "@/components/composed/Layout/drawer/helper/GuestBookForm"
import Signature from "@/components/composed/Layout/drawer/helper/Signature"
import MobileFormDrawer from "@/components/composed/Layout/drawer/sheets/MobileFormDrawer"
import Button from "@/components/primitives/Button"
import Container from "@/components/primitives/Container"
import useUpdateEffect from "@/hooks/useUpdateEffect"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import { ArrowRightIcon, CardStackPlusIcon } from "@radix-ui/react-icons"
import * as ScrollArea from "@radix-ui/react-scroll-area"
import { useRef, useState } from "react"
import { Drawer } from "vaul"

const GuestBook = ({ initialSignatures }) => {
  const scrollViewportRef = useRef(null)
  const [signatures, setSignatures] = useState(
    /** @type {import("@/lib/guestbook").PaginatedSignature} */ (
      initialSignatures
    ),
  )

  const [optimisticSignatures, addOptimisticSignatures] = useState(
    /** @type {(import("@/lib/schema").Signature & {pending: boolean})[]} */ ([]),
  )

  const [totalSignature, setTotalSignature] = useState(
    /** @type {number} */ (initialSignatures.totalSignature),
  )

  useUpdateEffect(() => {
    scrollViewportRef.current.scrollTo({ top: 0, behavior: "smooth" })
  }, [optimisticSignatures])

  return (
    <Drawer.NestedRoot>
      <Drawer.Trigger className="space-y-1 w-fit rounded-lg cursor-pointer group ">
        <p className="group-focus-visible:outline-none group-focus-visible:underline group-focus-visible:text-accent group-hover:underline underline-offset-4 flex items-center gap-3">
          <span>Guestbook</span>
          <ArrowRightIcon className="group-hover:text-accent scale-110 transition-colors" />
        </p>
        <span className="font-normal normal-case text-sm block leading-5 opacity-75">
          Don't forget to fill out my guestbook with your lovely comments.
        </span>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-background/30 z-40" />
        <Drawer.Content className="bg-background dark:bg-zinc-950 z-50 rounded-t-[16px] !h-[78.5%] mt-24 fixed bottom-0 left-0 right-0 after:border-l after:border-r after:border-border">
          <div className="w-full h-full border-t flex flex-col border-l border-r border-border overflow-hidden rounded-t-[16px]">
            <DragHandle />
            <Container
              element="header"
              className="w-full flex-grow overflow-hidden flex-shrink-0 pb-4"
            >
              <div className="flex justify-between items-center">
                <Drawer.Title className="text-accent capitalize font-bold mt-7 mb-2">
                  <span className="text-4xl">Guestbook</span>
                  <sup className="text-2xl ml-1">{totalSignature}</sup>
                </Drawer.Title>
                <MobileFormDrawer
                  {...{ setTotalSignature, addOptimisticSignatures }}
                >
                  <Button className="md:hidden">
                    <AccessibleIcon label="Add Comment">
                      <CardStackPlusIcon className="scale-125" />
                    </AccessibleIcon>
                  </Button>
                </MobileFormDrawer>
              </div>
              <span className="normal-case text-sm block leading-5 opacity-75">
                Don't forget to fill out my guestbook with your lovely comments.
              </span>
            </Container>
            <ScrollArea.Root className="w-full h-full overflow-hidden relative before:z-10 before:absolute before:top-0 before:left-0 before:right-3 before:h-8 before:bg-gradient-to-b before:from-white dark:before:from-zinc-950 before:to-transparent before:pointer-events-none">
              <ScrollArea.Viewport
                ref={scrollViewportRef}
                className="w-full h-full z-0"
              >
                <Container>
                  <div className="space-y-9 md:space-y-12 py-8">
                    {optimisticSignatures.map(signature => (
                      <Signature
                        key={signature.name + signature.createdAt}
                        data={signature}
                        pending={signature.pending}
                      />
                    ))}
                    {signatures?.data.map(signature => (
                      <Signature
                        key={signature.name + signature.createdAt}
                        data={signature}
                      />
                    ))}
                  </div>
                </Container>
              </ScrollArea.Viewport>
              <ScrollArea.Scrollbar
                forceMount
                className="flex state-hidden:opacity-0 state-visible:opacity-100 transition select-none touch-none bg-zinc-950/[0.03] hover:bg-zinc-950/5  dark:bg-white/[0.03] dark:hover:bg-white/5 px-0.5 my-6 rounded-full duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                orientation="vertical"
              >
                <ScrollArea.Thumb className="flex-1 bg-accent rounded-[10px] relative before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
              </ScrollArea.Scrollbar>
            </ScrollArea.Root>
            <div className="flex-shrink-0 w-full border-t border-border hidden md:block">
              <Container>
                <GuestBookForm
                  {...{
                    setTotalSignature,
                    addOptimisticSignatures,
                  }}
                />
              </Container>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.NestedRoot>
  )
}

export default GuestBook
