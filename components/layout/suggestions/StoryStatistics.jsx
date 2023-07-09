import Post from "@/assets/svg/post"
import Button from "@/components/ui/Button"
import cx from "@/utils/cx"

const StoryStatistics = async ({ className }) => {
  const count = 0

  return (
    <div className={cx(className, "flex flex-col w-full relative gap-2")}>
      <Button className="flex font-red-hat items-end flex-grow w-full p-6 bg-zinc-400 rounded-3xl shadow-xl">
        archive
      </Button>
      <div className="text-xs w-full h-10 flex-shrink-0 flex justify-between text-white px-4 items-center bg-accent-saturation rounded-full shadow-xl">
        <p className="font-inter font-medium text-white/80">
          {count
            ? `In total, ${count} posts published.`
            : `No posts published, yet.`}
        </p>
        <Post className="aspect-square w-4 fill-white" />
      </div>
    </div>
  )
}
export default StoryStatistics
