import { date, object, string } from "zod"

export const Signature = object({
  name: string({
    required_error: "Name is required.",
    invalid_type_error: "Name must be a string.",
  })
    .min(3, { message: "Name should be at least 3 characters long." })
    .max(22, { message: "Name cannot be any longer than 22 characters." }),
  content: string({
    required_error: "Signature content is required.",
    invalid_type_error: "Signature content must be a string.",
  })
    .min(3, {
      message: "Signature content should be at least 3 characters long.",
    })
    .max(1200, {
      message: "Signature content cannot be any longer than 1200 characters.",
    }),
  createdAt: date(),
})
