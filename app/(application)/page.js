import Introduction from "@/components/layout/home/Introduction"
import Container from "@/components/ui/Container"
import { getAllPostsMeta } from "@/lib/mdx"

export default async function Home() {
  const data = await getAllPostsMeta()

  return (
    <main className="w-full overflow-y-auto">
      <Container element="section" className="flex-grow pt-32">
        <Introduction />
        <section>
          {data.map(({ type, frontmatter, slug }) => (
            <h1 className="text-6xl">{frontmatter.title}</h1>
          ))}
        </section>
      </Container>
    </main>
  )
}
