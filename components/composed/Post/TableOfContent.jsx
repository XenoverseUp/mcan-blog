import cx from "@/utils/cx"

const TableOfContent = () => {
  return (
    <div className="w-full sticky top-24">
      <h2 className="text-cool-lime-300 font-medium mb-4 select-none">
        On this page
      </h2>
      <Subject>First Interactions</Subject>
      <Subject active>Getting to know the tools</Subject>
      <Subject>Numbers to art</Subject>
      <Subject>How is the future look like?</Subject>
    </div>
  )
}

const Subject = ({ children, active }) => (
  <p
    className={cx(
      "text-t-secondary text-sm mt-2 cursor-pointer hover:text-t-primary transition-colors",
      {
        "text-t-primary font-medium cursor-default": active,
      },
    )}
  >
    {children}
  </p>
)

export default TableOfContent
