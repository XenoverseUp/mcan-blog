"use client"

import { useLayoutEffect, useRef } from "react"

class Wave {
  constructor(canvas, maxAmplitude = 5, length = 20, frequency = 50, y) {
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
    this.ctx.strokeStyle = `hsl(0, 100%, 100%)`
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
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

  useLayoutEffect(() => {
    const wave = new Wave(ref.current)
    wave.animate()
  }, [])

  return <canvas {...{ width, height, ref, className }} />
}

export default Sine
