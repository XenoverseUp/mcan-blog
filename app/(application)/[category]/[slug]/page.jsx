import { getPostBySlug } from "@/lib/mdx"

export default async function Post({ params: { category, slug } }) {
  const { meta, content } = await getPostBySlug({
    type: category,
    slug,
  })

  return <div>{content}</div>
}
