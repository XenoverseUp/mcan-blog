import Sine from "@/components/canvas/Sine"
import Button from "@/components/primitives/Button"
import { getMockTrack, getTopTrack, getTrack } from "@/lib/spotify"
import { DotFilledIcon } from "@radix-ui/react-icons"

import Image from "next/image"

const SpotifyWidget = async () => {
  const track = await (process.env.NODE_ENV === "development"
    ? getMockTrack()
    : getTrack("3M3sdBf1qG5WkhNYXIq7sK"))

  return (
    <div className="relative border border-border h-40 w-full isolate flex items-center gap-3 rounded-xl bg-background p-4 overflow-hidden after:absolute after:-z-10 after:inset-0 after:backdrop-blur-sm after:bg-[radial-gradient(122.38%_122.38%_at_-0.00%_-0.00%,_rgba(var(--background)_/_0.900)_0%,rgba(var(--background)_/_0.60)_40%,_rgb(var(--background))_100%)]">
      <Image
        src={track.coverImagePlaceholder}
        alt={`${track.title}-cover-placeholder`}
        fill
        priority
        quality={0}
        className="pointer-events-none object-cover transition-all -z-20 rounded-xl"
      />
      <div className="absolute inset-0 pointer-events-none dark:opacity-40">
        <Sine width={600} className="h-full w-full" />
      </div>

      <div className="relative hover:scale-[1.025] transition-all hover:shadow-xl cursor-pointer aspect-square h-full overflow-hidden rounded-[0.25rem] shadow-md bg-black/5 dark:bg-white/5">
        <Image
          src={track.coverImage}
          alt={`${track.title}-cover`}
          placeholder="blur"
          blurDataURL={track.coverImagePlaceholder}
          fill
          priority
          quality={100}
        />
      </div>
      <main className="flex flex-col justify-around h-full">
        <span className="text-xs opacity-75">Monthly Favorite</span>
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
            <span>{track.artist}</span>
            <span>-</span>
            <span>{track.albumName}</span>
            <DotFilledIcon />
            <span className="font-bold">{track.year}</span>
          </div>
        </div>
        <Button
          href={track.url}
          target="_blank"
          size="small"
          variant="soft"
          className="mt-2"
        >
          Play on Spotify
        </Button>
      </main>
    </div>
  )
}

export default SpotifyWidget
