import cx from "@/utils/cx"

const Signature = ({ data, pending }) => (
  <div
    key={data.name + data.createdAt}
    className={cx("space-y-2 max-w-4xl transition-opacity", {
      "opacity-50": pending,
    })}
  >
    <h3 className="text-xl font-bold">{data.name}</h3>
    <p className="select-auto">{data.content}</p>
    <span className="text-sm opacity-50 block">{data.createdAt}</span>
  </div>
)

export default Signature
