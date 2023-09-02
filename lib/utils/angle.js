export default class Angle {
  #radian

  constructor(radian) {
    this.#radian = radian
  }

  static fromDegrees(degree) {
    return new Angle(Angle.deg2rad(degree))
  }

  static fromProportion(proportion) {
    return new Angle(2 * Math.PI * proportion)
  }

  static deg2rad = deg => (deg * Math.PI) / 180.0
  static rad2deg = rad => (rad / Math.PI) * 180
  static prop2deg = prop => 360 * prop
  static deg2prop = deg => deg / 360
  static prop2rad = prop => 2 * Math.PI * prop
  static rad2prop = rad => rad / (2 * Math.PI)

  static RADIANS = Symbol(0)
  static DEGREES = Symbol(1)
  static PROPORTION = Symbol(2)

  static QUARTER = Math.PI / 2
  static HALF = Math.PI

  getRadians() {
    return this.#radian
  }

  getDegrees() {
    return Angle.rad2deg(this.#radian)
  }

  getProportion() {
    return Angle.rad2prop(this.#radian)
  }
}
