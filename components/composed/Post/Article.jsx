import { compileMDX } from "next-mdx-remote/rsc"

const Article = async ({ data }) => {
  const { content } = await compileMDX({
    source: data,
    options: { parseFrontmatter: false },
  })

  return (
    <article className="prose !prose-invert prose-base md:prose-lg xl:prose-xl max-w-none prose-stone prose-amber prose-p:text-t-secondary prose-headings:font-semibold">
      {content}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laborum
        modi quibusdam nisi officiis nemo odio adipisci enim eveniet
        necessitatibus, ut culpa eum fuga quam facere minus assumenda optio
        dignissimos.
      </p>
    </article>
  )
}
export default Article
