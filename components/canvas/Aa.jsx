"use client"

import cx from "@/utils/cx"
import {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import colors from "tailwindcss/colors"

class Aaa {
  #targets = []

  constructor({ canvas, count = 30, gridSize = 6, radius = 0.06 }) {
    /** @type {HTMLCanvasElement} */
    this.canvas = canvas
    this.context = this.canvas.getContext("2d")
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.count = count
    this.gridSize = gridSize
    this.radius = radius
  }

  draw() {
    var margin = 100
    this.#targets = []
    var points = this.createGrid(this.gridSize)

    const gradient = this.context.createLinearGradient(0, 0, 500, 500)
    gradient.addColorStop(0, colors.orange[400])
    gradient.addColorStop(1, colors.red[500])

    this.context.fillStyle = gradient
    this.context.fillRect(0, 0, this.width, this.height)

    for (let i = 0; i < this.count; i++) {
      this.#targets.push(this.pick(points))
    }

    this.#targets.forEach(points => {
      const u = points[0]
      const v = points[1]

      const x = this.lerp(margin, this.width - margin, u)
      const y = this.lerp(margin, this.height - margin, v)

      const color = "rgba(255 255 255 / 0.4)"

      this.context.beginPath()
      this.context.moveTo(this.width / 2, this.height / 2)
      this.context.lineTo(x, y)
      this.context.lineWidth = (this.radius * this.width) / 18
      this.context.strokeStyle = color
      this.context.stroke()

      this.context.beginPath()
      this.context.arc(
        x,
        y,
        (this.radius * this.width) / 4,
        0,
        Math.PI * 2,
        false,
      )
    })

    this.#targets.forEach(points => {
      const u = points[0]
      const v = points[1]

      const x = this.lerp(margin, this.width - margin, u)
      const y = this.lerp(margin, this.height - margin, v)

      const color = "#660728" // "rgba(0 0 0 / 0.8)"

      this.context.beginPath()
      this.context.arc(
        x,
        y,
        (this.radius * this.width) / 4,
        0,
        Math.PI * 2,
        false,
      )
      this.context.fillStyle = color
      this.context.fill()
    })
  }

  clear() {
    this.context.clearRect(0, 0, this.width, this.height)
  }

  createGrid(count) {
    const points = []

    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = count <= 1 ? 0.5 : x / (count - 1)
        const v = count <= 1 ? 0.5 : y / (count - 1)

        points.push([u, v])
      }
    }
    return points
  }

  rangeFloor(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  pick(array) {
    if (array.length === 0) return undefined
    return array[this.rangeFloor(0, array.length)]
  }

  lerp(min, max, t) {
    return min * (1 - t) + max * t
  }
}

const Aa = forwardRef(
  ({ width, height, className, radius, count, gridSize }, ref) => {
    let canvas = useRef(null)
    let aa = useRef(null)
    const [loading, setLoading] = useState(true)

    useLayoutEffect(() => {
      aa.current = new Aaa({
        canvas,
        count,
        radius,
        gridSize,
      })

      aa.current.draw()

      setLoading(false)
    }, [])

    useImperativeHandle(ref, () => ({
      refresh: () => {
        aa.current.clear()
        aa.current.draw()
      },
    }))

    return (
      <canvas
        {...{ width, height }}
        ref={instance => {
          canvas = instance
        }}
        className={cx(className, "transition-opacity", {
          "opacity-0": loading,
          "opacity-1": !loading,
        })}
      />
    )
  },
)

export default Aa
