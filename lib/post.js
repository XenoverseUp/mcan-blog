import prisma from "@/lib/db/prisma"
import { compileMDX } from "next-mdx-remote/rsc"

export const createPost = async () => {}
export const getPaginatedMeta = async ({
  publication = null,
  page = 0,
  limit = 20,
}) => {}
export const getPost = async ({ metaId }) => {}
export const publishPost = async ({ metaId }) => {}

export const getPostBySlug = async slug => {
  const rawSource = fs.readFileSync(
    path.join(rootDirectory, "public", "source", `${slug}.mdx`),
    {
      encoding: "utf8",
    },
  )

  const { frontmatter, content } = await compileMDX({
    source: rawSource,
    options: { parseFrontmatter: true },
  })

  return {
    meta: frontmatter,
    content,
  }
}
