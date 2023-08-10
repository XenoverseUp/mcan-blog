"use client"

import Chip from "@/components/primitives/Chip"
import subdivide from "@/utils/subdivide"
import clsx from "clsx"
import { gsap } from "gsap"
import Link from "next/link"
import { useLayoutEffect, useMemo, useRef } from "react"

const ChipSlider = ({ chips }) => {
  const divisions = useMemo(() => subdivide(chips, 3), [])
  const refs = useRef([])
  const animations = []
  const gapX = 5
  const gapY = 7

  useLayoutEffect(() => {
    gsap.fromTo(
      "#marquee-container",
      { opacity: 0 },
      { opacity: 1, delay: 0.1 }
    )

    // Goes from -50% to `gap` / 2: 2px.
    animations[0] = gsap.fromTo(
      refs.current.at(0),
      { x: "-50%" },
      {
        duration: 30 * 0.75,
        x: gapX / 2,
        repeat: -1,
        ease: "none",
      }
    )
    animations[1] = gsap.fromTo(
      refs.current.at(1),
      { x: "-50%" },
      {
        duration: 21 * 0.75,
        x: gapX / 2,
        ease: "none",
        repeat: -1,
      }
    )
    animations[2] = gsap.fromTo(
      refs.current.at(2),
      { x: "-50%" },
      {
        duration: 19 * 0.75,
        x: gapX / 2,
        repeat: -1,
        ease: "none",
      }
    )
  }, [])

  return (
    <div
      style={{ "--gap-y": `${gapY}px` }}
      id="marquee-container"
      className="relative flex h-fit flex-col gap-[var(--gap-y)] overflow-hidden opacity-0 before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:top-0 before:z-10 before:w-12 before:bg-gradient-to-r before:from-background before:to-transparent after:pointer-events-none after:absolute after:bottom-0 after:right-0 after:top-0 after:z-10 after:w-16 after:bg-gradient-to-l after:from-background after:to-transparent"
    >
      {divisions.map((chipset, i) => (
        <div
          ref={instance => refs.current.push(instance)}
          key={`chipset-${i}`}
          style={{ "--gap-x": `${gapX}px` }}
          className={clsx("relative flex h-fit w-fit gap-[var(--gap-x)]")}
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
          {chipset.map(({ name, color, url }, j) => (
            <Link className="h-7" href={url} target="_blank">
              <Chip key={name + i + j} {...{ color }}>
                {name}
              </Chip>
            </Link>
          ))}
          {chipset.map(({ name, color, url }, j) => (
            <Link className="h-fit" href={url} target="_blank">
              <Chip key={name + i + j} {...{ color }}>
                {name}
              </Chip>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}
export default ChipSlider
