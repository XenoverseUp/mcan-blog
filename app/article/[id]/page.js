import Category from "@/components/composed/Post/Category"
import Controls from "@/components/composed/Post/Controls"
import Vibe from "@/components/composed/Post/Vibe"
import Button from "@/components/primitives/Button"
import Container from "@/components/primitives/Container"
import { DotFilledIcon, Link2Icon } from "@radix-ui/react-icons"
import Avatar from "boring-avatars"
import { Balancer } from "react-wrap-balancer"

const Article = () => {
  const post = {
    title: "Good Design Has No Language At All!",
    subtitle: "Indeed, there are more than you could ever think.",
    author: { name: "Can Durmus", url: "https://candurmuss.bio.link/" },
    vibe: "controversial",
    previewUrl: "https://google.com",
    repoUrl: "https://google.com",
  }

  return (
    <main className="w-full mt-16">
      <Container className="flex justify-between xl:gap-16">
        <section className="w-full max-w-3xl">
          <header className="flex flex-col">
            <Category type="tutorials" />
            <h1 className="text-[42px] leading-tight mt-5 font-bold">
              <Balancer ratio={0}>{post.title}</Balancer>
            </h1>
            <p className="text-[22px] text-[#BEC0BB]">{post.subtitle}</p>
            <div className="flex justify-between mt-9">
              <div className="flex gap-3 items-center">
                <Avatar size={40} variant="beam" name={post.author.name} />
                <div className="flex flex-col gap-0.5">
                  <a
                    rel="author"
                    href={post.author.url}
                    target="_blank"
                    className="text-sm font-semibold flex items-center group gap-1 focus-visible:ring-4 rounded w-fit"
                  >
                    <span>{post.author.name}</span>
                    <Link2Icon className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity text-accent" />
                  </a>
                  <div className="flex items-center gap-1 text-xs">
                    <time
                      className="text-[#BEC0BB]"
                      pubdate="true"
                      dateTime="2023-08-29"
                      title="August 29th, 2023"
                    >
                      August 29, 2023
                    </time>
                    <DotFilledIcon />
                    <Vibe vibe={post.vibe} />
                  </div>
                </div>
              </div>
              <Controls previewUrl={post.previewUrl} repoUrl={post.repoUrl} />
            </div>
          </header>
        </section>
        <section className="hidden xl:block">Table of contents</section>
      </Container>
    </main>
  )
}
export default Article
