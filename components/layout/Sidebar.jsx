import MainNavigation from "@/components/layout/sidebar/MainNavigation"
import Introduction from "@/components/layout/sidebar/Introduction"
import Suggestions from "@/components/layout/sidebar/Suggestions"
import MainFooter from "@/components/layout/sidebar/MainFooter"
import SidebarContainer from "@/components/layout/sidebar/SidebarContainer"

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
