import cx from "@/utils/cx"

const Container = ({
  element: Wrapper = "div",
  children,
  className,
  ...rest
}) => (
  <Wrapper
    className={cx(className, "mx-auto w-full max-w-[1280px] px-6 md:px-10")}
    {...rest}
  >
    {children}
  </Wrapper>
)

export default Container
