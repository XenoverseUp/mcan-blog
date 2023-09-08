// @ts-check

import prisma from "@/lib/db/prisma"
import countMDXWord from "@/utils/countMDXWord"
import kebabize from "@/utils/kebabize"
import { try_ } from "@/utils/try"
import { compileMDX } from "next-mdx-remote/rsc"

/**
 * @async
 * @param {string} baseSlug
 * @param {string} currentSlug
 * @param {number} iteration
 * @returns {Promise<string>}
 */
const generateUniqueSlug = async (baseSlug, currentSlug, iteration = 1) => {
  const res = await prisma.post.findUnique({
    where: {
      slug: currentSlug,
    },
  })

  const nextSlug = `${baseSlug}-${iteration}`

  if (res !== null)
    return await generateUniqueSlug(baseSlug, nextSlug, iteration + 1)
  else return currentSlug
}

/**
 *  Creates a new post in the db.
 *  @param {Omit<import("@/lib/db/prisma").Post, "id"|"slug"|"createdAt"|"updatedAt"|"view"|"wordCount"> & {content: string}} parameters
 */
export const createPost = async ({
  draft = false,
  title,
  subtitle,
  coverImage,
  publication,
  type,
  previewUrl,
  repositoryUrl,
  references,
  externalLinks,
  content,
}) => {
  const baseSlug = kebabize(title)
  const slug = await generateUniqueSlug(baseSlug, baseSlug)
  const wordCount = countMDXWord(content)

  const result = await prisma.post.create({
    data: {
      slug,
      title,
      subtitle,
      draft,
      coverImage,
      publication,
      type,
      previewUrl,
      repositoryUrl,
      references,
      externalLinks,
      wordCount,
    },
  })
}

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
