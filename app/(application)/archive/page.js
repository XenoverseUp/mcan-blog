export default function Archive() {
  return (
    <main className="grid place-items-center flex-grow h-full w-full overflow-auto overscroll-contain">
      {new Array(100).fill("").map(() => (
        <p>archive</p>
      ))}
    </main>
  )
}
