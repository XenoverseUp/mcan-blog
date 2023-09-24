"use client"

import ComponentButton from "@/components/composed/dashboard/posts/create/ComponentButton"
import DocumentationContent from "@/components/composed/dashboard/posts/create/DocumentationContent"
import cx from "@/utils/cx"
import { useState } from "react"
import { CSSTransition } from "react-transition-group"

export const View = {
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

export default ComponentBrowser
