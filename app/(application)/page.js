import { getAllPostsMeta } from "@/lib/mdx"
import Link from "next/link"

export default async function Home() {
  const data = await getAllPostsMeta()

  return (
    <main className="h-auto w-full flex-grow overflow-auto overscroll-contain px-12 pt-24">
      <h2 className="pb-6 text-3xl font-bold">Recent Posts</h2>

      {data.map(post => (
        <div>
          <Link href={`/${post.type}/${post.slug}`}>
            {post.frontmatter.title}
          </Link>
        </div>
      ))}
    </main>
  )
}
