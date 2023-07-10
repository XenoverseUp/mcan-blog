import { getTopTrack, getTrack } from "@/lib/spotify"
import Image from "next/image"
import Button from "../../ui/Button"
import Spotify from "@/assets/svg/social/spotify"
import Sine from "../../canvas/Sine"
import cx from "@/utils/cx"
import { PlayerType, spotifyTrackId } from "@/config"
import SpotifyPlayer from "./SpotifyPlayer"

const SongSuggestion = async ({ className }) => {
  const track = await (PlayerType == "track"
    ? getTrack(spotifyTrackId)
    : getTopTrack())

  return (
    <div
      role="presentation"
      className={cx(
        className,
        "w-full shadow-xl bg-neutral-400 rounded-3xl relative overflow-hidden before:absolute before:inset-0 before:bg-black before:z-10 before:bg-opacity-30 before:backdrop-blur-xl"
      )}
    >
      <Image
        src={track.coverImagePlaceholder}
        alt={track.title}
        fill
        priority
        quality={0}
        className="object-cover transition-all pointer-events-none"
      />
      <span className="absolute hover:opacity-0 transition-opacity select-none duration-300 px-3 pt-1 pb-[6px] bg-black text-white top-0 right-4 rounded-b-xl z-30 font-red-hat text-xs">
        can's pick
      </span>
      <main className="p-4 w-full h-full z-20 text-white absolute inset-0 flex justify-between font-red-hat">
        <div className="absolute inset-0 pointer-events-none">
          <Sine
            width={600}
            height={400}
            className="w-full h-full duration-[3s]"
          />
        </div>
        <div className="h-full space-x-3 flex items-center">
          <div className="grid place-items-center relative bg-black bg-opacity-10 h-full aspect-square overflow-hidden rounded-xl shadow-2xl flex-shrink-0 select-none">
            <Image
              src={track.coverImage}
              alt={track.title}
              fill
              quality={0}
              placeholder="blur"
              blurDataURL={track.coverImagePlaceholder}
              className="object-cover transition-all z-10"
            />
            <span className="text-sm opacity-75">Loading...</span>
          </div>
          <div className="content">
            <h2 className="text-xl font-semibold mb-3">{track.title}</h2>
            <p className="text-sm opacity-90 mb-1">{track.artist}</p>
            <p className="flex items-center gap-2 text-sm">
              <span className="opacity-90">{track.albumName}</span>
              <span className="aspect-square w-[4px] flex-shrink-0 bg-white rounded-full" />
              <span className="font-semibold">{track.year}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <SpotifyPlayer src={track.preview} />
          <Button
            className="flex whitespace-nowrap items-center gap-2 px-5 py-[6px] bg-white text-black text-opacity-80 font-bold text-sm rounded-xl hover:scale-[1.025] shadow-xl transition-transform z-10"
            appendIcon={Spotify}
            iconClassName="aspect-square w-8 fill-green-500"
            href={track.url}
            target="_blank"
          >
            Play on Spotify
          </Button>
        </div>
      </main>
    </div>
  )
}

export default SongSuggestion
