import { Fragment, forwardRef } from "react"

const ConditionalWrapper = (
  { children, wrapper: Wrapper = "div", condition, ...rest },
  ref,
) =>
  condition ? (
    <Wrapper {...rest} ref={ref}>
      {children}
    </Wrapper>
  ) : (
    <Fragment>{children}</Fragment>
  )

export default forwardRef(ConditionalWrapper)
