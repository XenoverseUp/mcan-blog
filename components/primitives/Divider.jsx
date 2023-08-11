import cx from "@/utils/cx"

/**
 * @typedef {Object} DividerProps
 * @property {string} className
 * @property {"dots"|"line"} variant
 *
 */

/**
 *
 * @param {DividerProps} Props
 * @returns {import("react").ReactElement}
 */
const Divider = ({ className, variant = "dots" }) =>
  variant === "dots" ? (
    <div
      aria-hidden
      className={cx("my-2 flex w-full justify-center gap-4", className)}
    >
      {new Array(3).fill(null).map(() => (
        <span className="aspect-square w-1 rounded-full bg-accent"></span>
      ))}
    </div>
  ) : (
    <div
      aria-hidden
      className={cx("my-2 h-[1px] w-full bg-accent/50", className)}
    ></div>
  )
export default Divider
