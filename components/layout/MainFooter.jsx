import Github from "@/assets/svg/social/github"
import In from "@/assets/svg/social/in"
import Medium from "@/assets/svg/social/medium"
import Spotify from "@/assets/svg/social/spotify"

const MainFooter = () => (
  <footer className="w-full h-10 flex bg-white border-t border-neutral-300 justify-between items-center px-4">
    <p className="text-xs text-accent-slight text-opacity-80">
      Copyright 2023 © Muhammed Can Durmus
    </p>
    <div className="flex gap-3">
      <Spotify className="w-5 aspect-square fill-accent" />
      <Medium className="w-5 aspect-square fill-accent" />
      <In className="w-5 aspect-square fill-accent" />
      <Github className="w-5 aspect-square fill-accent" />
    </div>
  </footer>
)

export default MainFooter
