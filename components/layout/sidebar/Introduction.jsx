import GradientText from "../../ui/GradientText"

const Introduction = () => (
  <section className="mb-auto px-10">
    <h1 className="text-[6.25cqw] @2xl:text-[42px] font-semibold leading-normal text-accent mt-12 tracking-tight">
      Welcome to my blog.{" "}
      <span className="text-accent-slight">
        I'm <GradientText>Can</GradientText> and in this place, I share my
        personal journey with you.
      </span>
    </h1>
  </section>
)

export default Introduction
