"use client"

import cx from "@/utils/cx"
import { useLayoutEffect, useRef, useState } from "react"

class Wave {
  constructor(canvas, maxAmplitude = 7, length = 40, frequency = 50, y) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext("2d")
    this.maxAmplitude = maxAmplitude
    this.amplitude = 0
    this.length = length
    this.frequency = frequency
    this.frequencySine = frequency / 2
    this.increment = Math.random() * 360
    this.incrementSine = this.increment
    this.y = y || this.canvas.height / 2

    this.frameCallback = () => {
      this.draw(this.ctx)
      requestAnimationFrame(this.frameCallback)
    }
  }

  draw(c) {
    c.beginPath()
    c.strokeStyle = `rgba(255, 255, 255, .4)`
    c.lineWidth = 3
    c.clearRect(0, 0, this.canvas.width, this.canvas.height)
    c.moveTo(0, this.canvas.height / 2)

    for (let i = 0; i < this.canvas.width; i += 1) {
      c.lineTo(
        i,
        this.y +
          Math.sin(
            Math.cos(i / this.length + this.increment) * this.amplitude +
              Math.sin(i / this.length + this.incrementSine) * this.amplitude
          ) *
            this.amplitude +
          Math.cos(i / this.length + this.increment) * this.amplitude
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
}

const Sine = ({ width, height, className }) => {
  const ref = useRef(null)
  const [loading, setLoading] = useState(true)

  useLayoutEffect(() => {
    const wave = new Wave(ref.current)
    wave.animate()
    setLoading(false)
  }, [])

  return (
    <canvas
      {...{ width, height, ref }}
      className={cx(className, "transition-opacity", {
        "opacity-0": loading,
        "opacity-1": !loading,
      })}
    />
  )
}

export default Sine
