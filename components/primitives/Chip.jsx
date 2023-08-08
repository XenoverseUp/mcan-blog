import cx from "@/utils/cx"
import tinycolor from "tinycolor2"

const Chip = ({ children, className, color, border = false }) => (
  <span
    style={{
      color,
      borderColor: color,
      backgroundColor: tinycolor(color).darken(border ? 45 : 42),
    }}
    className={cx(
      className,
      "rounded-full px-4 pb-[5px] pt-[3px] font-mono text-xs font-bold",
      {
        border,
      }
    )}
  >
    {children}
  </span>
)

export default Chip
