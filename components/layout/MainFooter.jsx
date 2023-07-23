import Github from "@/assets/svg/social/github"
import In from "@/assets/svg/social/in"
import Medium from "@/assets/svg/social/medium"
import Spotify from "@/assets/svg/social/spotify"
import IconLink from "@/components/ui/IconLink"

const MainFooter = () => (
  <footer className="flex h-10 w-full flex-shrink-0 items-center justify-between border-t border-border bg-white px-4">
    <p className="text-xs text-secondary">
      Copyright 2023 © Muhammed Can Durmus
    </p>
    <div className="flex gap-3">
      <IconLink
        href="https://open.spotify.com/user/m2x5rzs90t2cgiw6406qnw9vm?si=6bc0ba63c5204048"
        label="Spotify Profile"
      >
        <Spotify className="aspect-square w-5 fill-primary" />
      </IconLink>

      <IconLink href="https://medium.com/@candurmuss" label="My Medium Blog">
        <Medium className="aspect-square w-5 fill-primary" />
      </IconLink>

      <IconLink
        href="https://www.linkedin.com/in/can-durmuss/"
        label="My LinkedIn Profile"
      >
        <In className="aspect-square w-5 fill-primary" />
      </IconLink>

      <IconLink href="https://github.com/XenoverseUp" label="My Github Profile">
        <Github className="aspect-square w-5 fill-primary" />
      </IconLink>
    </div>
  </footer>
)

export default MainFooter
