"use client"

import { getRoleAction, revalidateSignIn } from "@/actions/auth.action"
import Input from "@/components/primitives/Input"
import { SignInSchema } from "@/lib/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserRole } from "@prisma/client"
import { signIn } from "next-auth/react"
import { revalidatePath } from "next/cache"
import { useRouter, useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const email = watch("email")
  const password = watch("password")

  const { ref: emailRef, ...emailRest } = register("email")
  const { ref: passwordRef, ...passwordRest } = register("password")

  const router = useRouter()
  const searchParams = useSearchParams()

  const callback = searchParams.get("callback")

  const onSubmit = async data => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    })

    if (res.error === null) {
      const role = await getRoleAction(data.email)
      await revalidateSignIn()

      router.replace(callback ?? "/")
      if (role === UserRole.ADMIN) router.replace("/dashboard")
    } else {
      // TODO: Handle not found error.
      reset()
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg rounded-lg space-y-2"
    >
      <Input
        value={email}
        name="email"
        hookForm={emailRest}
        error={errors?.email?.message}
        ref={emailRef}
        autoComplete="off"
        type="text"
        label="Email"
        autoFocus
      />
      <Input
        value={password}
        name="password"
        hookForm={passwordRest}
        error={errors?.password?.message}
        ref={passwordRef}
        autoComplete="off"
        type="password"
        label="Password"
      />
      <button
        type="submit"
        className=" w-full px-2 bg-cool-lime-300/5 !mt-8 text-cool-lime-300 hover:text-background hover:bg-cool-lime-300 focus-visible:text-background focus-visible:bg-cool-lime-300 active:text-background active:bg-cool-lime-300/90 transition-colors rounded-xl h-[3.75rem] border-2 border-cool-lime-300 focus-visible:ring-4"
      >
        Sign in
      </button>
    </form>
  )
}

export default SignInForm
