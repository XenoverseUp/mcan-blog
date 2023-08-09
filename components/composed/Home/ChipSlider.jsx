"use client"

import Chip from "@/components/primitives/Chip"
import subdivide from "@/utils/subdivide"
import clsx from "clsx"
import { gsap } from "gsap"
import { useLayoutEffect, useMemo, useRef } from "react"

const ChipSlider = ({ chips }) => {
  const divisions = useMemo(() => subdivide(chips, 3), [])
  const refs = useRef([])
  const animations = []

  useLayoutEffect(() => {
    gsap.fromTo(
      "#marquee-container",
      { opacity: 0 },
      { opacity: 1, delay: 0.1 }
    )

    animations[0] = gsap.to(refs.current.at(0), {
      duration: 30,
      xPercent: -50,
      repeat: -1,
      ease: "none",
    })
    animations[1] = gsap.fromTo(
      refs.current.at(1),
      { xPercent: -50 },
      {
        duration: 22,
        xPercent: 0,
        ease: "none",
        repeat: -1,
      }
    )
    animations[2] = gsap.to(refs.current.at(2), {
      duration: 25,
      xPercent: -50,
      repeat: -1,
      ease: "none",
    })
  }, [])

  return (
    <div
      id="marquee-container"
      className="relative flex flex-col gap-[6px] overflow-hidden opacity-0 before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:top-0 before:z-10 before:w-16 before:bg-gradient-to-r before:from-background before:to-transparent after:pointer-events-none after:absolute after:bottom-0 after:right-0 after:top-0 after:z-10 after:w-16 after:bg-gradient-to-l after:from-background after:to-transparent"
    >
      {divisions.map((chipset, i) => (
        <div
          ref={instance => refs.current.push(instance)}
          key={`chipset-${i}`}
          className={clsx("relative flex h-auto w-fit gap-1", {
            "-left-1/4": i % 2,
          })}
          onMouseOver={() =>
            gsap.to(animations.at(i), {
              timeScale: 0.2,
              duration: 0.5,
            })
          }
          onMouseLeave={() =>
            gsap.to(animations.at(i), {
              timeScale: 1,
              duration: 1,
            })
          }
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
