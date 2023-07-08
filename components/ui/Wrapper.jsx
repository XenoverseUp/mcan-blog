const Wrapper = ({ children, element: Element = () => <></>, ...rest }) => (
  <Element {...rest}>{children}</Element>
)

export default Wrapper
