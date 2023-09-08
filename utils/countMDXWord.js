/**
 * Count the number of readable words in MDX content, excluding code blocks, tags, frontmatter,
 * and common Markdown symbols.
 *
 * @param {string} mdxContent - The MDX content to analyze.
 * @returns {number} The word count excluding code blocks, tags, frontmatter, and Markdown symbols.
 */
function countMDXWord(mdxContent) {
  // Split the MDX content into sections based on '---' delimiters
  const sections = mdxContent.split("---")
  let contentWithoutFrontmatter = mdxContent

  if (sections.length > 1) {
    // If frontmatter exists, remove it and get the remaining content
    contentWithoutFrontmatter = sections.slice(2).join("---")
  }

  // Remove code blocks (content between triple backticks)
  const codeBlockRegex = /```[^`]*```/g
  const contentWithoutCodeBlocks = contentWithoutFrontmatter.replace(
    codeBlockRegex,
    "",
  )

  // Remove <Code> components without props
  const codeComponentRegexWithoutProps = /<Code>[\s\S]*?<\/Code>/g
  const contentWithoutCodeComponentsWithoutProps =
    contentWithoutCodeBlocks.replace(codeComponentRegexWithoutProps, "")

  // Remove <Code> components with props
  const codeComponentRegexWithProps = /<Code [^>]*>[\s\S]*?<\/Code>/g
  const contentWithoutCodeComponentsWithProps =
    contentWithoutCodeComponentsWithoutProps.replace(
      codeComponentRegexWithProps,
      "",
    )

  // Remove XML tags and their attributes
  const contentWithoutTags = contentWithoutCodeComponentsWithProps.replace(
    /<[^>]+>/g,
    "",
  )

  // Remove common Markdown symbols (e.g., #, *, _, -, etc.)
  const contentWithoutMarkdownSymbols = contentWithoutTags.replace(
    /[#*_-]+/g,
    " ",
  )

  // Split the remaining content into words and count them
  const words = contentWithoutMarkdownSymbols.split(/\s+/)
  const wordCount = words.length

  return wordCount
}

export default countMDXWord
