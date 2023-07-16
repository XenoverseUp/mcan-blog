import fs from "fs"
import { compileMDX } from "next-mdx-remote/rsc"
import path from "path"

const rootDirectory = path.join(process.cwd(), "app", "posts")

export const getAllPostsMeta = async () => {
  const opinions = fs.readdirSync(path.join(rootDirectory, "opinions"))
  const snippets = fs.readdirSync(path.join(rootDirectory, "snippets"))
  const tutorials = fs.readdirSync(path.join(rootDirectory, "tutorials"))

  const data = []

  for (const opinion of opinions) {
    const { meta } = await getPostByFilename({
      type: "opinions",
      file: opinion,
    })
    data.push({ ...meta, type: "opinions" })
  }

  for (const snippet of snippets) {
    const { meta } = await getPostByFilename({
      type: "snippets",
      file: snippet,
    })
    data.push({ ...meta, type: "snippets" })
  }

  for (const tutorial of tutorials) {
    const { meta } = await getPostByFilename({
      type: "tutorials",
      file: tutorial,
    })
    data.push({ ...meta, type: "tutorials" })
  }

  return data
}

export const getPostByFilename = async ({ type, file }) => {
  const filepath = path.join(rootDirectory, type, file)
  const rawSource = fs.readFileSync(filepath, { encoding: "utf8" })

  const { frontmatter, content } = await compileMDX({
    source: rawSource,
    options: { parseFrontmatter: true },
  })

  return {
    meta: {
      frontmatter,
      slug: path.basename(filepath, path.extname(filepath)),
    },
    content,
  }
}
