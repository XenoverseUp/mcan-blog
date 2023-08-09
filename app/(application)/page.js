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
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
  { name: "JavaScript", color: "yellow" },
]
