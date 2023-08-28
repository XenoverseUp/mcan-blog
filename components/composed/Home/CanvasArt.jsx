import img from "@/assets/canvas.png"
import CanvasLikeButton from "@/components/composed/home/CanvasLikeButton"
import Image from "next/image"

const CanvasArt = () => {
  return (
    <div className="relative mx-auto flex h-auto max-w-xl flex-col gap-4 rounded-t-2xl bg-background px-4 py-[14px] after:absolute after:-inset-[1px] after:-z-10 after:rounded-t-2xl after:bg-gradient-to-b after:from-border after:to-background">
      <header className="col-span-full flex w-full items-center justify-between @2xl:col-span-2 @2xl:col-start-4">
        <div>
          <h3 className="font-staff-wide">
            Pomegrenate<sup>1</sup>
          </h3>
          <p className="text-sm">Today's Canvas Art</p>
        </div>
        <CanvasLikeButton />
      </header>
      <div className="col-span-full aspect-[5_/_3] w-full overflow-hidden rounded-md bg-red-400 @2xl:col-span-3 @2xl:col-start-1 @2xl:row-span-full">
        <Image
          width={1000}
          height={600}
          src={img}
          alt="canvas"
          priority
          placeholder="blur"
        />
      </div>
      <p className="col-span-full text-sm leading-[1.7] @2xl:col-span-2 @2xl:col-start-4">
        Technology thrives in a way never seen before. The capabilities of
        human-made machines mesmerizes me. And here I am — trying to left a
        fingerprint in this universe.
      </p>
    </div>
  )
}

export default CanvasArt
