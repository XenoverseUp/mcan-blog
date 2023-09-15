"use server"

import { getUserRole } from "@/lib/auth"
import { revalidatePath } from "next/cache"

export const getRoleAction = async email => {
  const role = getUserRole(email)
  return role
}

export const revalidateSignIn = async () => {
  revalidatePath("/sign-in")
}
