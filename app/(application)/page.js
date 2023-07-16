import { getAllPostsMeta } from "@/lib/mdx"

export default async function Home() {
  const data = await getAllPostsMeta()

  return (
    <main className="grid h-full w-full flex-grow place-items-center overflow-auto overscroll-contain">
      {data.map(post => (
        <div>
          <h1>{post.frontmatter.title}</h1>
        </div>
      ))}
    </main>
  )
}
