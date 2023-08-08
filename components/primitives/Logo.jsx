import ConditionalWrapper from "@/components/helper/ConditionalWrapper"

const Logo = ({ className, shadow, ...rest }) => (
  <ConditionalWrapper condition={shadow} wrapper={Shadow}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      {...{ className }}
      fill="none"
      viewBox="0 0 27 32"
    >
      <path
        className="fill-accent"
        d="M26.407 15.453v.045l-4.493 4.453h-4.491v7.095L12.975 31.5h-.044V15.453h13.476zM10.624 19.951v-4.498H4.189L0 19.95h10.624zM18.151 13.143V8.645h-7.547l-4.23 4.498h11.777zM18.151.5l-5.463 5.835h5.463V.5z"
      ></path>
    </svg>
  </ConditionalWrapper>
)

const Shadow = ({ children }) => (
  <div className="relative after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:aspect-square after:w-4 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-accent/80 after:blur-md">
    {children}
  </div>
)

export default Logo
