"use client"

import SocialShareButtons from "@/components/composed/Post/SocialShareButtons"
import Button from "@/components/primitives/Button"
import ShareController from "@/components/primitives/ShareController"
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import * as Dialog from "@radix-ui/react-dialog"
import { CheckIcon, ClipboardIcon, Cross1Icon } from "@radix-ui/react-icons"
import Avatar from "boring-avatars"
import { usePathname } from "next/navigation"
import {
  Fragment,
  cloneElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"

/**
 * @typedef {{
 *  children: React.ReactElement<HTMLButtonElement>;
 *  shareData: ShareData;
 *  onSuccess?: () => void;
 *  onError?: (error?: unknown) => void;
 *  onInteraction?: () => void;
 *  disabled?: boolean;
 *  type: "opinions"|"tutorials"|"snippets";
 * }} Props
 */

/** @type {import("react").FC<Props>} */
const Share = ({
  children,
  shareData,
  onInteraction,
  onSuccess,
  onError,
  disabled,
  type = "opinions",
}) => {
  const [openPopup, setOpenPopup] = useState(false)
  const trigger = useRef(null)

  const [copied, copy] = useCopyToClipboard()
  const pathname = usePathname()

  const handleNonNativeShare = useCallback(() => {
    setOpenPopup(true)
  }, [])

  const copyToClipboard = useCallback(
    () => copy(process.env.NEXT_PUBLIC_HOST + pathname),
    [pathname],
  )

  useEffect(() => {
    if (!openPopup) trigger.current?.focus()
  }, [openPopup])

  return (
    <Fragment>
      <ShareController
        shareData={shareData}
        onInteraction={onInteraction}
        onSuccess={onSuccess}
        onError={onError}
        onNonNativeShare={handleNonNativeShare}
        disabled={disabled}
      >
        {cloneElement(children, { ref: trigger })}
      </ShareController>

      <Dialog.Root open={openPopup} onOpenChange={setOpenPopup}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-background/50 z-40" />
          <Dialog.Content className="pt-6 pb-8 px-6 border flex flex-col items-center border-border fixed top-[50%] z-50 left-[50%] max-h-[85vh] w-[90vw] max-w-[360px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-neutral-900">
            <Dialog.Close asChild>
              <button className="absolute top-3 right-3 focus-visible:ring-4 rounded-sm">
                <AccessibleIcon label="Close Share Sheet">
                  <Cross1Icon />
                </AccessibleIcon>
              </button>
            </Dialog.Close>
            <header className="mb-8 text-center">
              <h1 className="font-staff-wide text-lg">Share</h1>
              <p className="text-xs text-t-secondary">
                Share this item with friends & family.
              </p>
            </header>
            <div className="w-fit h-fit overflow-hidden mb-6 rounded-xl border-4 border-white">
              <Avatar size={120} square variant="pixel" />
            </div>
            <Button
              variant="soft"
              size="small"
              onClick={copyToClipboard}
              leftIcon={!!copied ? <CheckIcon /> : <ClipboardIcon />}
            >
              {!!copied ? "Copied" : "Copy Link"}
            </Button>

            <span className="my-6 text-xs text-t-secondary">
              or share using...
            </span>
            <SocialShareButtons url={process.env.NEXT_PUBLIC_HOST + pathname} />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Fragment>
  )
}

export default Share
