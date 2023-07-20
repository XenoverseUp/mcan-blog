export default function Layout({ children }) {
  return (
    <div className="flex w-full flex-grow flex-col items-center overflow-auto">
      <p>Slug Layout</p>
      <article className="typography">{children}</article>
    </div>
  )
}
