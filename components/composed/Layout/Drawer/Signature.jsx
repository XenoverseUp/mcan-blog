import cx from "@/utils/cx"
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
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />
        <div className="flex flex-col">
          <h3 className="md:text-xl font-bold">{data.name}</h3>
          <ReactTimeago
            className="text-xs md:text-sm opacity-60"
            date={new Date(data.createdAt)}
            minPeriod={10}
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
