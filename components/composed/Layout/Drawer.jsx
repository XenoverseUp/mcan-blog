"use client"

import Button from "@/components/primitives/Button"
import Container from "@/components/primitives/Container"
import { AccessibleIcon } from "@/components/primitives/Radix"
import { DragHandleDots2Icon } from "@radix-ui/react-icons"
import { Drawer } from "vaul"

export default function Drawers() {
  return (
    <Drawer.Root>
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
        <Drawer.Overlay className="fixed inset-0 bg-background/60 z-30" />
        <Drawer.Content className="bg-zinc-950 z-40 flex flex-col rounded-t-[16px] h-[80%] mt-24 fixed bottom-0 left-0 right-0 overflow-hidden">
          <div className="bg-accent bg-opacity-[0.05] flex-1">
            <div className="mx-auto my-6 w-12 h-1 flex-shrink-0 rounded-full bg-accent" />
            <div className="w-full border-t border-accent/20 h-full">
              <Container className="max-w-2xl relative pt-6 h-full flex flex-col">
                <Drawer.Title className="font-staff-condensed mb-4 text-2xl">
                  SHELF
                </Drawer.Title>
                <div className="absolute flex flex-col gap-4 bottom-14 left-6 md:left-10 lg:left-16 right-6 md:right-10 lg:right-16 top-20 overflow-auto">
                  <Button variant="soft" size="small">
                    Snippets
                  </Button>
                  <Button variant="soft" size="small">
                    Snippets
                  </Button>
                  <Button variant="soft" size="small">
                    Snippets
                  </Button>
                  <Button variant="soft" size="small">
                    Snippets
                  </Button>
                  <Button variant="soft" size="small">
                    Snippets
                  </Button>
                  <Button variant="soft" size="small">
                    Snippets
                  </Button>
                  <Button variant="soft" size="small">
                    Snippets
                  </Button>
                  <Button variant="soft" size="small">
                    Snippets
                  </Button>
                  <Button variant="soft" size="small">
                    Snippets
                  </Button>
                  <Button variant="soft" size="small">
                    Snippets
                  </Button>
                  <Button variant="soft" size="small">
                    Snippets
                  </Button>
                  <Button variant="soft" size="small">
                    Snippets
                  </Button>
                  <Button variant="soft" size="small">
                    Snippets
                  </Button>
                  <Button variant="soft" size="small">
                    Snippets
                  </Button>
                  <Button variant="soft" size="small">
                    Snippets
                  </Button>
                  <Button variant="soft" size="small">
                    Snippets
                  </Button>
                  <Button variant="soft" size="small">
                    Snippets
                  </Button>
                </div>
              </Container>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
