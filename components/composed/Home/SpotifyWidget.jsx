import Player from "@/components/composed/Home/Player"
import Button from "@/components/primitives/Button"
import { getMockTrack, getTopTrack, getTrack } from "@/lib/spotify"
import { DotFilledIcon, MoonIcon } from "@radix-ui/react-icons"

const SpotifyWidget = async () => {
  const track = await (process.env.NODE_ENV !== "development"
    ? getMockTrack()
    : getTopTrack(19))

  return (
    <div className="relative border border-border h-40 w-full isolate flex items-center gap-3 rounded-xl bg-background p-4 overflow-hidden after:absolute after:-z-10 after:inset-0 after:backdrop-blur-sm after:bg-[radial-gradient(122.38%_122.38%_at_-0.00%_-0.00%,_rgba(var(--background)_/_0.900)_0%,rgba(var(--background)_/_0.60)_40%,_rgb(var(--background)_/_0.9)_100%)]">
      <Player
        coverImage={track.coverImage}
        previewUrl={track.preview}
        coverImagePlaceholder={track.coverImagePlaceholder}
        title={track.title}
      />
      <main className="flex flex-col justify-around h-full">
        <div className="flex gap-1 text-xs opacity-75 select-none">
          <MoonIcon />
          <span>Monthly Favorite</span>
        </div>
        <div>
          <h3 className="font-staff-wide">
            {track.title
              .split("-")
              .join("@")
              .split("(")
              .join("@")
              .split("@")
              .at(0)}
          </h3>
          <div className="flex items-center gap-1 text-xs">
            <span className="max-w-[6rem] overflow-hidden whitespace-nowrap text-ellipsis">
              {track.artist}
            </span>
            <DotFilledIcon />
            <span>{track.albumName}</span>
          </div>
          <p className="font-bold text-xs mt-1">{track.year}</p>
        </div>
        <Button
          href={track.url}
          target="_blank"
          size="small"
          variant="soft-inverted"
          className="mt-2"
        >
          Play on Spotify
        </Button>
      </main>
    </div>
  )
}

export default SpotifyWidget
