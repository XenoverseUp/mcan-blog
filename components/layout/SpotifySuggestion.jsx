import { getTopTrack, getTrack } from "@/lib/spotify"
import Image from "next/image"
import Button from "../ui/Button"
import Spotify from "@/assets/svg/social/spotify"
import Sine from "../canvas/Sine"

const SpotifySuggestion = async () => {
  const track = await getTrack()

  return (
    <div
      role="presentation"
      className="w-full h-36 bg-neutral-400 rounded-3xl relative overflow-hidden before:absolute before:inset-0 before:bg-black before:z-10 before:bg-opacity-40 before:backdrop-blur-xl"
    >
      <Image
        src={track.coverImage.url}
        alt={track.title}
        fill
        className="object-cover"
      />
      <main className="p-4 w-full h-full z-20 text-white absolute inset-0 flex justify-between font-red-hat">
        <div className="absolute inset-0 pointer-events-none">
          <Sine width={600} height={200} className="w-full h-full" />
        </div>
        <div className="h-full space-x-3 flex items-center">
          <div className="relative h-full aspect-square overflow-hidden rounded-xl shadow-2xl flex-shrink-0 ">
            <Image
              src={track.coverImage.url}
              alt={track.title}
              fill
              className="object-cover"
            />
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
          <Button
            className="flex items-center gap-2 px-5 py-[6px] bg-white text-black text-opacity-80 font-bold text-sm rounded-xl hover:scale-[1.025] shadow-xl transition-transform z-10"
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

export default SpotifySuggestion
