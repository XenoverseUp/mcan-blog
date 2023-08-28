"use client"

import GuestBookForm from "@/components/composed/Layout/Drawer/GuestBookForm"
import Signature from "@/components/composed/Layout/Drawer/Signature"
import Button from "@/components/primitives/Button"
import { AccessibleIcon } from "@/components/primitives/Client"
import Container from "@/components/primitives/Container"
import useUpdateEffect from "@/hooks/useUpdateEffect"
import {
  ArrowRightIcon,
  CardStackPlusIcon,
  DragHandleDots2Icon,
} from "@radix-ui/react-icons"
import { useRef, useState } from "react"
import { Drawer } from "vaul"

/**
 *
 * @param {{initialSignatures: import("@/lib/guestbook").PaginatedSignature[]}} props
 * @returns {import("react").FC}
 */
export default function Drawers({ initialSignatures }) {
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
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <button
          tabIndex={0}
          className="grid aspect-square w-7 place-items-center rounded border border-border bg-neutral-50 dark:border-zinc-800 dark:bg-neutral-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <AccessibleIcon label="Navigation Menu" key="handle">
            <DragHandleDots2Icon className="origin-center scale-125 text-inherit" />
          </AccessibleIcon>
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-background/60 z-30" />
        <Drawer.Content className="isolate bg-background dark:bg-zinc-950 z-50 rounded-t-[16px] h-[80%] mt-24 fixed bottom-0 left-0 right-0 after:border-l after:border-r after:border-border">
          <div className="w-full h-full border-t flex flex-col border-l border-r border-border overflow-hidden rounded-t-[16px]">
            <div className="border-b border-t flex-shrink-0 border-t-transparent border-border h-fit">
              <div className="mx-auto bg-accent my-5 w-12 h-1 flex-shrink-0 rounded-full" />
            </div>
            <div className="w-full h-[32rem] overflow-hidden relative after:absolute after:bottom-0 after:left-0 after:right-3 after:h-16 after:bg-gradient-to-t after:from-white dark:after:from-zinc-950 after:to-transparent after:pointer-events-none">
              <Container className="w-full h-full overflow-auto">
                <div className="pb-16">
                  <Drawer.Title className="text-accent font-staff-condensed flex gap-4 text-5xl uppercase my-6">
                    <span>Shelf</span>
                  </Drawer.Title>
                  <nav className="space-y-5 text-2xl font-bold capitalize">
                    <Drawer.NestedRoot>
                      <Drawer.Trigger asChild>
                        <div
                          className="space-y-1 w-fit rounded-lg cursor-pointer group"
                          tabIndex={0}
                        >
                          <p className="group-hover:underline underline-offset-4 flex items-center gap-3">
                            <span>Guestbook</span>
                            <ArrowRightIcon className="group-hover:text-accent scale-110 transition-colors" />
                          </p>
                          <span className="font-normal normal-case text-sm block leading-5 opacity-75">
                            Don't forget to fill out my guestbook with your
                            lovely comments.
                          </span>
                        </div>
                      </Drawer.Trigger>
                      <Drawer.Portal>
                        <Drawer.Overlay className="fixed inset-0 bg-background/30 z-40" />
                        <Drawer.Content className="bg-background dark:bg-zinc-950 z-50 rounded-t-[16px] h-[78.5%] md:h-[79%] lg:h-[79.5%] mt-24 fixed bottom-0 left-0 right-0 after:border-l after:border-r after:border-border">
                          <div className="w-full h-full border-t flex flex-col border-l border-r border-border overflow-hidden rounded-t-[16px]">
                            <div className="border-b border-t flex-shrink-0 border-t-transparent border-border h-fit">
                              <div className="mx-auto bg-accent my-5 w-12 h-1 flex-shrink-0 rounded-full" />
                            </div>
                            <Container
                              element="header"
                              className="w-full flex-shrink-0 pb-4"
                            >
                              <div className="flex justify-between items-center">
                                <Drawer.Title className="text-accent capitalize font-bold mt-7 mb-2">
                                  <span className="text-4xl">Guestbook</span>
                                  <sup className="text-2xl ml-1">
                                    {totalSignature}
                                  </sup>
                                </Drawer.Title>
                                <Drawer.NestedRoot>
                                  <Drawer.Trigger asChild>
                                    <Button className="md:hidden">
                                      <AccessibleIcon label="Add Comment">
                                        <CardStackPlusIcon className="scale-125" />
                                      </AccessibleIcon>
                                    </Button>
                                  </Drawer.Trigger>
                                  <Drawer.Portal>
                                    <Drawer.Overlay className="md:hidden fixed inset-0 bg-background/50 z-50" />
                                    <Drawer.Content className="md:hidden bg-background dark:bg-zinc-950 z-[60] rounded-t-[16px] mt-24 fixed bottom-0 left-0 right-0 after:border-l after:border-r after:border-border">
                                      <div className="w-full h-full border-t flex flex-col border-l border-r border-border overflow-hidden rounded-t-[16px]">
                                        <div className="border-b border-t flex-shrink-0 border-t-transparent border-border h-fit">
                                          <div className="mx-auto bg-accent my-5 w-12 h-1 flex-shrink-0 rounded-full" />
                                        </div>
                                      </div>
                                      <Container className="my-7">
                                        <Drawer.Title className="text-accent capitalize font-bold mb-6">
                                          <span className="text-2xl">
                                            Create Signature
                                          </span>
                                        </Drawer.Title>
                                        <GuestBookForm
                                          {...{
                                            setTotalSignature,
                                            addOptimisticSignatures,
                                          }}
                                        />
                                      </Container>
                                    </Drawer.Content>
                                  </Drawer.Portal>
                                </Drawer.NestedRoot>
                              </div>
                              <span className="normal-case text-sm block leading-5 opacity-75">
                                Don't forget to fill out my guestbook with your
                                lovely comments.
                              </span>
                            </Container>
                            <div className="w-full h-64 overflow-hidden relative before:z-10 before:absolute before:top-0 before:left-0 before:right-3 before:h-8 before:bg-gradient-to-b before:from-white dark:before:from-zinc-950 before:to-transparent before:pointer-events-none">
                              <div
                                ref={scrollViewportRef}
                                className="w-full h-full z-0 overflow-auto"
                              >
                                <Container>
                                  <div className="space-y-9 md:space-y-12 py-8">
                                    {optimisticSignatures.map(signature => (
                                      <Signature
                                        key={
                                          signature.name + signature.createdAt
                                        }
                                        data={signature}
                                        pending={signature.pending}
                                      />
                                    ))}
                                    {signatures?.data.map(signature => (
                                      <Signature
                                        key={
                                          signature.name + signature.createdAt
                                        }
                                        data={signature}
                                      />
                                    ))}
                                  </div>
                                </Container>
                              </div>
                            </div>
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
                    <div className="hover:underline underline-offset-4 w-fit cursor-pointer">
                      snippets
                    </div>
                    <div className="hover:underline underline-offset-4 w-fit cursor-pointer">
                      tutorials
                    </div>
                    <div className="hover:underline underline-offset-4 w-fit cursor-pointer">
                      opinions
                    </div>
                  </nav>
                </div>
              </Container>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
