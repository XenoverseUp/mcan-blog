import Introduction from "@/components/layout/sidebar/Introduction"
import MainFooter from "@/components/layout/sidebar/MainFooter"
import MainNavigation from "@/components/layout/sidebar/MainNavigation"
import SidebarContainer from "@/components/layout/sidebar/SidebarContainer"
import Suggestions from "@/components/layout/sidebar/Suggestions"

const Sidebar = () => {
  return (
    <SidebarContainer>
      <MainNavigation />
      <Introduction />
      <Suggestions />
      <MainFooter />
    </SidebarContainer>
  )
}

export default Sidebar
