import ComponentBrowser from "@/components/composed/dashboard/posts/create/ComponentBrowser"
import CreatePostForm from "@/components/composed/dashboard/posts/create/CreatePostForm"
import components from "@/components/composed/dashboard/posts/create/components"
import Button from "@/components/primitives/Button"
import { ArrowLeftIcon, UploadIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export default async function Create() {
  return (
    <main className="flex items-stretch h-full overflow-hidden">
      <section className="p-8 flex-grow overflow-auto">
        <CreatePostForm />
      </section>
      <ComponentBrowser
        {...{ components }}
        className="w-72 flex-shrink-0 border-l border-border bg-neutral-950"
      />
    </main>
  )
}
