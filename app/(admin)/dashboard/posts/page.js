import Link from "next/link"

export default async function Posts() {
  return (
    <main>
      <h1 className="text-xl font-bold p-4 text-cool-lime-300">Posts</h1>
      <Link href="/dashboard/posts/create">Create</Link>
    </main>
  )
}
