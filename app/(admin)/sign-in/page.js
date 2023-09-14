import SignInForm from "@/components/composed/Auth/SignInForm"

export default function Login() {
  return (
    <main className="w-full h-screen flex flex-col gap-8 items-center px-6 justify-center">
      <header className="text-center space-y-2">
        <h1 className="font-staff-wide text-xl">Sign In</h1>
        <p className="text-sm text-t-secondary">Sign in to access dashboard.</p>
      </header>
      <SignInForm />
    </main>
  )
}
