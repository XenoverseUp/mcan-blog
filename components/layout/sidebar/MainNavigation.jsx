import Logo from "@/assets/svg/logo"
import NavLink from "@/components/ui/NavLink"
import Link from "next/link"
import AccessibleIcon from "@/components/ui/AcessibleIcon"

const MainNavigation = () => (
  <nav className="px-10 py-4 flex justify-between items-center w-full">
    <Link href="/" aria-label="Home">
      <AccessibleIcon label="Can Durmus Home">
        <Logo className="w-10 aspect-square" />
      </AccessibleIcon>
    </Link>
    <div className="space-x-1 text-[2.45cqw] @xl:text-sm text-accent-slight">
      <NavLink
        href="/snippets"
        className="transition-colors hover:bg-neutral-200 font-medium px-2 py-1 rounded"
        activeClassName="!text-accent !bg-orange-200"
        tailwind
        exact
      >
        Snippets
      </NavLink>
      <NavLink
        href="/tutorials"
        className="transition-colors hover:bg-neutral-200 font-medium px-2 py-1 rounded"
        activeClassName="!text-accent !bg-orange-200"
        tailwind
      >
        Tutorials
      </NavLink>
      <NavLink
        href="/opinions"
        className="transition-colors hover:bg-neutral-200 font-medium px-2 py-1 rounded"
        activeClassName="!text-accent !bg-orange-200"
        tailwind
      >
        Opinions
      </NavLink>
      <span aria-hidden className="opacity-25 px-2">
        /
      </span>
      <NavLink
        href="/about"
        className="transition-colors hover:bg-neutral-200 font-medium px-2 py-1 rounded"
        activeClassName="!text-accent !bg-orange-200"
        tailwind
      >
        About
      </NavLink>
    </div>
  </nav>
)

export default MainNavigation
