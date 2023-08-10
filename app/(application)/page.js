import FadedPattern from "@/components/composed/FadedPattern"
import ChipSlider from "@/components/composed/Home/ChipSlider"
import LandingButtons from "@/components/composed/Home/LandingButtons"
import Container from "@/components/primitives/Container"
import ParagraphWrapper from "@/components/primitives/ParagraphWrapper"
import { Balancer } from "react-wrap-balancer"

export default async function Home() {
  return (
    <>
      <FadedPattern />
      <main className="w-full">
        <Container>
          <div className="mt-10 flex w-full flex-col xs:mt-12">
            <div id="intro" className="flex w-full flex-col gap-9 lg:max-w-lg">
              <h1 className="font-staff-wide text-2xl uppercase leading-[0.9] xs:text-3xl xs:leading-[0.9] sm:text-4xl sm:leading-[0.9]">
                <Balancer>
                  More like a <br />{" "}
                  <span className="text-accent">
                    digital journal<sup>1</sup>
                  </span>
                </Balancer>
              </h1>
              <ParagraphWrapper className="text-base md:text-xl">
                <p>
                  Today, technology thrives in a way never seen before. The
                  capabilities of human-made machines mesmerizes me. And here I
                  am — trying to left a fingerprint in this universe.
                </p>
              </ParagraphWrapper>
              <LandingButtons />
              <ParagraphWrapper className="text-base md:text-xl">
                <p>
                  Today, technology thrives in a way never seen before. The
                  capabilities of human-made machines mesmerizes me. And here I
                  am — trying to left a fingerprint in this universe.
                </p>
                <p>
                  Here are my regular tools to craft out my ideas. In this blog,
                  I write about them, as well.
                </p>
              </ParagraphWrapper>
              <ChipSlider {...{ chips }} />
            </div>
            <div id="suggestion" className="h-16"></div>
          </div>
        </Container>
      </main>
    </>
  )
}

const chips = [
  {
    name: "JavaScript",
    color: "#E8D44E",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { name: "Prisma", color: "white", url: "https://www.prisma.io/" },
  { name: "NodeJS", color: "#75AC5E", url: "https://nodejs.org/en" },
  { name: "SCSS", color: "#C66494", url: "https://sass-lang.com/" },
  { name: "React", color: "#5FD3F3", url: "https://react.dev/" },
  {
    name: "TypeScript",
    color: "#2F74C0",
    url: "https://www.typescriptlang.org/",
  },
  { name: "Express", color: "white", url: "https://expressjs.com/" },
  { name: "Tailwind CSS", color: "#06B0CE", url: "https://tailwindcss.com/" },
  { name: "Adobe", color: "#FF0000", url: "https://www.adobe.com/" },

  { name: "Svelte", color: "#F73C01", url: "https://svelte.dev/" },
  { name: "Docker", color: "#1f9cf0", url: "https://www.docker.com/" },
  { name: "NextJS", color: "white", url: "https://nextjs.org/" },
  {
    name: "HTML",
    color: "#E96328",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    color: "#2762E9",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  { name: "Radix UI", color: "#0DC5B3", url: "https://www.radix-ui.com/" },
  { name: "WASM", color: "#634CE8", url: "https://webassembly.org/" },
  {
    name: "Framer Motion",
    color: "#E128C6",
    url: "https://www.framer.com/motion/",
  },
  { name: "Yarn", color: "#2C8EBB", url: "https://yarnpkg.com/" },

  { name: "MDX", color: "#fcb32c", url: "https://mdxjs.com/" },
  { name: "ThreeJS", color: "#019EF4", url: "https://threejs.org/" },
  {
    name: "SEO",
    color: "#BC6B0D",
    url: "https://developer.mozilla.org/en-US/docs/Glossary/SEO",
  },
  { name: "Figma", color: "#ff7262", url: "https://www.figma.com/" },
  { name: "MongoDB", color: "#01ec64", url: "https://www.mongodb.com/" },
  { name: "Firebase", color: "#ffcc39", url: "https://firebase.google.com/" },
  { name: "Python", color: "#3c78a9", url: "https://www.python.org/" },
  {
    name: "Amazon Web Services",
    color: "#ff9900",
    url: "https://aws.amazon.com/",
  },
  { name: "GSAP", color: "#89CE03", url: "https://greensock.com/gsap/" },
]
