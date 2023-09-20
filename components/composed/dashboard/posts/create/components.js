import cx from "@/utils/cx"
import {
  ChatBubbleIcon,
  CodeIcon,
  DotsHorizontalIcon,
  FontFamilyIcon,
  GitHubLogoIcon,
  ImageIcon,
  LayersIcon,
  LightningBoltIcon,
  Link2Icon,
  QuoteIcon,
} from "@radix-ui/react-icons"

const Pre = ({ children, className }) => (
  <pre
    className={cx(
      className,
      "[font-feature-settings:'liga'_0] [font-variant-ligatures:none] bg-neutral-900 px-3 -mx-1 py-[10px] text-xs rounded-lg text-violet-300",
    )}
  >
    {children}
  </pre>
)

/** @typedef {"Picture"|"Separator"|"Link"|"Quote"|"Note"|"Instruction Flow"|"Github Gist"|"Shell Command"|"File Structure"|"Fetch Request"} componentNames */

/**
 * @typedef {{
 *  name: string
 *  icon: import("react").ForwardRefExoticComponent<import("@radix-ui/react-icons/dist/types").IconProps & React.RefAttributes<SVGSVGElement>> | JSX.Element
 *  template: string
 *  description: string
 *  anatomy: string
 *  props: Array<{name: string, type: "string"|"number"|"boolean", description: string, optional: boolean}>
 * }} MarkdownComponent
 */

/** @type {MarkdownComponent[]} */
const components = [
  {
    name: "Picture",
    icon: <ImageIcon />,
    template: `<Picture src="{}" alt="{}" caption="{}" />`,
    description:
      "An optimized picture component to handle all kinds of images.",
    anatomy: <Pre>{"<Picture />"}</Pre>,
    props: [
      {
        name: "src",
        type: "string",
        description:
          "Source of the local or hosted image. For custom images, you can omit the host after uploading them to server.",
        optional: false,
      },
      {
        name: "alt",
        type: "boolean",
        description:
          "Description of the image for screen readers. It improves accesibility and SEO.",
        optional: false,
      },
      {
        name: "caption",
        type: "number",
        description: "Caption of the image to be displayed underneath.",
        optional: true,
      },
    ],
  },
  {
    name: "Separator",
    icon: <DotsHorizontalIcon />,
    template: `<Separator />`,
  },
  {
    name: "Link",
    icon: <Link2Icon />,
    template: `<Link>{}</Link>`,
  },
  {
    name: "Quote",
    icon: <QuoteIcon />,
    template: `<Quote>{}</Quote>`,
  },
  {
    name: "Note",
    icon: <ChatBubbleIcon />,
    template: `<Note>{}</Note>`,
  },
  {
    name: "Instruction Flow",
    icon: <FontFamilyIcon />,
    template: `<Flow.Root>\n\t<Flow.Step>{}</Flow.Step>\n</Flow.Root>`,
  },
  {
    name: "Github Gist",
    icon: <GitHubLogoIcon />,
    template: `<Gist src="{}" />`,
  },
  {
    name: "Shell Command",
    icon: <CodeIcon />,
    template: `<Command>{}</Command>`,
  },
  {
    name: "File Structure",
    icon: <LayersIcon />,
    template: `<File.Root>\n\t<File.Folder />\n\t <File.File>{}</File.File> \n</File.Root>`,
  },
  {
    name: "Fetch Request",
    icon: <LightningBoltIcon />,
    template: `<File.Root>\n\t<File.Folder />\n\t <File.File>{}</File.File> \n</File.Root>`,
  },
]

export default components
