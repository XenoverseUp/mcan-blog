import Angle from "@/lib/utils/angle"
import cx from "@/lib/utils/cx"
import { gsap } from "gsap"
import { useEffect, useMemo, useRef, useState } from "react"

const CircularProgress = ({
  className: { base, track, thumb } = { base: "", track: "", thumb: "" },
  size = 100,
  radius = 30,
  spread = 10,
  start = false,
  duration,
  progress: { type, angle } = { type: Angle.PROPORTION, angle: 0.3 },
}) => {
  const [progress, setProgress] = useState(0)
  const angleRef = useRef(
    type === Angle.PROPORTION
      ? Angle.fromProportion(angle)
      : type === Angle.DEGREES
      ? Angle.fromDegrees(angle)
      : new Angle(angle),
  )
  const p = { progress: 0 }

  useEffect(() => {
    let animation
    if (duration) {
      if (start) {
        animation = gsap.to(p, {
          progress: 0.999999,
          duration: duration,
          ease: "linear",
          onUpdate: () => {
            console.log(p.progress)
            setProgress(p.progress)
          },
        })
      }
    }

    return () => animation?.revert()
  }, [start, duration])

  return (
    <div
      className={cx(
        base,
        "aspect-square w-[--width] flex items-center justify-center",
      )}
      style={{ "--width": `${size}px` }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <path
          className={thumb}
          d={ring({
            x: size / 2,
            y: size / 2,
            radius,
            spread,
          })}
        />
        <path
          className={track}
          d={describeArc({
            x: size / 2,
            y: size / 2,
            radius: radius,
            spread,
            angle: duration ? Angle.fromProportion(progress) : angleRef.current,
          })}
        />
      </svg>
    </div>
  )
}

function ring({ x, y, radius, spread }) {
  const outerRadius = radius + spread / 2
  const innerRadius = radius - spread / 2

  return `M ${x} ${y - outerRadius}
          A ${outerRadius} ${outerRadius} 0 1 0 ${x} ${y + outerRadius}
          A ${outerRadius} ${outerRadius} 0 1 0 ${x} ${y - outerRadius}
          Z
          M ${x} ${y - innerRadius}
          A ${innerRadius} ${innerRadius} 0 1 1 ${x} ${y + innerRadius}
          A ${innerRadius} ${innerRadius} 0 1 1 ${x} ${y - innerRadius}

          Z`
}

/**
 *
 * @param {{startAngle: Angle, angle: Angle}} params
 * @returns
 */
function describeArc({
  x,
  y,
  radius,
  spread,
  startAngle = new Angle(0),
  angle,
}) {
  var innerStart = polarToCartesian(x, y, radius - spread / 2, angle)
  var innerEnd = polarToCartesian(x, y, radius - spread / 2, startAngle)
  var outerStart = polarToCartesian(x, y, radius + spread / 2, angle)
  var outerEnd = polarToCartesian(x, y, radius + spread / 2, startAngle)

  var largeArcFlag =
    angle.getDegrees() - startAngle.getDegrees() <= 180 ? "0" : "1"

  var d = [
    "M",
    outerStart.x,
    outerStart.y,
    "A",
    radius + spread / 2,
    radius + spread / 2,
    0,
    largeArcFlag,
    0,
    outerEnd.x,
    outerEnd.y,
    "L",
    innerEnd.x,
    innerEnd.y,
    "A",
    radius - spread / 2,
    radius - spread / 2,
    0,
    largeArcFlag,
    1,
    innerStart.x,
    innerStart.y,
    "L",
    outerStart.x,
    outerStart.y,
    "Z",
  ].join(" ")

  return d
}

function polarToCartesian(x, y, radius, angleInRadians) {
  return {
    x: x + radius * Math.cos(angleInRadians.getRadians() - Angle.QUARTER),
    y: y + radius * Math.sin(angleInRadians.getRadians() - Angle.QUARTER),
  }
}

export default CircularProgress
