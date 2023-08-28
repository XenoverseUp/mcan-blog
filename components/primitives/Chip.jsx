import cx from "@/lib/utils/cx"
import tinycolor from "tinycolor2"

const Chip = ({ children, className, color, border = true }) => (
  <span
    style={{
      "--color-dark-bg": tinycolor(color).setAlpha(border ? 0.15 : 0.25),
      "--color-dark-fg": tinycolor(color).brighten().saturate(),
      "--color-light-bg": tinycolor(color).brighten(),
      "--color-light-fg":
        tinycolor(color).getBrightness() > 240
          ? tinycolor(color).darken(80).saturate()
          : tinycolor(color).darken(35).saturate(),
    }}
    className={cx(
      className,
      "flex h-7 w-fit cursor-pointer select-none items-center font-bold whitespace-nowrap rounded-full border-[var(--color-light-fg)] dark:border-[var(--color-dark-fg)] bg-[var(--color-light-bg)] dark:bg-[var(--color-dark-bg)] px-4 pb-[4px] pt-[3px] font-mono text-xs dark:font-bold text-[var(--color-light-fg)] dark:text-[var(--color-dark-fg)] transition-colors dark:hover:bg-[var(--color-dark-fg)] dark:hover:text-black/70",
      {
        border,
      },
    )}
  >
    {children}
  </span>
)

export default Chip
