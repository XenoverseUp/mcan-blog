import cx from "@/lib/utils/cx"
import Avatar from "boring-avatars"
import ReactTimeago from "react-timeago"

const Signature = ({ data, pending }) => {
  return (
    <div
      className={cx("space-y-3 max-w-4xl transition-opacity", {
        "animate-pulse": pending,
      })}
    >
      <header className="flex gap-4 items-center">
        <Avatar
          size={40}
          title="Avatar"
          name={data.name}
          variant="beam"
          colors={["#CECE5A", "#FFE17B", "#FD8D14", "#C51605"]}
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h3 className="md:text-xl font-bold">{data.name}</h3>
            <div
              className={cx(
                "rounded-full transition-opacity opacity-0 flex gap-[0.375rem] items-center justify-center px-2 py-1 text-xs text-accent border border-accent/30 bg-accent/10",
                { "opacity-100": pending },
              )}
            >
              <span className="rounded-full border-2 border-dotted border-accent animate-spin [animation-duration:1.5s] w-3 aspect-square"></span>
              <span>Posting...</span>
            </div>
          </div>
          <ReactTimeago
            className="text-xs md:text-sm opacity-60"
            date={new Date(data.createdAt)}
            minPeriod={4}
          />
        </div>
      </header>
      <p className="select-auto text-sm md:text-base leading-7 md:leading-8">
        {data.content}
      </p>
    </div>
  )
}

export default Signature
