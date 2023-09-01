import cx from "@/lib/utils/cx"

const CircularProgress = ({
  className,
  width = 100,
  outerRadius = 40,
  innerRadius = 30,
}) => {
  return (
    <div
      className={cx(
        className,
        "aspect-square w-[--width] flex items-center justify-center",
      )}
      style={{ "--width": `${width}px` }}
    >
      <svg
        className="fill-accent stroke-blue-700"
        width={width}
        height={width}
        viewBox={`0 0 ${width} ${width}`}
        dangerouslySetInnerHTML={{
          __html: generatePath(width / 2, width / 2, outerRadius, innerRadius),
        }}
      ></svg>
    </div>
  )
}

function generatePath(centerX, centerY, outerRadius, innerRadius, props) {
  return `<path d="
  M ${centerX} ${centerY - outerRadius}
  A ${outerRadius} ${outerRadius} 0 1 0 ${centerX} ${centerY + outerRadius}
  A ${outerRadius} ${outerRadius} 0 1 0 ${centerX} ${centerY - outerRadius}
  Z
  M ${centerX} ${centerY - innerRadius}
  A ${innerRadius} ${innerRadius} 0 1 1 ${centerX} ${centerY + innerRadius}
  A ${innerRadius} ${innerRadius} 0 1 1 ${centerX} ${centerY - innerRadius}
  Z
  "/>`
}

export default CircularProgress
