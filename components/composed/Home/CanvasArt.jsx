import CanvasLikeButton from "@/components/composed/Home/CanvasLikeButton"

const CanvasArt = () => {
  return (
    <div className="relative h-96 w-full rounded-t-2xl bg-gradient-to-b from-white/30 to-background">
      <div className="absolute inset-[1px] flex flex-col gap-4 rounded-t-2xl bg-background px-4 py-3">
        <header className="flex w-full items-center justify-between">
          <div>
            <h3 className="font-staff-wide">
              Pomegrenate<sup>1</sup>
            </h3>
            <p className="text-sm">Today's Canvas Art</p>
          </div>
          <CanvasLikeButton />
        </header>
        <div
          name="canvas"
          className="aspect-[2/1] w-full rounded-lg bg-red-400 saturate-150"
        ></div>
      </div>
    </div>
  )
}

export default CanvasArt
