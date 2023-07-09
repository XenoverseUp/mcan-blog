const PixelatedArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
    {...{ className }}
    viewBox="0 0 22 22"
  >
    <path d="M17 10v2h-1v1h-1v1h-1v1h-1v1h-2v-2h1v-1h1v-1H4v-2h9V9h-1V8h-1V6h2v1h1v1h1v1h1v1"></path>
  </svg>
)

export default PixelatedArrow
