import MainNavigation from "@/components/layout/MainNavigation"
import MainFooter from "./MainFooter"

const Sidebar = () => {
  return (
    <header className="w-[800px] flex-shrink-0 border-r border-neutral-300 flex flex-col justify-between items-center">
      <MainNavigation />
      content
      <MainFooter />
    </header>
  )
}

export default Sidebar
