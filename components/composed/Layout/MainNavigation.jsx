import Drawer from "@/components/composed/Layout/Drawer"
import Nav from "@/components/composed/Layout/Nav"
import When from "@/components/helper/When"
import Container from "@/components/primitives/Container"
import Logo from "@/components/primitives/Logo"

const MainNavigation = ({ announce }) => {
  return (
    <>
      <When condition={!!announce} asChild>
        <div className="z-10 flex h-6 w-full items-center justify-center bg-white text-center text-sm text-black">
          {announce}
        </div>
      </When>
      <Nav
        atTopClassName="bg-transparent"
        scrolledClassName="bg-background"
        className="sticky top-0 z-20 h-16 w-full border-b border-zinc-800 backdrop-blur-sm transition-colors duration-300"
      >
        <Container className="flex h-full items-center justify-between">
          <div className="relative -z-10 flex items-center gap-4 ">
            <Logo className="w-5" shadow />
            <div className="flex items-center gap-1">
              <span className="font-staff-wide text-xs uppercase md:text-sm">
                Can Durmus
              </span>
              <span className="px-1 opacity-40">/</span>
              <span className="font-mono text-xs tracking-tight md:text-sm">
                Blog
              </span>
            </div>
          </div>
          <Drawer />
        </Container>
      </Nav>
    </>
  )
}

export default MainNavigation
