import DragHandle from "@/components/composed/Layout/drawer/helper/DragHandle"
import GuestBookForm from "@/components/composed/Layout/drawer/helper/GuestBookForm"
import Container from "@/components/primitives/Container"
import { Drawer } from "vaul"

const MobileFormDrawer = ({
  children,
  setTotalSignature,
  addOptimisticSignatures,
}) => (
  <Drawer.NestedRoot>
    <Drawer.Trigger asChild>{children}</Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay className="md:hidden fixed inset-0 bg-background/50 z-50" />
      <Drawer.Content className="md:hidden bg-background dark:bg-zinc-950 z-[60] rounded-t-[16px] mt-24 fixed bottom-0 left-0 right-0 after:border-l after:border-r after:border-border">
        <div className="w-full h-full border-t flex flex-col border-l border-r border-border overflow-hidden rounded-t-[16px]">
          <DragHandle />
          <Container className="my-7">
            <Drawer.Title className="text-cool-lime-300 capitalize font-bold mb-6">
              <span className="text-2xl">Create Signature</span>
            </Drawer.Title>
            <GuestBookForm
              {...{
                setTotalSignature,
                addOptimisticSignatures,
              }}
            />
          </Container>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.NestedRoot>
)

export default MobileFormDrawer
