export default function Snippets() {
  return (
    <main className="grid place-items-center flex-grow h-full w-full overflow-auto overscroll-contain">
      {new Array(100).fill("").map(() => (
        <p>snippets</p>
      ))}
    </main>
  )
}
