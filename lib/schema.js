import removeMultipleSpaces from "@/utils/removeMultipleSpaces"
import { date, number, object, string } from "zod"

export const Signature = object({
  name: string({
    required_error: "Name is required.",
    invalid_type_error: "Name must be a string.",
  })
    .trim()
    .transform(removeMultipleSpaces)
    .pipe(
      string()
        .regex(/^(?!\d)[a-zA-Z\d]+(?: [a-zA-Z\d]+)*$/, {
          message: "Name should be alphanumeric.",
        })
        .min(3, { message: "Name should be at least 3 characters long." })
        .max(22, { message: "Name cannot be any longer than 22 characters." }),
    ),
  content: string({
    required_error: "Signature content is required.",
    invalid_type_error: "Signature content must be a string.",
  })
    .trim()
    .transform(removeMultipleSpaces)
    .pipe(
      string()
        .min(3, {
          message: "Signature content should be at least 3 characters long.",
        })
        .max(1200, {
          message:
            "Signature content cannot be any longer than 1200 characters.",
        }),
    ),
  createdAt: date(),
})

export const PaginationParameters = object({
  page: string({
    required_error: "`page` query parameter is required.",
    invalid_type_error: "`page` query parameter must be a string.",
  })
    .regex(/^(0|[1-9][0-9]*)$/, {
      message: "`page` query parameter must be a positive whole number",
    })
    .transform(parseInt)
    .pipe(
      number().min(0, {
        message: "`page` query parameter must be at least 0.",
      }),
    ),
  limit: string({
    required_error: "`limit` query parameter is required.",
    invalid_type_error: "`limit` query parameter must be a string.",
  })
    .regex(/^(0|[1-9][0-9]*)$/, {
      message: "`limit` query parameter must be a positive whole number",
    })
    .transform(parseInt)
    .pipe(
      number().min(1, {
        message: "`limit` query parameter must be at least 1.",
      }),
    ),
})
