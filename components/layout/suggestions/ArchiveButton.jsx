import PixelatedArrow from "@/assets/svg/pixelated-arrow"
import Button from "@/components/ui/Button"
import cx from "@/utils/cx"

const ArchiveButton = ({ className }) => (
  <Button
    className={cx(
      className,
      "flex group font-red-hat items-end flex-grow w-full p-6 bg-white rounded-3xl shadow-xl relative outline-dashed -outline-offset-8 outline-accent",
    )}
    label="Archive"
    href="/archive"
  >
    <div className="flex justify-between items-center border-b border-accent w-full pb-1">
      <p className="font-medium">archive</p>
      <PixelatedArrow className="w-6 aspect-square fill-black group-hover:translate-x-1 transition-transform" />
    </div>
  </Button>
)

export default ArchiveButton
