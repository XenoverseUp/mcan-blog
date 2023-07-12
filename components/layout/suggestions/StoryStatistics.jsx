import PixelatedArrow from "@/assets/svg/pixelated-arrow"
import Post from "@/assets/svg/post"
import Button from "@/components/ui/Button"
import cx from "@/utils/cx"

const StoryStatistics = ({ className }) => {
  const count = 0

  return (
    <div
      className={cx(
        className,
        "text-xs w-full h-10 flex-shrink-0 flex justify-between text-white px-4 items-center bg-accent-saturation rounded-full shadow-xl",
      )}
    >
      <p className="font-inter font-medium text-white/80 select-none">
        {count
          ? `In total, ${count} posts published.`
          : `No posts published, yet.`}
      </p>
      <Post className="aspect-square w-4 fill-white" />
    </div>
  )
}
export default StoryStatistics
