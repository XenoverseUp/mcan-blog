import { fetchSignatures } from "@/actions/guestbook.action"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Nav from "@/components/composed/PublicLayout/Nav"
import When from "@/components/helper/When"
import { getServerSession } from "next-auth"

const MainNavigation = async ({ announce }) => {
  const initialSignatures = await fetchSignatures()
  const session = await getServerSession(authOptions)

  return (
    <>
      <When condition={!!announce} asChild>
        <div className="z-10 flex h-8 w-full items-center justify-center bg-white text-center text-sm text-black">
          {announce}
        </div>
      </When>
      <Nav {...{ initialSignatures, user: session?.user }} />
    </>
  )
}

export default MainNavigation
