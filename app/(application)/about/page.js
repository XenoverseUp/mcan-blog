export default function About() {
  return (
    <main className="grid place-items-center flex-grow h-full w-full">
      {new Array(100).fill("").map(() => (
        <p>about</p>
      ))}
    </main>
  )
}
