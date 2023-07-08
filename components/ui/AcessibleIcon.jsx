"use client"

import { AccessibleIcon as ClientAccessibleIcon } from "@radix-ui/react-accessible-icon"

const AccessibleIcon = ({ children, label }) => (
  <ClientAccessibleIcon {...{ label }}>{children}</ClientAccessibleIcon>
)

export default AccessibleIcon
