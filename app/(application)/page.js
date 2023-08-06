import { getAllPostsMeta } from "@/lib/mdx"

export default async function Home() {
  const data = await getAllPostsMeta()

  return <main className="w-full overflow-y-auto"></main>
}
