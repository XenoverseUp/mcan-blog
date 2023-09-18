import ComponentBrowser from "@/components/composed/dashboard/posts/create/ComponentBrowser"
import components from "@/components/composed/dashboard/posts/create/components"

export default async function Create() {
  return (
    <main className="flex items-stretch h-full overflow-hidden">
      <section className="p-8 flex-grow">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold">Create Blog Post</h1>
          <p className="text-sm text-t-secondary max-w-sm leading-relaxed">
            Fill out the form below to create a blog post or use an existing
            markdown file to populate the fields.
          </p>
        </header>
      </section>
      <ComponentBrowser
        {...{ components }}
        className="w-72 border-l border-border bg-neutral-950"
      />
    </main>
  )
}
