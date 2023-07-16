import Post from "@/assets/svg/post"
import cx from "@/utils/cx"

const StoryStatistics = ({ className }) => {
  const count = 0

  return (
    <div
      className={cx(
        className,
        "flex h-10 w-full flex-shrink-0 items-center justify-between rounded-full bg-accent-saturation px-4 text-xs text-white shadow-xl"
      )}
    >
      <p className="select-none font-inter font-medium text-white/80">
        {count
          ? `In total, ${count} posts published.`
          : `No posts published, yet.`}
      </p>
      <Post className="aspect-square w-4 fill-white" />
    </div>
  )
}
export default StoryStatistics
