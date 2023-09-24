import * as RadixPopover from "@radix-ui/react-popover"
import { Fragment, useState } from "react"

const Popover = ({ children, trigger }) => {
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <RadixPopover.Root open={open} onOpenChange={setOpen}>
        <RadixPopover.Trigger asChild>{trigger}</RadixPopover.Trigger>
        <RadixPopover.Portal>
          <RadixPopover.Content
            avoidCollisions
            hideWhenDetached
            align="end"
            collisionPadding={10}
            className="rounded-xl py-1 text-sm overflow-hidden bg-neutral-900 select-none min-w-[7.5rem]"
            sideOffset={8}
          >
            {children({ open, setOpen })}
          </RadixPopover.Content>
        </RadixPopover.Portal>
      </RadixPopover.Root>
    </Fragment>
  )
}

export default Popover
