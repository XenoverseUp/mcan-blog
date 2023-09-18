"use client"

import { useCopyToClipboard } from "@/hooks/useCopyToClipboard"
import cx from "@/utils/cx"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import { Cross2Icon, PlusIcon } from "@radix-ui/react-icons"
import { cloneElement, useState } from "react"

/**
 * @param {{className: string, components: import("@/components/composed/dashboard/posts/create/components").MarkdownComponent[]}} props
 * @returns {import("react").FC}
 */
const ComponentBrowser = ({ className, components }) => {
  const [component, setComponent] = useState(
    /** @type {import("@/components/composed/dashboard/posts/create/components").componentNames|null} */ (
      null
    ),
  )

  return (
    <aside className={cx(className, "relative")}>
      {!component ? (
        <main className="flex flex-col absolute inset-0 w-full h-full overflow-auto px-5 py-6">
          <header className="space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="text-violet-400 font-medium text-lg">
                <span>Components</span>
                <sup className="ml-0.5">{components.length ?? 0}</sup>
              </h2>
              <button className="text-t-secondary hover:text-white transition-colors">
                <AccessibleIcon label="Close">
                  <Cross2Icon />
                </AccessibleIcon>
              </button>
            </div>
            <p className="text-xs text-t-secondary leading-normal">
              Utilize predefined components to create a better experience.
            </p>
          </header>
          <section className="flex flex-col gap-2 mt-6">
            {components.map(item => (
              <ComponentButton
                key={item.name}
                data={item}
                {...{ setComponent }}
              />
            ))}
          </section>
        </main>
      ) : (
        <main className="flex flex-col absolute inset-0 w-full h-full overflow-auto px-5 py-6">
          <header className="space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="text-cool-lime-300 font-medium text-lg flex items-center gap-2">
                {cloneElement(
                  components.find(item => item.name === component).icon,
                  { className: "w-[18px] h-[18px]" },
                )}
                {component}
              </h2>
              <button
                onClick={() => setComponent(null)}
                className="text-t-secondary hover:text-white transition-colors"
              >
                <AccessibleIcon label="Close">
                  <Cross2Icon />
                </AccessibleIcon>
              </button>
            </div>
            <p className="text-xs text-t-secondary leading-normal">
              {components.find(item => item.name === component).description}
            </p>
          </header>
          <section className="flex flex-col gap-2 mt-6"></section>
        </main>
      )}
    </aside>
  )
}

/** @param {{data: import("@/components/composed/dashboard/posts/create/components").MarkdownComponent}} props */
const ComponentButton = ({ data, setComponent }) => {
  const [docsHover, setDocsHover] = useState(false)
  const [copiedText, copy] = useCopyToClipboard()

  return (
    <div
      className={cx(
        "relative isolate flex items-center border h-10 border-border rounded-lg hover:bg-white/[0.025] transition-[background-color,border]",
        {
          "!bg-violet-400/10 border-violet-400": docsHover,
        },
      )}
    >
      <button
        className={cx(
          "flex items-center gap-4 w-full h-full pl-3 text-cool-lime-300 transition-colors",
          { "text-white": docsHover },
        )}
        onClick={() => setComponent(data.name)}
      >
        {data.icon}
        <span className="text-sm font-medium">{data.name}</span>
      </button>
      <button
        className="absolute top-1/2 z-10 -translate-y-1/2 right-0 p-3 text-t-secondary hover:text-violet-400 transition-colors"
        onMouseEnter={() => {
          setDocsHover(true)
        }}
        onMouseLeave={() => {
          setDocsHover(false)
        }}
        onClick={() => copy(data.template)}
      >
        <AccessibleIcon label="See documentation">
          <PlusIcon />
        </AccessibleIcon>
      </button>
    </div>
  )
}

export default ComponentBrowser
