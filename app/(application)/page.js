import { getAllPostsMeta } from "@/lib/mdx"

export default async function Home() {
  const data = await getAllPostsMeta()

  return (
    <main className="h-full w-full flex-grow overflow-auto overscroll-contain px-12 pt-24">
      <h2 className="pb-6 text-3xl font-bold">Recent Posts</h2>

      {data.map(post => (
        <div>
          <h1>{post.frontmatter.title}</h1>
        </div>
      ))}
    </main>
  )
}
