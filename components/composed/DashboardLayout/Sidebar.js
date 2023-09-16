import cx from "@/utils/cx"

const Sidebar = ({ className }) => {
  return (
    <div
      className={cx(
        "w-[360px] h-full border-r border-border bg-zinc-950 p-4 font-staff-wide text-cool-lime-300",
        className,
      )}
    >
      Sidebar
    </div>
  )
}

export default Sidebar
