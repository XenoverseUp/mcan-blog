import Spotify from "@/assets/svg/social/spotify"
import { PlayerType, spotifyTrackId } from "@/config"
import { getTopTrack, getTrack } from "@/lib/spotify"
import cx from "@/utils/cx"
import Image from "next/image"
import Button from "../../../ui/Button"
import Visualizer from "./Visualizer"

const SpotifyWidget = async ({ className }) => {
  const track = await (PlayerType == "track"
    ? getTrack(spotifyTrackId)
    : getTopTrack())

  return (
    <div
      role="presentation"
      className={cx(
        className,
        "relative w-full overflow-hidden rounded-3xl bg-neutral-400 shadow-xl @container/spotify-widget before:absolute before:inset-0 before:z-10 before:bg-black before:bg-opacity-30 before:backdrop-blur-xl"
      )}
    >
      <Image
        src={track.coverImagePlaceholder}
        alt={track.title}
        fill
        priority
        quality={0}
        className="pointer-events-none object-cover transition-all"
      />
      <span className="absolute left-0 right-0 top-0 z-30 m-auto w-fit select-none rounded-b-xl bg-black px-3 pb-[6px] pt-1 font-secondary text-xs text-white opacity-0 transition-opacity duration-300 hover:opacity-0">
        can's pick
      </span>
      <main className="absolute inset-0 z-20 flex h-full w-full justify-between gap-4 p-4 font-secondary text-white">
        <div className="flex h-full items-center space-x-3">
          <div className="relative grid aspect-square h-full flex-shrink-0 select-none place-items-center overflow-hidden rounded-xl bg-black bg-opacity-10 shadow-2xl">
            <Image
              src={track.coverImage}
              alt={track.title}
              fill
              quality={0}
              placeholder="blur"
              blurDataURL={track.coverImagePlaceholder}
              className="z-10 object-cover transition-all"
            />
            <span className="text-sm opacity-75">Loading...</span>
          </div>
          <div className="content">
            <h2 className="mb-3 line-clamp-2 text-[1.1rem] font-semibold @xl:text-xl">
              {track.title
                .split("-")
                .join("@")
                .split("(")
                .join("@")
                .split("@")
                .at(0)}
            </h2>
            <p className="mb-1 text-ellipsis whitespace-nowrap text-sm opacity-90">
              {track.artist}
            </p>
            <p className="flex items-center gap-2 text-sm">
              <span className="text-ellipsis whitespace-nowrap opacity-90">
                {track.albumName}
              </span>
              <span className="aspect-square w-[4px] flex-shrink-0 rounded-full bg-white" />
              <span className="font-semibold">{track.year}</span>
            </p>
          </div>
        </div>
        <Visualizer preview={track.preview} />
        <div className="flex flex-col justify-end">
          <Button
            className="z-10 flex items-center gap-2 whitespace-nowrap rounded-xl bg-white px-3 py-[6px] text-sm font-bold text-black text-opacity-80 shadow-xl transition-transform hover:scale-[1.025] @xl/spotify-widget:px-5"
            appendIcon={Spotify}
            iconClassName="aspect-square w-8 fill-green-500"
            href={track.url}
            target="_blank"
          >
            <span className="hidden @xl/spotify-widget:block">
              Play on Spotify
            </span>
          </Button>
        </div>
      </main>
    </div>
  )
}

export default SpotifyWidget
