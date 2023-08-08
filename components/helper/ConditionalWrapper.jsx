import { Fragment } from "react"

const ConditionalWrapper = ({
  children,
  wrapper: Wrapper = Fragment,
  condition,
  ...rest
}) =>
  condition ? (
    <Wrapper {...rest}>{children}</Wrapper>
  ) : (
    <Fragment>{children}</Fragment>
  )

export default ConditionalWrapper
