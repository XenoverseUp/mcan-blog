import Article from "@/components/composed/Post/Article"
import Category from "@/components/composed/Post/Category"
import Controls from "@/components/composed/Post/Controls"
import TableOfContent from "@/components/composed/Post/TableOfContent"
import Vibe from "@/components/composed/Post/Vibe"
import Container from "@/components/primitives/Container"
import { getSinglePost } from "@/lib/post"
import { try_ } from "@/utils/try"
import { DotFilledIcon, Link2Icon } from "@radix-ui/react-icons"
import Avatar from "boring-avatars"
import { notFound } from "next/navigation"
import { Balancer } from "react-wrap-balancer"

const post = {
  title: "Good Design Has No Language At All!",
  subtitle: "Indeed, there are more than you could ever think.",
  author: { name: "Can Durmus", url: "https://candurmuss.bio.link/" },
  vibe: "controversial",
  previewUrl: "https://google.com",
  repoUrl: "https://google.com",
  type: "opinions",
}

const Post = async ({ params }) => {
  const [err, post] = await try_(getSinglePost, params?.slug)

  if (err) notFound()

  return (
    <main className="w-full mt-16">
      <Container className="flex justify-center xl:justify-between xl:gap-16">
        <section className="w-full max-w-3xl space-y-16">
          <header className="flex flex-col">
            <Category type={post.publication} />
            <h1 className="text-[42px] leading-tight mt-5 font-bold mb-2 text-cool-lime-300">
              <Balancer>{post.title}</Balancer>
            </h1>
            <p className="text-[22px] text-t-secondary">{post.subtitle}</p>
            <div className="flex justify-between mt-7 border-y border-border py-4 px-2 border-dashed">
              <div className="flex gap-3 items-center">
                <Avatar size={40} variant="beam" name="Can Durmus" />
                <div className="flex flex-col gap-0.5">
                  <a
                    rel="author"
                    href="candurmuss.bio.link"
                    target="_blank"
                    className="text-sm font-semibold flex items-center group gap-1 focus-visible:ring-4 rounded w-fit"
                  >
                    <span>Can Durmus</span>
                    <Link2Icon className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity text-cool-lime-300" />
                  </a>
                  <div className="flex items-center gap-1 text-xs">
                    <time
                      className="text-t-secondary"
                      pubdate="true"
                      dateTime="2023-08-29"
                      title="August 29th, 2023"
                    >
                      August 29, 2023
                    </time>
                    <DotFilledIcon />
                    <Vibe vibe={post.type} />
                  </div>
                </div>
              </div>
              <Controls
                previewUrl={post.previewUrl}
                repoUrl={post.repositoryUrl}
              />
            </div>
          </header>
          <Article data={post.content.content} />
        </section>
        <section className="hidden xl:block w-64">
          <TableOfContent />
        </section>
      </Container>
    </main>
  )
}
export default Post
