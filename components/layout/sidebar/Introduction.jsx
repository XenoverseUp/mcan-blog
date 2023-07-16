import GradientText from "@/components/ui/GradientText"

const Introduction = () => (
  <section className="mb-auto px-10">
    <h1 className="mt-12 text-[6cqw] font-medium leading-normal tracking-tight text-accent @2xl:text-[40px]">
      Welcome to my blog.{" "}
      <span className="text-accent-slight">
        I'm <GradientText>Can</GradientText> and in this place, I share my
        personal journey with you.
      </span>
    </h1>
  </section>
)

export default Introduction
