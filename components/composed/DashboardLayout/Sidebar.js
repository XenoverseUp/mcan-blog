import { SignOutButton } from "@/components/primitives/Auth"
import Logo from "@/components/primitives/Logo"
import NavLink from "@/components/primitives/NavLink"
import cx from "@/utils/cx"
import {
  CodeIcon,
  FontStyleIcon,
  GearIcon,
  MinusCircledIcon,
  MixerVerticalIcon,
  Pencil2Icon,
  PersonIcon,
  PilcrowIcon,
  QuoteIcon,
  ResetIcon,
} from "@radix-ui/react-icons"
import Link from "next/link"

const Sidebar = ({ className }) => {
  return (
    <div
      className={cx(
        "w-[288px] h-full border-r border-border bg-neutral-950 p-6 flex flex-col items-stretch gap-8",
        className,
      )}
    >
      <header className="flex justify-between items-center">
        <Link
          href="/dashboard"
          className="focus-visible:ring-4 rounded-md relative flex items-center gap-3"
        >
          <Logo className="w-4" shadow />
          <div className="flex items-center gap-1">
            <span className="font-staff-wide text-xs uppercase ">
              Can Durmus
            </span>
          </div>
        </Link>
        <p className="text-[0.5rem] text-t-secondary font-mono select-none">
          v1.0.0
        </p>
      </header>
      <div className="flex-grow flex flex-col gap-4 items-start">
        <NavLink
          href="/dashboard"
          exact
          activeClassName="text-cool-lime-300 bg-cool-lime-300/5 [&>span]:opacity-100"
          className="flex gap-2 items-center text-sm font-medium group rounded-md py-[6px] -my-[6px] pl-2 -ml-2 pr-[10px] -mr-[10px] transition-colors"
        >
          <MixerVerticalIcon />
          <span className="opacity-75 group-hover:opacity-100 transition-opacity">
            Dashboard
          </span>
        </NavLink>
        <NavLink
          href="/dashboard/users"
          activeClassName="text-cool-lime-300 bg-cool-lime-300/5 [&>span]:opacity-100"
          className="flex gap-2 items-center text-sm font-medium group rounded-md py-[6px] -my-[6px] pl-2 -ml-2 pr-[10px] -mr-[10px] transition-colors"
        >
          <PersonIcon />
          <span className="opacity-75 group-hover:opacity-100 transition-opacity">
            Users
          </span>
        </NavLink>
        <NavLink
          href="/dashboard/guestbook"
          activeClassName="text-cool-lime-300 bg-cool-lime-300/5 [&>span]:opacity-100"
          className="flex gap-2 items-center text-sm font-medium group rounded-md py-[6px] -my-[6px] pl-2 -ml-2 pr-[10px] -mr-[10px] transition-colors"
        >
          <QuoteIcon />
          <span className="opacity-75 group-hover:opacity-100 transition-opacity">
            Guestbook
          </span>
        </NavLink>
        <NavLink
          href="/dashboard/posts"
          activeClassName="text-cool-lime-300 bg-cool-lime-300/5 [&>span]:opacity-100"
          className="flex gap-2 items-center text-sm font-medium group rounded-md py-[6px] -my-[6px] pl-2 -ml-2 pr-[10px] -mr-[10px] transition-colors"
        >
          <FontStyleIcon />
          <span className="opacity-75 group-hover:opacity-100 transition-opacity">
            Posts
          </span>
        </NavLink>
        <NavLink
          href="/dashboard/snippets"
          activeClassName="text-cool-lime-300 bg-cool-lime-300/5 [&>span]:opacity-100"
          className="flex gap-2 items-center text-sm font-medium group rounded-md py-[6px] -my-[6px] pl-2 -ml-2 pr-[10px] -mr-[10px] transition-colors"
        >
          <CodeIcon />
          <span className="opacity-75 group-hover:opacity-100 transition-opacity">
            Snippets
          </span>
        </NavLink>
      </div>
      <div className="flex flex-col gap-4 items-start">
        <Link
          href="/dashboard/settings"
          className="flex gap-2 items-center text-sm font-medium rounded-md hover:bg-white/5 py-[6px] -my-[6px] pl-2 -ml-2 pr-[10px] -mr-[10px] transition-colors"
        >
          <GearIcon />
          <span>Site Settings</span>
        </Link>
        <Link
          href="/"
          className="flex gap-2 items-center text-sm font-medium rounded-md hover:bg-white/5 py-[6px] -my-[6px] pl-2 -ml-2 pr-[10px] -mr-[10px] transition-colors"
        >
          <ResetIcon />
          <span>Return Home</span>
        </Link>
        <SignOutButton className="flex items-center gap-2 text-sm font-medium rounded-md hover:bg-white/5 py-[6px] -my-[6px] pl-2 -ml-2 pr-[10px] -mr-[10px] ">
          <MinusCircledIcon className="text-cool-lime-300" />
          <span>Log Out</span>
        </SignOutButton>
      </div>
    </div>
  )
}

export default Sidebar
