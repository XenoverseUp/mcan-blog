import PixelatedArrow from "@/assets/svg/pixelated-arrow"
import Post from "@/assets/svg/post"
import Button from "@/components/ui/Button"
import cx from "@/utils/cx"

const StoryStatistics = async ({ className }) => {
  const count = 0

  return (
    <div className={cx(className, "flex flex-col w-full relative gap-2")}>
      <Button
        label="Archive"
        href="/archive"
        className="flex group font-red-hat items-end flex-grow w-full p-6 bg-white rounded-3xl shadow-xl relative before:absolute before:inset-2 before:rounded-2xl before:border before:border-dashed before:border-accent "
      >
        <div className="flex justify-between items-center border-b border-accent w-full pb-1">
          <p className="font-medium">archive</p>
          <PixelatedArrow className="w-6 aspect-square fill-black group-hover:translate-x-1 transition-transform" />
        </div>
      </Button>
      <div className="text-xs w-full h-10 flex-shrink-0 flex justify-between text-white px-4 items-center bg-accent-saturation rounded-full shadow-xl">
        <p className="font-inter font-medium text-white/80 select-none">
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
