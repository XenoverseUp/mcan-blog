import CanvasShowcase from "@/components/layout/suggestions/CanvasShowcase"
import SpotifyPlayer from "@/components/layout/suggestions/Song/SongSuggestion"
import StoryStatistics from "@/components/layout/suggestions/StoryStatistics"

const Suggestions = () => (
  <section className="px-10 mb-6 w-full box-border grid grid-cols-12 grid-rows-2 gap-2">
    <SpotifyPlayer className="col-span-full h-36" />
    <CanvasShowcase className="col-span-7 h-36" />
    <StoryStatistics className="col-span-5 h-36" />
  </section>
)

export default Suggestions
