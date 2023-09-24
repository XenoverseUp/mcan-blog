import { AccessibleIcon, ReactTimeago } from "@/components/helper/Client"
import Tooltip from "@/components/primitives/Tooltip"
import cx from "@/utils/cx"
import { DotFilledIcon, InfoCircledIcon } from "@radix-ui/react-icons"

const StatusBar = ({
  className,
  dashboardMeta: { totalViews, liveDate, publishedPostCount, snippetCount },
}) => {
  const date = new Date(liveDate)

  return (
    <div
      className={cx(
        className,
        "border-t border-border h-9 flex justify-between items-center px-4",
      )}
    >
      <div>
        <p className="text-xs flex items-center gap-1 whitespace-nowrap">
          <span className="text-t-secondary">Live since</span>
          <time
            className="text-cool-lime-300"
            dateTime={date.toISOString()}
            title={new Intl.DateTimeFormat("en-US", {
              dateStyle: "long",
            }).format(date)}
          >
            {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
              date,
            )}
          </time>
          <Tooltip
            content={
              <ReactTimeago className="text-xs" date={date} minPeriod={4} />
            }
          >
            <button className="opacity-50 hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:ring-4 rounded-full">
              <AccessibleIcon>
                <InfoCircledIcon />
              </AccessibleIcon>
            </button>
          </Tooltip>
        </p>
      </div>
      <div className="flex gap-1 text-xs items-center whitespace-nowrap">
        <p>
          {snippetCount} {snippetCount === 1 ? "snippet" : "snippets"}
        </p>
        <DotFilledIcon className="text-cool-lime-300" />
        <p>
          {publishedPostCount} {publishedPostCount === 1 ? "post" : "posts"}
        </p>
        <DotFilledIcon className="text-cool-lime-300" />
        <p>
          {totalViews} {totalViews === 1 ? "view" : "views"}
        </p>
      </div>
    </div>
  )
}

export default StatusBar
