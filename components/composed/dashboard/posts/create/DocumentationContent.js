import { View } from "@/components/composed/dashboard/posts/create/ComponentBrowser"
import { Pre } from "@/components/composed/dashboard/posts/create/components"
import When from "@/components/helper/When"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import {
  Component2Icon,
  FrameIcon,
  QuoteIcon,
  ResetIcon,
  SwitchIcon,
} from "@radix-ui/react-icons"
import { cloneElement } from "react"

/**
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
      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <h3 className="font-medium text-lg">API Reference</h3>
          <p className="text-xs text-t-secondary leading-normal">
            Possible props of the {component?.name?.toLowerCase()} component and
            its subelements.
          </p>
        </div>
        {component?.elements?.map(([name, props]) => (
          <div className="space-y-4 mt-2" key={`documentation-element-${name}`}>
            <h4 className="font-medium">{name}</h4>
            <div className="space-y-5">
              {props.map((item, i) => (
                <div className="space-y-2" key={`prop-${component?.name}-${i}`}>
                  <div className="flex gap-2 items-center">
                    {{
                      string: <QuoteIcon className="w-3" />,
                      boolean: <SwitchIcon className="w-3" />,
                      number: <FrameIcon className="w-3" />,
                      enum: <Component2Icon className="w-3" />,
                    }[item?.type] || null}
                    <code className="text-[13px] text-violet-300 bg-violet-950/30 w-fit rounded px-1 -mx-0.5">
                      {item.name}
                      {item.optional && (
                        <span className="text-violet-300">?</span>
                      )}
                    </code>
                  </div>
                  <p
                    className="text-xs text-t-secondary leading-normal"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  <When condition={item?.enum}>
                    <Pre className="mt-4 mb-6 !text-cool-lime-300">
                      {item.enum?.map(word => `"${word}"`).join(" | ")}
                    </Pre>
                  </When>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
)

export default DocumentationContent
