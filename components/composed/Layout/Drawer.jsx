"use client"

import Container from "@/components/primitives/Container"
import { AccessibleIcon } from "@/components/primitives/Radix"
import { DragHandleDots2Icon } from "@radix-ui/react-icons"
import { Drawer } from "vaul"

export default function Drawers() {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <button
          tabIndex={0}
          className="grid aspect-square w-7 place-items-center rounded border border-zinc-900 bg-neutral-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <AccessibleIcon label="Navigation Menu" key="handle">
            <DragHandleDots2Icon className="origin-center scale-125" />
          </AccessibleIcon>
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-30" />
        <Drawer.Content className="bg-zinc-900 z-40 flex flex-col rounded-t-[16px] h-[80%] lg:h-[60%] xl:h-[40%] mt-24 fixed bottom-0 left-0 right-0 overflow-hidden">
          <div className="p-4 bg-zinc-900 flex-1">
            <div className="mx-auto w-12 h-1 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <Container className="max-w-2xl mx-auto">
              <Drawer.Title className="font-staff-condensed mb-4 text-2xl">
                DRAWER
              </Drawer.Title>
              <p className="text-zinc-300 mb-2">
                This component can be used as a replacement for a Dialog on
                mobile and tablet devices.
              </p>
            </Container>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
