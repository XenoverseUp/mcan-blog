import cx from "@/utils/cx"

/**
 *
 * @param {{type: "opinions"|"snippets"|"tutorials"}} props
 * @returns
 */

const Category = ({ type }) => (
  <p className="text-[#E7E3E3] flex items-center gap-[6px] text-sm">
    Published in
    <button className="inline-flex items-center gap-1 cursor-pointer group focus-visible:ring-4 rounded-sm">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={cx("w-5 h-5", {
            "stroke-blue-300": type === "snippets",
            "stroke-pink-300": type === "opinions",
            "stroke-green-300": type === "tutorials",
          })}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              type === "snippets"
                ? "M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                : type === "opinions"
                ? "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                : "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            }
          />
        </svg>
      </span>
      <span
        className={cx(
          "capitalize group-hover:underline group-focus-visible:underline underline-offset-2",
          {
            "text-blue-300": type === "snippets",
            "text-pink-300": type === "opinions",
            "text-green-300": type === "tutorials",
          },
        )}
      >
        {type}.
      </span>
    </button>
  </p>
)

export default Category
