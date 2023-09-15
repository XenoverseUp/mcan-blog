import prisma from "@/lib/db/prisma"

/**
 *
 * @returns {{
 *  totalViews: number,
 *  publishedPostCount: number,
 *  draftPostCount: number,
 *  snippetCount: number,
 *  liveDate: Date
 * }} Dashboard metadata.
 */
export const getDashboardData = async () => {
  const aggregationOptions = {
    _sum: {
      view: true,
    },
  }

  const pipeline = Promise.all([
    prisma.post.aggregate(aggregationOptions),
    prisma.snippet.aggregate(aggregationOptions),
    prisma.post.count({ where: { draft: false } }),
    prisma.post.count({ where: { draft: true } }),
    prisma.snippet.count(),
  ])

  const [
    {
      _sum: { view: postViews },
    },
    {
      _sum: { view: snippetViews },
    },
    publishedPostCount,
    draftPostCount,
    snippetCount,
  ] = await pipeline

  const dashboardData = {
    totalViews: postViews + snippetViews,
    publishedPostCount,
    draftPostCount,
    snippetCount,
    liveDate: new Date(1694802889687), // Sep 15, 2023
  }

  return dashboardData
}
