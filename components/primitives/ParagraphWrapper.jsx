import cx from "@/utils/cx"

const ParagraphWrapper = ({ children, className }) => (
  <div className={cx(className, "space-y-4 leading-5")}>{children}</div>
)

export default ParagraphWrapper
