import GradientText from "../../ui/GradientText"

const Introduction = () => (
  <section>
    <h1 className="text-[46px] font-semibold leading-normal tracking-tight text-primary">
      Welcome to my blog.{" "}
      <span className="text-secondary">
        I'm <GradientText>Can</GradientText> and in this place, I share my
        personal journey with you.
      </span>
    </h1>
  </section>
)

export default Introduction
