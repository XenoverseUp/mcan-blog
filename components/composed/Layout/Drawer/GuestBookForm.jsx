"use client"

import { create } from "@/actions/guestbook.action"
import When from "@/components/helper/When"
import { Signature } from "@/lib/schema"
import cx from "@/utils/cx"
import { zodResolver } from "@hookform/resolvers/zod"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"
import { CardStackPlusIcon, InfoCircledIcon } from "@radix-ui/react-icons"
import * as Tooltip from "@radix-ui/react-tooltip"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"

const GuestBookForm = () => {
  const nameRef = useRef()
  const contentRef = useRef()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Signature),
    defaultValues: {
      name: "",
      content: "",
    },
  })

  const name = watch("name")
  const content = watch("content")

  const { ref: formNameRef, ...nameRest } = register("name")
  const { ref: formContentRef, ...contentRest } = register("content")

  /** @type {import("react-hook-form").SubmitHandler<Pick<Signature, "name" | "content">} */
  const onSubmit = async data => {
    const res = await create(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-4 flex justify-between gap-4 text-sm"
    >
      <div
        name="name"
        onClick={() => {
          nameRef.current.focus()
        }}
        className="flex-shrink-0 w-64 relative flex group h-[3.75rem] flex-col [&:has(:focus-visible)]:ring-4 justify-center border border-border rounded-xl px-4 cursor-pointer"
      >
        <When condition={errors.name?.message}>
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button className="absolute right-2 top-2 text-orange-500 focus-visible:ring-4 rounded-full">
                  <AccessibleIcon label="Add Comment">
                    <InfoCircledIcon />
                  </AccessibleIcon>
                </button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  side="top"
                  className="z-50 bg-zinc-100 text-background text-xs px-3 pt-[0.2rem] pb-1 rounded-lg will-change-[transform,opacity]"
                  sideOffset={6}
                >
                  {errors.name?.message.content}
                  <Tooltip.Arrow className="fill-zinc-100" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </When>
        <div
          className={cx("group-focus-within:pb-1", {
            "pb-1": !["", undefined, null].includes(name),
          })}
        >
          <label
            className={cx(
              "opacity-50 group-focus-within:text-xs group-focus-within:text-accent group-focus-within:opacity-100 transition-all cursor-pointer",
              {
                "text-xs text-accent opacity-100": ![
                  "",
                  undefined,
                  null,
                ].includes(name),
              },
            )}
          >
            Your name
          </label>
        </div>
        <input
          {...nameRest}
          ref={e => {
            formNameRef(e)
            nameRef.current = e
          }}
          value={name}
          type="text"
          autoComplete="off"
          className={cx(
            "bg-transparent h-0 opacity-0 overflow-hidden transition-all group-focus-within:h-4 group-focus-within:mb-1 group-focus-within:opacity-100",
            {
              "h-4 mb-1 opacity-100": !["", undefined, null].includes(name),
            },
          )}
        />
      </div>
      <div
        name="content"
        onClick={() => contentRef.current.focus()}
        className="flex-grow relative w-64 flex group flex-col h-[3.75rem] [&:has(:focus-visible)]:ring-4 justify-center border border-border rounded-xl px-4 cursor-pointer"
      >
        <When condition={errors.content?.message}>
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button className="absolute right-2 top-2 text-orange-500 focus-visible:ring-4 rounded-full">
                  <AccessibleIcon label="Add Comment">
                    <InfoCircledIcon />
                  </AccessibleIcon>
                </button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  side="top"
                  className="z-50 bg-zinc-100 text-background text-xs px-3 pt-[0.2rem] pb-1 rounded-lg will-change-[transform,opacity]"
                  sideOffset={6}
                >
                  {errors.content?.message.content}
                  <Tooltip.Arrow className="fill-zinc-100" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </When>
        <div
          className={cx("group-focus-within:pb-1", {
            "pb-1": !["", undefined, null].includes(content),
          })}
        >
          <label
            className={cx(
              "opacity-50 group-focus-within:text-xs group-focus-within:text-accent group-focus-within:opacity-100 transition-all cursor-pointer",
              {
                "text-xs text-accent opacity-100": ![
                  "",
                  undefined,
                  null,
                ].includes(content),
              },
            )}
          >
            Your lovely comment
          </label>
        </div>
        <input
          {...contentRest}
          ref={e => {
            formContentRef(e)
            contentRef.current = e
          }}
          type="text"
          autoComplete="off"
          className={cx(
            "bg-transparent h-0 opacity-0 overflow-hidden transition-all group-focus-within:h-4 group-focus-within:mb-1 group-focus-within:opacity-100",
            {
              "h-4 mb-1 opacity-100": !["", undefined, null].includes(content),
            },
          )}
        />
      </div>
      <button
        type="submit"
        className="text-accent hover:text-background hover:bg-accent focus-visible:text-background focus-visible:bg-accent active:text-background active:bg-accent/90 transition-colors rounded-xl aspect-square h-[3.75rem] grid place-items-center border-2 border-accent focus-visible:ring-4"
      >
        <AccessibleIcon label="Add Comment">
          <CardStackPlusIcon className="scale-125" />
        </AccessibleIcon>
      </button>
    </form>
  )
}

export default GuestBookForm
