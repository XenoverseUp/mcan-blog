export default function Tutorials({ params }) {
  return (
    <main className="grid h-full w-full flex-grow place-items-center overflow-auto overscroll-contain">
      {new Array(100).fill("").map(() => (
        <p>{params.category}</p>
      ))}
    </main>
  )
}
