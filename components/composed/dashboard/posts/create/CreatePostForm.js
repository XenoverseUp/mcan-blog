"use client"

import PublicationSelect from "@/components/composed/dashboard/posts/create/PublicationSelect"
import When from "@/components/helper/When"
import Button from "@/components/primitives/Button"
import Input from "@/components/primitives/Input"
import { CreatePostSchema } from "@/lib/schema"
import capitalize from "@/utils/capitalize"
import cx from "@/utils/cx"
import { zodResolver } from "@hookform/resolvers/zod"
import { Publication } from "@prisma/client"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import * as Dialog from "@radix-ui/react-dialog"
import {
  ArchiveIcon,
  ArrowLeftIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cross1Icon,
  CubeIcon,
  DotsVerticalIcon,
  GlobeIcon,
  PaperPlaneIcon,
  RocketIcon,
  Share2Icon,
} from "@radix-ui/react-icons"
import Avatar from "boring-avatars"
import Link from "next/link"
import { Fragment, forwardRef, useEffect } from "react"
import { Controller, useForm } from "react-hook-form"

const CreatePostForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(CreatePostSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      coverImage: "",
      content: "",
      publication: undefined,
      type: undefined,
    },
  })

  const title = watch("title")
  const subtitle = watch("subtitle")
  const content = watch("content")
  const publication = watch("publication")
  const type = watch("type")

  const coverImage = watch("coverImage")
  const previewUrl = watch("previewUrl")
  const repositoryUrl = watch("repositoryUrl")

  const { ref: coverImageRef, ...coverImageRest } = register("coverImage")
  const { ref: previewUrlRef, ...previewUrlRest } = register("previewUrl")
  const { ref: repositoryUrlRef, ...repositoryUrlRest } =
    register("repositoryUrl")

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <header className="space-y-2">
        <div className="flex justify-between items-center mb-4">
          <Link
            href="/dashboard/posts"
            className="flex items-center gap-2 text-sm text-cool-lime-300 hover:brightness-95"
          >
            <ArrowLeftIcon />
            <span>Back to posts</span>
          </Link>
          <button className="flex items-center gap-2 text-xs border border-border font-medium px-4 py-[6px] text-violet-300 hover:brightness-95 hover:border-violet-300 hover:bg-violet-300 hover:text-background transition-all rounded-full">
            Publish
            <PaperPlaneIcon />
          </button>
        </div>
        <header className="flex justify-between items-end">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">Create Blog Post</h1>
            <p className="text-sm text-t-secondary max-w-sm leading-relaxed">
              Fill out the form below to create a blog post or use an existing
              markdown file to populate the fields.
            </p>
          </div>
        </header>
      </header>
      <div
        aria-hidden
        className="border-dashed border-y border-border py-3 px-1 flex items-center justify-between"
      >
        <PublicationSelect {...{ control, publication }} />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button variant="soft" className="aspect-square justify-center p-0">
              <AccessibleIcon label="More">
                <CubeIcon />
              </AccessibleIcon>
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-background/50 z-40" />
            <Dialog.Content className="pt-6 pb-8 px-6 border flex flex-col items-center border-border fixed top-[50%] z-50 left-[50%] max-h-[85vh] w-[90vw] max-w-[420px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-neutral-900">
              <Dialog.Close asChild>
                <button className="absolute top-3 right-3 focus-visible:ring-4 rounded-sm">
                  <AccessibleIcon label="Close Share Sheet">
                    <Cross1Icon />
                  </AccessibleIcon>
                </button>
              </Dialog.Close>
              <header className="mb-8 text-center">
                <Dialog.Title className="font-staff-wide text-lg">
                  Metadata
                </Dialog.Title>
                <p className="text-xs text-t-secondary">
                  Adjust metadata for better SEO.
                </p>
              </header>
              <div className="w-full space-y-3">
                <Input label="Cover Image" />
                <Input label="Preview" />
                <Input label="Repository" />
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
      <div>
        <Controller
          render={({ field: { onChange, ...field } }) => {
            function onInput(e) {
              onChange(e.target.textContent) // See note below
            }

            return (
              <div className="relative h-fit">
                <When asChild condition={!title.trim().replace("\n", "")}>
                  <span
                    className="text-4xl leading-tight font-medium select-none text-neutral-500 w-fit pointer-events-none absolute top-0 left-0"
                    contentEditable={false}
                  >
                    Title
                  </span>
                </When>
                <h1
                  contentEditable
                  onInput={onInput}
                  {...field}
                  tabIndex={0}
                  className="text-4xl leading-tight font-medium mt-2 text-cool-lime-300 w-full [text-wrap:balance]"
                ></h1>
              </div>
            )
          }}
          control={control}
          name="title"
        />
        <Controller
          render={({ field: { onChange, ...field } }) => {
            /** @param {InputEvent} e */
            function onInput(e) {
              console.log(e)

              onChange(e.target.textContent) // See note below
            }

            return (
              <fieldset className="relative mt-2">
                <When asChild condition={!subtitle.replace("\n", "").trim()}>
                  <span
                    className="text-2xl leading-tight text-neutral-700 w-fit pointer-events-none absolute top-0 left-0 select-none"
                    contentEditable={false}
                  >
                    Subtitle
                  </span>
                </When>
                <h2
                  contentEditable
                  tabIndex={0}
                  id="subtitle"
                  onInput={onInput}
                  {...field}
                  className="text-2xl leading-tight text-t-secondary w-full [text-wrap:balance]"
                ></h2>
              </fieldset>
            )
          }}
          control={control}
          name="subtitle"
        />
        <Controller
          render={({ field: { onChange, ...field } }) => {
            function onInput(e) {
              onChange(e.target.textContent) // See note below
            }

            return (
              <fieldset className="relative mt-8">
                <When asChild condition={!content.replace("\n", "").trim()}>
                  <span
                    className="text-lg leading-normal select-none font-mono min-h-[320px] inline-block [font-feature-settings:'liga'_0] [font-variant-ligatures:none] text-neutral-600 w-fit pointer-events-none absolute top-0 left-0"
                    contentEditable={false}
                  >
                    Tell your story...
                  </span>
                </When>
                <pre
                  contentEditable
                  tabIndex={0}
                  onInput={onInput}
                  {...field}
                  className="text-lg leading-normal text-t-secondary w-full min-h-[320px] inline-block [font-feature-settings:'liga'_0] [font-variant-ligatures:none] whitespace-pre-wrap"
                ></pre>
              </fieldset>
            )
          }}
          control={control}
          name="content"
        />
      </div>
    </form>
  )
}

export default CreatePostForm
