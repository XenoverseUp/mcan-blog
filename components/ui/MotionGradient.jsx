const MotionGradient = ({ className }) => (
  <div aria-hidden className="absolute h-screen w-full blur-3xl">
    <span className="block aspect-square w-32 origin-top-right animate-spin bg-lime-500"></span>
    <span className="block aspect-square w-32 origin-top-right animate-spin bg-red-500"></span>
    <span className="block aspect-square w-32 origin-top-right animate-spin bg-indigo-700"></span>
  </div>
)

export default MotionGradient
