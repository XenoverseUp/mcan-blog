import clsx from "clsx"
import { twMerge } from "tailwind-merge"

const cx = (...classes) => twMerge(clsx(...classes))

export default cx
