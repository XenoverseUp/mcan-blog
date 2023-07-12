import CanvasShowcase from "@/components/layout/suggestions/CanvasShowcase"
import SpotifyWidget from "@/components/layout/suggestions/Song/SpotifyWidget"
import StoryStatistics from "@/components/layout/suggestions/StoryStatistics"
import ArchiveButton from "../suggestions/ArchiveButton"

const Suggestions = () => (
  <section className="px-10 mb-6 w-full box-border grid grid-cols-12 grid-rows-7 gap-2">
    <SpotifyWidget className="col-span-full row-span-3 h-36" />
    <CanvasShowcase className="col-span-7 row-span-3 h-36" />
    <ArchiveButton className="col-span-5 row-span-3 @xl:row-span-2" />
    <StoryStatistics className="col-span-full row-span-1 @xl:col-span-5 @xl:row-span-1" />
  </section>
)

export default Suggestions
