import { useEffect, useState } from "react"

const useShare = data => {
  const [canShare, setCanShare] = useState(false)

  useEffect(() => {
    if (navigator.canShare?.() && navigator?.share) setCanShare(true)
  }, [])

  return {
    canNativelyShare: canShare,
    nativelyShare: () => navigator.share(data),
  }
}

export default useShare
