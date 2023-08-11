import cx from "@/utils/cx"
import tinycolor from "tinycolor2"

const Chip = ({ children, className, color, border = true }) => (
  <span
    style={{
      "--color-bg": tinycolor(color).setAlpha(border ? 0.15 : 0.25),
      "--color-fg": tinycolor(color).brighten().saturate(),
    }}
    className={cx(
      className,
      "flex h-7 w-fit cursor-pointer select-none items-center whitespace-nowrap rounded-full border-[var(--color-fg)] bg-[var(--color-bg)] px-4 pb-[4px] pt-[3px] font-mono text-xs font-bold text-[var(--color-fg)] transition-colors hover:bg-[var(--color-fg)] hover:text-black/70",
      {
        border,
      }
    )}
  >
    {children}
  </span>
)

export default Chip
