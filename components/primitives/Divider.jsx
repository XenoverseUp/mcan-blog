const Divider = () => (
  <div className="flex w-full justify-center gap-4 py-2">
    {new Array(3).fill(null).map(() => (
      <span className="aspect-square w-1 rounded-full bg-accent"></span>
    ))}
  </div>
)
export default Divider
