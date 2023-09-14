"use server"

import { getUserRole } from "@/lib/auth"

export const a = async email => {
  const role = getUserRole(email)
  return role
}
