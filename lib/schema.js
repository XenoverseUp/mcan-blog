import removeMultipleSpaces from "@/utils/removeMultipleSpaces"
import { PostType, Publication } from "@prisma/client"

import {
  array,
  boolean,
  date,
  enum as enumeration,
  number,
  object,
  string,
  z,
} from "zod"

export const Signature = object({
  name: string({
    required_error: "Name is required.",
    invalid_type_error: "Name must be a string.",
  })
    .trim()
    .nonempty({ message: "Name is required." })
    .transform(removeMultipleSpaces)
    .pipe(
      string()
        .min(3, {
          message: "Name should be at least 3 characters long.",
        })
        .max(22, {
          message: "Name cannot be any longer than 22 characters.",
        })
        .regex(/^(?!\d)[a-zA-Z\d]+(?: [a-zA-Z\d]+)*$/, {
          message: "Name should be alphanumeric.",
        }),
    ),
  content: string({
    required_error: "Signature content is required.",
    invalid_type_error: "Signature content must be a string.",
  })
    .trim()
    .nonempty({ message: "Content is required." })
    .transform(removeMultipleSpaces)
    .pipe(
      string()
        .min(3, {
          message: "Content should be at least 3 characters long.",
        })
        .max(1200, {
          message: "Content cannot be any longer than 1200 characters.",
        }),
    ),
  createdAt: date().optional(),
  uid: string().optional(),
})

/** @typedef {import("zod").infer<typeof Signature>} Signature */

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

/** @typedef {import("zod").infer<typeof PaginationParameters>} PaginationParameters */

export const CreatePostSchema = object({
  title: string()
    .min(2, {
      message: "`title` must be at least 2 characters.",
    })
    .max(255, {
      message: "`slug` cannot be any longer than 255 characters.",
    }),
  draft: boolean().optional(),
  subtitle: string(),
  coverImage: string().optional(),
  publication: enumeration(Object.values(Publication)),
  type: enumeration(Object.values(PostType)),
  previewUrl: string()
    .url({ message: "`previewUrl` must be a url." })
    .optional(),
  repositoryUrl: string()
    .url({ message: "`repositoryUrl` must be a url." })
    .optional(),
  references: string().array().optional(),
  externalLinks: string()
    .url({ message: "`externalLink` must be a url." })
    .array()
    .optional(),
  content: string(),
})

/** @typedef {import("zod").infer<typeof CreatePostSchema} CreatePostParameters */

export const SignInSchema = object({
  email: string({
    required_error: "Email is required.",
    invalid_type_error: "Email must be a string.",
  })
    .email({ message: "Enter a valid email." })
    .trim()
    .nonempty({ message: "Email is required." }),

  password: string().trim().nonempty({ message: "Password is required." }),
})
