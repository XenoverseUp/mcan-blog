import { fetchSignatures } from "@/actions/guestbook.action"
import Nav from "@/components/composed/PublicLayout/Nav"
import When from "@/components/helper/When"

const MainNavigation = async ({ announce }) => {
  const initialSignatures = await fetchSignatures()

  return (
    <>
      <When condition={!!announce} asChild>
        <div className="z-10 flex h-8 w-full items-center justify-center bg-white text-center text-sm text-black">
          {announce}
        </div>
      </When>
      <Nav {...{ initialSignatures }} />
    </>
  )
}

export default MainNavigation
