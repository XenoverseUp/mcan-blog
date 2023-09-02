"use client"

import cx from "@/lib/utils/cx"
import {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react"

class Wave {
  constructor(canvas, maxAmplitude = 7, length = 40, frequency = 40, y) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext("2d")
    this.maxAmplitude = maxAmplitude
    this.amplitude = 0
    this.length = length
    this.frequency = frequency
    this.frequencySine = frequency / 2
    this.increment = Math.random() * 360
    this.incrementSine = this.increment
    this.lineWidth = 2
    this.y = y || this.canvas.height / 2

    this.multiplier = 1

    this.frameCallback = () => {
      this.draw(this.ctx)
      requestAnimationFrame(this.frameCallback)
    }
  }

  draw(c) {
    c.beginPath()
    c.strokeStyle = `rgba(255, 255, 255, .4)`
    c.lineWidth = this.lineWidth
    c.clearRect(0, 0, this.canvas.width, this.canvas.height)
    c.moveTo(0, this.canvas.height / 2)

    for (let i = 0; i < this.canvas.width; i += 1) {
      c.lineTo(
        i,
        (this.y / this.multiplier +
          Math.sin(
            Math.cos(i / this.length + this.increment) * this.amplitude +
              Math.sin(i / this.length + this.incrementSine) * this.amplitude,
          ) *
            this.amplitude +
          Math.cos(i / this.length + this.increment) * this.amplitude) *
          this.multiplier,
      )
    }

    c.stroke()
    c.closePath()

    this.amplitude = Math.cos(this.increment) * this.maxAmplitude
    this.increment -= this.frequency / 1000
    this.incrementSine -= this.frequencySine / 1000
  }

  animate() {
    this.frameCallback()
  }

  toggleExcitement() {
    if (this.frequency === 50 && this.multiplier === 1) {
      this.frequency *= 1.1
      this.multiplier = 3
    } else {
      this.frequency = 50
      this.multiplier = 1
    }
  }
}

const Sine = forwardRef(({ width, height, className }, ref) => {
  const canvas = useRef(null)
  const wave = useRef(null)
  const [loading, setLoading] = useState(true)

  useLayoutEffect(() => {
    wave.current = new Wave(canvas.current)
    wave.current.animate()
    setLoading(false)
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      toggleExcitement: () => {
        wave.current.toggleExcitement()
      },
    }),
    [],
  )

  return (
    <canvas
      {...{ width, height, ref: canvas }}
      className={cx(className, "transition-opacity", {
        "opacity-0": loading,
        "opacity-1": !loading,
      })}
    />
  )
})

export default Sine
