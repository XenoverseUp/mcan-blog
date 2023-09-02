"use client"

import Chip from "@/components/primitives/Chip"
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect"
import subdivide from "@/lib/utils/subdivide"
import clsx from "clsx"
import { gsap } from "gsap"
import Link from "next/link"
import { useEffect, useMemo, useRef } from "react"

const gapX = 5
const gapY = 6
const ChipSlider = ({ chips }) => {
  const divisions = useMemo(() => subdivide(chips, 3), [])
  const refs = useRef([])
  const animations = []

  useEffect(() => console.log(divisions), [])

  useIsomorphicLayoutEffect(() => {
    gsap.fromTo(
      "#marquee-container",
      { opacity: 0 },
      { opacity: 1, delay: 0.1 },
    )

    // Goes from -50% to {gapX / 2}.
    animations[0] = gsap.fromTo(
      refs.current.at(0),
      { x: "-50%" },
      {
        duration: 30 * 0.75,
        x: 0,
        repeat: -1,
        ease: "none",
      },
    )
    animations[1] = gsap.fromTo(
      refs.current.at(1),
      { x: "-50%" },
      {
        duration: 21 * 0.75,
        x: 0,
        ease: "none",
        repeat: -1,
      },
    )
    animations[2] = gsap.fromTo(
      refs.current.at(2),
      { x: "-50%" },
      {
        duration: 19 * 0.75,
        x: 0,
        repeat: -1,
        ease: "none",
      },
    )
  }, [])

  return (
    <div
      style={{ "--gap-y": `${gapY}px` }}
      id="marquee-container"
      className="relative flex flex-col gap-[var(--gap-y)] overflow-hidden opacity-0 before:pointer-events-none before:absolute before:inset-0 before:z-10 before:bg-[linear-gradient(to_right,theme(colors.background),transparent_20%_80%,theme(colors.background))]"
    >
      {divisions.map((chipset, i) => (
        <div
          ref={instance => refs.current.push(instance)}
          key={`chipset-${i}`}
          className={clsx("relative flex h-8 w-fit")}
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
          {new Array(2).fill(null).map((_, j) =>
            chipset.map(({ name, color, url }, k) => (
              <Link
                className="mr-[5px]"
                key={`${name}-${i}-${j}-${k}`}
                href={url}
                target="_blank"
              >
                <Chip {...{ color }}>{name}</Chip>
              </Link>
            )),
          )}
        </div>
      ))}
    </div>
  )
}
export default ChipSlider
