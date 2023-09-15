"use client"

import Button from "@/components/primitives/Button"
import cx from "@/utils/cx"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { useRouter } from "next/navigation"

const BackButton = ({ className }) => {
  const router = useRouter()
  return (
    <Button
      variant="ghost"
      leftIcon={<ArrowLeftIcon className="w-5 h-5" />}
      className={cx(className)}
      onClick={() => router.back()}
    >
      Back
    </Button>
  )
}

export default BackButton
