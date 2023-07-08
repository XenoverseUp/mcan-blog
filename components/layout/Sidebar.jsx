import MainNavigation from "@/components/layout/MainNavigation"
import MainFooter from "@/components/layout/MainFooter"
import Introduction from "@/components/layout/Introduction"

const Sidebar = () => {
  return (
    <header className="w-[800px] flex-shrink-0 border-r border-neutral-300 flex flex-col justify-between">
      <MainNavigation />
      <Introduction />
      <span>w</span>
      <MainFooter />
    </header>
  )
}

export default Sidebar
