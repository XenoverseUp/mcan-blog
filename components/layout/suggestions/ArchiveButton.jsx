import PixelatedArrow from "@/assets/svg/pixelated-arrow"
import Button from "@/components/ui/Button"
import cx from "@/utils/cx"

const ArchiveButton = ({ className }) => (
  <Button
    className={cx(
      className,
      "group relative flex w-full flex-grow items-end rounded-3xl bg-white p-6 font-red-hat shadow-xl outline-dashed -outline-offset-8 outline-accent"
    )}
    label="Archive"
    href="/archive"
  >
    <div className="flex w-full items-center justify-between border-b border-accent pb-1">
      <p className="font-medium">archive</p>
      <PixelatedArrow className="aspect-square w-6 fill-black transition-transform group-hover:translate-x-1" />
    </div>
  </Button>
)

export default ArchiveButton
