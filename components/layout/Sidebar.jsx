import MainNavigation from "@/components/layout/MainNavigation"
import Introduction from "@/components/layout/Introduction"
import Suggestions from "@/components/layout/Suggestions"
import MainFooter from "@/components/layout/MainFooter"

const Sidebar = () => {
  return (
    <header className="w-[764px] flex-shrink-0 border-r border-neutral-300 flex flex-col justify-between">
      <MainNavigation />
      <Introduction />
      <Suggestions />
      <MainFooter />
    </header>
  )
}

export default Sidebar
