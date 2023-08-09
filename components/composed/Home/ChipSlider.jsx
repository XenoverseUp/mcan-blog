"use client"

import Chip from "@/components/primitives/Chip"
import subdivide from "@/utils/subdivide"
import clsx from "clsx"
import { gsap } from "gsap"
import { useLayoutEffect, useMemo, useRef } from "react"

const ChipSlider = ({ chips }) => {
  const divisions = useMemo(() => subdivide(chips, 3), [])
  const refs = useRef([])
  const timelines = [gsap.timeline(), gsap.timeline(), gsap.timeline()]

  useLayoutEffect(() => {
    gsap.fromTo("#co", { opacity: 0 }, { opacity: 1, delay: 0.1 })

    timelines[0].to(refs.current.at(0), {
      duration: 30,
      xPercent: -50,
      repeat: -1,
      ease: "none",
    })
    timelines[1].fromTo(
      refs.current.at(1),
      { xPercent: -50 },
      {
        duration: 22,
        xPercent: 0,
        ease: "none",
        repeat: -1,
      }
    )
    timelines[2].to(refs.current.at(2), {
      duration: 25,
      xPercent: -50,
      repeat: -1,
      ease: "none",
    })
  }, [])

  return (
    <div
      id="co"
      className="relative flex flex-col gap-[6px] overflow-hidden opacity-0 before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:top-0 before:z-10 before:w-16 before:bg-gradient-to-r before:from-background before:to-transparent after:pointer-events-none after:absolute after:bottom-0 after:right-0 after:top-0 after:z-10 after:w-16 after:bg-gradient-to-l after:from-background after:to-transparent"
    >
      {divisions.map((chipset, i) => (
        <div
          ref={instance => refs.current.push(instance)}
          key={`chipset-${i}`}
          className={clsx("relative flex h-auto w-fit gap-1", {
            "-left-1/2": i % 2,
          })}
          onMouseOver={() => timelines.at(i).pause()}
          onMouseLeave={() => timelines.at(i).resume()}
        >
          {chipset.map(({ name, color }, j) => (
            <Chip key={name + i + j} {...{ color }}>
              {name}
            </Chip>
          ))}
          {chipset.map(({ name, color }, j) => (
            <Chip key={name + i + j} {...{ color }}>
              {name}
            </Chip>
          ))}
        </div>
      ))}
    </div>
  )
}
export default ChipSlider
