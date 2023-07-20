import CanvasShowcase from "@/components/layout/suggestions/CanvasShowcase"
import SpotifyWidget from "@/components/layout/suggestions/Song/SpotifyWidget"
import StoryStatistics from "@/components/layout/suggestions/StoryStatistics"
import ArchiveButton from "../suggestions/ArchiveButton"

const Suggestions = () => (
  <section className="grid-rows-7 relative mb-6 box-border grid w-full grid-cols-12 gap-2 px-10">
    <span className="absolute -top-[26px] left-[72px] z-30 m-auto w-fit select-none rounded-t-xl bg-black px-3 pb-[6px] pt-1 font-secondary text-xs text-white transition-opacity duration-300 hover:opacity-0">
      can's pick
    </span>
    <SpotifyWidget className="col-span-full row-span-3 h-36" />
    <CanvasShowcase className="col-span-7 row-span-3 h-36" />
    <ArchiveButton className="col-span-5 row-span-3 @xl:row-span-2" />
    <StoryStatistics className="col-span-full row-span-1 @xl:col-span-5 @xl:row-span-1" />
  </section>
)

export default Suggestions
