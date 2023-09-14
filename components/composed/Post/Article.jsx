import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic"
import { compileMDX } from "next-mdx-remote/rsc"
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"

const Article = async ({ data }) => {
  const { content } = await compileMDX({
    source: data,
    options: {
      mdxOptions: {
        format: "mdx",
        rehypePlugins: [
          rehypeSlug,
          () =>
            rehypeAutolinkHeadings({
              behavior: "append",
              content: fromHtmlIsomorphic("<span>#</span>", { fragment: true }),
            }),
        ],
      },
      parseFrontmatter: false,
    },
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
