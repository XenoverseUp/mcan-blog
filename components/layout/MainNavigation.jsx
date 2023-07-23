import Logo from "@/assets/svg/logo"
import AccessibleIcon from "@/components/ui/AcessibleIcon"
import Container from "@/components/ui/Container"
import NavLink from "@/components/ui/NavLink"
import Link from "next/link"

const MainNavigation = () => (
  <Container>
    <nav className="flex h-20 w-full flex-shrink-0 items-center">
      <Link href="/" aria-label="Home" className="z-20 mr-auto">
        <AccessibleIcon label="Can Durmus Home">
          <Logo className="aspect-square w-8" />
        </AccessibleIcon>
      </Link>
      {/* <Menu /> */}

      <div className="text-accent-slight space-x-1 text-sm">
        <NavLink
          href="/snippets"
          className="rounded px-2 py-1 font-medium transition-colors hover:bg-neutral-200"
          activeClassName="!text-accent !bg-orange-200"
          tailwind
          exact
        >
          Snippets
        </NavLink>
        <NavLink
          href="/tutorials"
          className="rounded px-2 py-1 font-medium transition-colors hover:bg-neutral-200"
          activeClassName="!text-accent !bg-orange-200"
          tailwind
        >
          Tutorials
        </NavLink>
        <NavLink
          href="/opinions"
          className="rounded px-2 py-1 font-medium transition-colors hover:bg-neutral-200"
          activeClassName="!text-accent !bg-orange-200"
          tailwind
        >
          Opinions
        </NavLink>
        <span aria-hidden className="px-2 opacity-25">
          /
        </span>
        <NavLink
          href="/about"
          className="rounded px-2 py-1 font-medium transition-colors hover:bg-neutral-200"
          activeClassName="!text-accent !bg-orange-200"
          tailwind
        >
          About
        </NavLink>
      </div>
    </nav>
  </Container>
)

export default MainNavigation
