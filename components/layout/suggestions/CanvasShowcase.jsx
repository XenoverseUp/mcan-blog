import cx from "@/utils/cx"

const CanvasShowcase = ({ className }) => (
  <div
    className={cx(
      className,
      "grid place-items-center shadow-xl bg-slate-400 rounded-3xl relative overflow-hidden"
    )}
  ></div>
)

export default CanvasShowcase
