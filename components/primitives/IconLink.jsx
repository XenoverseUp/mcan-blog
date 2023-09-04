import Link from "next/link"
import AccessibleIcon from "../helper/Client"

const IconLink = ({ children, href, target = "_blank", label, className }) => (
  <Link {...{ href, target, className }}>
    <AccessibleIcon {...{ label }}>{children}</AccessibleIcon>
  </Link>
)

export default IconLink
