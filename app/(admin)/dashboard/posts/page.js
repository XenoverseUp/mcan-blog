import Link from "next/link"

export default async function Create() {
  return (
    <main>
      <h1 className="text-xl font-bold p-4 text-cool-lime-300">Posts</h1>
      <Link href="/dashboard/posts/create" className="p-4">
        Create
      </Link>
    </main>
  )
}
