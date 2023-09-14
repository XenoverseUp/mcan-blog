"use server"

import { getUserRole } from "@/lib/auth"

export const getRole = async email => {
  const role = getUserRole(email)
  return role
}
