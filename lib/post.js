import prisma from "@/lib/db/prisma"
import { ValidationError } from "@/lib/error"
import { CreatePostSchema } from "@/lib/schema"
import countMDXWord from "@/utils/countMDXWord"
import kebabize from "@/utils/kebabize"

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
 *  @param {import("@/lib/schema").CreatePostParameters} parameters
 */
export const createPost = async ({
  title,
  subtitle,
  coverImage,
  draft = false,
  publication,
  type,
  previewUrl,
  repositoryUrl,
  references,
  externalLinks,
  content,
}) => {
  const data = {
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
    content,
  }

  const { success, error, data: parsed } = CreatePostSchema.safeParse(data)
  if (!success) throw new ValidationError(error)

  const baseSlug = kebabize(parsed.title)
  const slug = await generateUniqueSlug(baseSlug, baseSlug)
  const wordCount = countMDXWord(parsed.content)

  delete parsed.content

  return await prisma.post.create({
    data: {
      ...parsed,
      slug,
      wordCount,
      content: { create: { markdown: content } },
    },
  })
}

/**
 *
 * @param {import("@prisma/client").Prisma.PostFindManyArgs} filters
 * @returns
 */
export const getAllPosts = async filters => {
  return await prisma.post.findMany(filters)
}

/**
 *
 * @param {string} slug
 * @returns {import("@prisma/client").Post & {content: string}}
 */
export const getSinglePost = async slug => {
  const res = await prisma.post.findUniqueOrThrow({
    where: {
      slug,
    },
    include: { content: true },
  })

  return res
}

/**
 *
 * @param {string} slug
 * @returns {import("@prisma/client").Post & {content: string}}
 */
export const getSinglePostMeta = async slug => {
  const res = await prisma.post.findUniqueOrThrow({
    where: {
      slug,
    },
  })

  return res
}
