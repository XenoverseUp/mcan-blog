"use client"

import { useCopyToClipboard } from "@/hooks/useCopyToClipboard"
import useLog from "@/hooks/useLog"
import useUpdateEffect from "@/hooks/useUpdateEffect"
import cx from "@/utils/cx"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import {
  Cross2Icon,
  FrameIcon,
  PlusIcon,
  QuoteIcon,
  ResetIcon,
  SwitchIcon,
} from "@radix-ui/react-icons"
import { cloneElement, useRef, useState } from "react"
import { CSSTransition } from "react-transition-group"

const View = {
  MAIN: "MAIN",
  DOCS: "DOCS",
}

/**
 * @param {{className: string, components: import("@/components/composed/dashboard/posts/create/components").MarkdownComponent[]}} props
 * @returns {import("react").FC}
 */
const ComponentBrowser = ({ className, components }) => {
  const [view, setView] = useState(View.MAIN)
  const [component, setComponent] = useState(
    /** @type {import("@/components/composed/dashboard/posts/create/components").componentNames|null} */ (
      null
    ),
  )

  return (
    <aside className={cx(className, "relative overflow-hidden")}>
      <CSSTransition
        in={view === View.MAIN}
        unmountOnExit
        timeout={1000}
        classNames="main"
        onEntered={() => setComponent(null)}
      >
        <main className="flex flex-col  w-full h-full overflow-auto px-5 py-6">
          <header className="space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="text-violet-400 font-medium text-lg">
                <span>Components</span>
                <sup className="ml-0.5">{components.length ?? 0}</sup>
              </h2>
            </div>
            <p className="text-xs text-t-secondary leading-normal">
              Utilize predefined components to create a better experience.
            </p>
          </header>
          <section className="flex flex-col gap-2 mt-6">
            {components.map((item, i) => (
              <ComponentButton
                key={item.name}
                data={item}
                {...{ setComponent, setView, i }}
              />
            ))}
          </section>
        </main>
      </CSSTransition>
      <CSSTransition
        unmountOnExit
        in={view === View.DOCS}
        timeout={1000}
        classNames="docs"
      >
        <main className="flex flex-col absolute inset-0 w-full h-full overflow-auto px-5 py-6">
          <DocumentationContent
            component={components.find(item => item.name === component)}
            {...{ setView }}
          />
        </main>
      </CSSTransition>
    </aside>
  )
}

/** @param {{data: import("@/components/composed/dashboard/posts/create/components").MarkdownComponent}} props */
const ComponentButton = ({ data, setComponent, setView, i }) => {
  const [docsHover, setDocsHover] = useState(false)
  const [copiedText, copy] = useCopyToClipboard()

  return (
    <div
      style={{
        "--i": i,
      }}
      className={cx(
        "component-button relative isolate flex items-center border h-10 border-border rounded-lg hover:bg-white/[0.025] transition-[background-color,border]",
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
        onClick={() => {
          setComponent(data.name)
          setView(View.DOCS)
        }}
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

/**
 *
 * @param {{component: import("@/components/composed/dashboard/posts/create/components").MarkdownComponent}} props
 * @returns
 */
const DocumentationContent = ({ component, setView }) => (
  <>
    <header className="space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="text-cool-lime-300 font-medium text-xl flex items-center gap-3">
          {component && cloneElement(component?.icon, { className: "w-5 h-5" })}
          {component?.name}
        </h2>
        <button
          onClick={() => setView(View.MAIN)}
          className="text-t-secondary hover:text-violet-300 transition-colors"
        >
          <AccessibleIcon label="Return to Component Browser">
            <ResetIcon />
          </AccessibleIcon>
        </button>
      </div>
      <p className="text-xs text-t-secondary leading-normal">
        {component?.description}
      </p>
    </header>
    <section className="flex flex-col gap-7 mt-6">
      <div className="flex flex-col gap-3">
        <div className="space-y-1">
          <h3 className="font-medium text-lg">Anatomy</h3>
          <p className="text-xs text-t-secondary leading-normal">
            Barebone anatomy of the markdown component.
          </p>
        </div>
        {component?.anatomy}
      </div>
      <div className="flex flex-col gap-3">
        <div className="space-y-1">
          <h3 className="font-medium text-lg">Props</h3>
          <p className="text-xs text-t-secondary leading-normal">
            Possible props of the markdown component.
          </p>
        </div>
        <div className="space-y-4 mt-2">
          {component?.props?.map(item => (
            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                {{
                  string: <QuoteIcon className="w-3" />,
                  boolean: <SwitchIcon className="w-3" />,
                  number: <FrameIcon className="w-3" />,
                }[item?.type] || null}
                <code className="text-[13px] text-violet-300 bg-violet-950/30 w-fit rounded px-1 -mx-0.5">
                  {item.name}
                  {item.optional && <span className="text-violet-300">?</span>}
                </code>
              </div>
              <p className="text-xs leading-relaxed text-t-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
)

export default ComponentBrowser
