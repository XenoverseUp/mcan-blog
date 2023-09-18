"use client"

import { getRoleAction, revalidateSignIn } from "@/actions/auth.action"
import Input from "@/components/primitives/Input"
import Logo from "@/components/primitives/Logo"
import useBoolean from "@/hooks/useBoolean"
import { SignInSchema } from "@/lib/schema"
import cx from "@/utils/cx"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserRole } from "@prisma/client"
import { EnterIcon, PaperPlaneIcon } from "@radix-ui/react-icons"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

const SignInForm = () => {
  const [authError, setAuthError] = useState(false)
  const [loading, setLoading] = useBoolean(false)

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

  useEffect(() => {
    if (authError) setAuthError(false)
  }, [email, password])

  const onSubmit = async data => {
    setLoading(true)
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
      setAuthError(true)
      setLoading(false)
    }
  }

  return (
    <>
      <header className="text-center space-y-2">
        <Logo className="w-10 mb-4 mx-auto" shadow />
        <h1 className="font-staff-wide text-xl">Sign In</h1>
        <p
          className={cx("text-sm text-t-secondary", {
            "text-red-600": authError,
          })}
        >
          {authError
            ? "Verify your email and password, and try again."
            : "Sign in to access dashboard."}
        </p>
      </header>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cx("w-full max-w-lg rounded-lg space-y-2", {
          "animate-bounce-x": authError,
        })}
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
          className={cx(
            "flex gap-4 select-none items-center justify-center w-full px-2 bg-cool-lime-300/5 !mt-8 text-cool-lime-300  hover:bg-cool-lime-300/10 focus-visible:bg-cool-lime-300/10 transition-colors rounded-xl h-[3.75rem] border-2 border-cool-lime-300 focus-visible:ring-4",
          )}
        >
          {loading ? (
            <>
              <span>Signing In...</span>
              <span className="rounded-full border-2 border-dotted border-cool-lime-300 animate-spin [animation-duration:1.5s] w-3 aspect-square transition-[border]"></span>
            </>
          ) : (
            <>
              <span>Sign In</span>
              <EnterIcon />
            </>
          )}
        </button>
      </form>
    </>
  )
}

export default SignInForm
