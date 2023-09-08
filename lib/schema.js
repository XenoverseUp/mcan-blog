import removeMultipleSpaces from "@/utils/removeMultipleSpaces"
import { date, number, object, string, z } from "zod"

export const Signature = object({
  name: string({
    required_error: "Name is required.",
    invalid_type_error: "Name must be a string.",
  })
    .trim()
    .nonempty({ message: { type: "empty", content: "Name is required." } })
    .transform(removeMultipleSpaces)
    .pipe(
      string()
        .min(3, {
          message: {
            type: "min",
            content: "Name should be at least 3 characters long.",
          },
        })
        .max(22, {
          message: {
            type: "max",
            content: "Name cannot be any longer than 22 characters.",
          },
        })
        .regex(/^(?!\d)[a-zA-Z\d]+(?: [a-zA-Z\d]+)*$/, {
          message: { type: "regex", content: "Name should be alphanumeric." },
        }),
    ),
  content: string({
    required_error: "Signature content is required.",
    invalid_type_error: "Signature content must be a string.",
  })
    .trim()
    .nonempty({ message: { type: "empty", content: "Content is required." } })
    .transform(removeMultipleSpaces)
    .pipe(
      string()
        .min(3, {
          message: {
            type: "min",
            content: "Content should be at least 3 characters long.",
          },
        })
        .max(1200, {
          message: {
            type: "max",
            content: "Content cannot be any longer than 1200 characters.",
          },
        }),
    ),
  createdAt: date().optional(),
  uid: string().optional(),
})

/** @typedef {import("zod").infer<typeof Signature>} Signature */

export const Post = object({
  title: string(),
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
      number()
        .int({ message: "`page` query parameter must be an integer." })
        .nonnegative({ message: "`page` query parameter must be at least 0." }),
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
      number()
        .int({ message: "`limit` query parameter must be an integer." })
        .positive({
          message: "`limit` query parameter must be positive.",
        }),
    ),
})

/** @typedef {z.infer<typeof PaginationParameters>} PaginationParameters */
