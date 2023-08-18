"use client"

import Container from "@/components/primitives/Container"
import { AccessibleIcon } from "@/components/primitives/Radix"
import usePrevious from "@/hooks/usePrevious"
import { ArrowRightIcon, DragHandleDots2Icon } from "@radix-ui/react-icons"
import * as ScrollArea from "@radix-ui/react-scroll-area"
import { gsap } from "gsap"
import { useEffect, useRef, useState } from "react"

const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${i}`)

export default function Drawer() {
  const [open, setOpen] = useState(null)
  const [nestedOpen, setNestedOpen] = useState(false)

  const [isDragging, setIsDragging] = useState(false)
  const [initialPosition, setInitialPosition] = useState(null)
  const [dragProgress, setDragProgress] = useState(0)
  const previousDragProgress = usePrevious(dragProgress)
  const [dragHeight, setDragHeight] = useState(0)
  const [height, setHeight] = useState(null)

  const overlay = useRef(null)
  const content = useRef(null)

  useEffect(() => {
    setHeight(content.current.getBoundingClientRect().height)
  }, [])

  useEffect(() => {
    if (open) {
      gsap.set(document.body, { userSelect: "none", overflow: "hidden" })
      gsap.to(overlay.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.5,
        ease: "expo.out",
      })
      gsap.to(content.current, { y: 0, duration: 0.5, ease: "expo.out" })
    } else if (!isDragging && !open) {
      gsap.set(document.body, { userSelect: "auto", overflow: "auto" })
      gsap.to(overlay.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.9,
        ease: "expo.out",
      })
      gsap.to(content.current, {
        y: "100%",
        duration: 0.9,
        ease: "expo.out",
      })
    } else if (!open) {
      gsap.set(document.body, { userSelect: "auto", overflow: "auto" })
    }
  }, [open])

  /**
   *
   * @param {PointerEvent} e
   */
  const onPress = e => {
    setIsDragging(true)
    setInitialPosition(e.clientY)
    setDragHeight(0)
    setDragProgress(0)
  }
  const onRelease = () => {
    if (dragProgress <= 0.4 || dragProgress < 0) {
      gsap.to(content.current, {
        y: 0,
      })
      gsap.to(overlay.current, {
        opacity: 1,
      })
    }
    setIsDragging(false)
  }

  const onDrag = e => {
    if (isDragging) {
      setDragHeight(e.clientY - initialPosition)
      setDragProgress(dragHeight / height)
      console.log(dragProgress)

      if (dragProgress > 0.4) {
        gsap.to(content.current, {
          y: "100%",
        })
        gsap.to(overlay.current, {
          opacity: 0,
        })
        setOpen(false)
        setIsDragging(false)
      } else {
        gsap.set(overlay.current, {
          opacity: 1 - dragProgress,
        })
      }

      if (dragProgress > -0.06)
        gsap.set(content.current, {
          y: dragProgress * 100 + "%",
        })
    }
  }

  return (
    <>
      <button
        tabIndex={0}
        className="grid aspect-square w-7 place-items-center rounded border border-zinc-900 bg-neutral-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        onClick={() => setOpen(true)}
      >
        <AccessibleIcon label="Navigation Menu" key="handle">
          <DragHandleDots2Icon className="origin-center scale-125" />
        </AccessibleIcon>
      </button>
      <div
        ref={overlay}
        onClick={() => {
          setOpen(state => !state)
        }}
        className="bg-background/60 fixed inset-0 z-20 pointer-events-none opacity-0"
      />
      <div
        ref={content}
        onPointerDown={onPress}
        onPointerUp={onRelease}
        onPointerLeave={onRelease}
        onPointerMove={onDrag}
        className="fixed flex flex-col bottom-0 isolate left-0 z-30 right-0 bg-zinc-950 h-[80%] translate-y-full rounded-t-[16px] mt-24 after:border-l after:border-r after:border-white/10 border border-white/10 after:absolute after:top-full  after:left-[-1px] after:right-[-1px] after:bg-zinc-950 after:h-[200vh] after:z-10"
      >
        <div className="border-b border-t flex-shrink-0 border-t-transparent border-white/5 h-fit">
          <div className="mx-auto bg-accent my-5 w-12 h-1 flex-shrink-0 rounded-full" />
        </div>
        <Container className="w-full flex-grow overflow-hidden select-none">
          <ScrollArea.Root className="w-full h-full overflow-hidden relative after:absolute after:bottom-0 after:left-0 after:right-3 after:h-16 after:bg-gradient-to-t after:from-zinc-950 after:to-transparent after:pointer-events-none">
            <ScrollArea.Viewport className="w-full h-full">
              <div className="pb-16">
                <h2 className="text-accent font-staff-condensed flex gap-4 text-5xl uppercase my-6">
                  <span>Shelf</span>
                </h2>
                <nav className="space-y-5 text-2xl font-bold capitalize">
                  <div className="space-y-1 w-fit rounded-lg cursor-pointer group">
                    <p className="group-hover:underline underline-offset-4 flex items-center gap-3">
                      <span>Guestbook</span>
                      <ArrowRightIcon className="group-hover:text-accent scale-110 transition-colors" />
                    </p>
                    <span className="font-normal normal-case text-sm block leading-5 opacity-75">
                      Don't forget to sign my guestbook with your lovely
                      comments.
                    </span>
                  </div>
                  <div className="cursor-pointer w-fit hover:underline underline-offset-4">
                    snippets
                  </div>
                  <div className="cursor-pointer w-fit hover:underline underline-offset-4">
                    tutorials
                  </div>
                  <div className="cursor-pointer w-fit hover:underline underline-offset-4">
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
    </>
  )
}
