import Logo from "@/assets/svg/logo"
import NavLink from "../ui/NavLink"
import Link from "next/link"

const MainNavigation = () => (
  <nav className="px-10 py-4 flex justify-between items-center w-full">
    <Link href="/">
      <Logo className="w-10 aspect-square" />
    </Link>
    <div className="space-x-2">
      <NavLink
        href="/snippets"
        className="text-sm transition-colors hover:bg-neutral-200 text-accent font-medium px-2 py-1 rounded"
        activeClassName="!bg-orange-200"
        tailwind
        exact
      >
        Snippets
      </NavLink>
      <NavLink
        href="/tutorials"
        className="text-sm transition-colors hover:bg-neutral-200 text-accent font-medium px-2 py-1 rounded"
        activeClassName="!bg-orange-200"
        tailwind
      >
        Tutorials
      </NavLink>
      <NavLink
        href="/opinions"
        className="text-sm transition-colors hover:bg-neutral-200 text-accent font-medium px-2 py-1 rounded"
        activeClassName="!bg-orange-200"
        tailwind
      >
        Opinions
      </NavLink>
      <span aria-hidden className="opacity-25 px-2">
        /
      </span>
      <NavLink
        href="/about"
        className="text-sm transition-colors hover:bg-neutral-200 text-accent font-medium px-2 py-1 rounded"
        activeClassName="!bg-orange-200"
        tailwind
      >
        About
      </NavLink>
    </div>
  </nav>
)

export default MainNavigation
