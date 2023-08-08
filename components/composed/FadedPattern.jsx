import Pattern from "@/assets/svg/ui/Pattern.svg"

const FadedPattern = () => (
  <div
    className="pointer-events-none absolute  left-0 right-0 top-0 -z-20 m-auto w-full max-w-[600px] overflow-hidden md:right-[unset] md:max-h-[600px]"
    aria-hidden
  >
    <span className="absolute h-full w-full bg-[radial-gradient(400px_400px_at_top_center,_var(--tw-gradient-stops))] from-background/50 to-background md:bg-[radial-gradient(122.38%_122.38%_at_-0.00%_-0.00%,_rgba(0,_0,_0,_0.40)_0%,rgba(0,_0,_0,_0.80)_50%,_#000_76.56%)]" />
    <Pattern className="w-full stroke-0" />
  </div>
)

export default FadedPattern
