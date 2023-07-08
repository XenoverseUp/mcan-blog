import cx from "@/utils/cx"

const GradientText = ({ children, colors = "from-orange-400 to-red-600" }) => (
  <span
    className={cx("text-transparent bg-clip-text bg-gradient-to-br", colors)}
  >
    {children}
  </span>
)

export default GradientText
