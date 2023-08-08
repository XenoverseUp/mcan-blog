import ConditionalWrapper from "@/components/helper/ConditionalWrapper"

const When = ({ children, condition, asChild, element = "div" }) =>
  condition ? (
    <ConditionalWrapper condition={!asChild} {...{ element }}>
      {children}
    </ConditionalWrapper>
  ) : null

export default When
