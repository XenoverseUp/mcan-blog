"use client"

import { cloneElement, useCallback } from "react"

/**
 * @typedef {{
 *  children: React.ReactElement<HTMLButtonElement>;
 *  shareData: ShareData;
 *  onSuccess?: () => void;
 *  onError?: (error?: unknown) => void;
 *  onNonNativeShare?: () => void;
 *  onInteraction?: () => void;
 *  disabled?: boolean;
 * }} Props
 */

/** @type {import("react").FC<Props>} */
const ShareController = ({
  children,
  shareData,
  onInteraction,
  onSuccess,
  onError,
  onNonNativeShare,
  disabled,
}) => {
  const handleOnClick = useCallback(async () => {
    onInteraction?.()
    if (navigator?.share) {
      try {
        await navigator.share(shareData)
        onSuccess?.()
      } catch (err) {
        onError?.(err)
      }
    } else {
      onNonNativeShare?.()
    }
  })

  return cloneElement(children, {
    onClick: handleOnClick,
    type: "button",
    disabled,
  })
}

export default ShareController
