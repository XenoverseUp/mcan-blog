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

export const Pre = ({ children, className }) => (
  <pre
    className={cx(
      className,
      "[font-feature-settings:'liga'_0] [font-variant-ligatures:none] overflow-x-auto bg-neutral-900 px-3 -mx-1 py-[10px] text-xs rounded-lg text-violet-300",
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
 *  anatomy: import("react").ReactElement
 *  elements: Array<[string, Array<{name: string, type: "string"|"number"|"boolean"|"enum", description: string, optional: boolean, default: any?, enum: Array<string>?}>]>
 *  examples: Array<{}>
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
    elements: [
      [
        "Root",
        [
          {
            name: "src",
            type: "string",
            description:
              "Source of the local or hosted image. For custom images, you can omit the host after uploading them to server.",
            optional: false,
          },
          {
            name: "alt",
            type: "string",
            description:
              "Description of the image for screen readers. It improves accesibility and SEO.",
            optional: false,
          },
          {
            name: "caption",
            type: "string",
            description: "Caption of the image to be displayed underneath.",
            optional: true,
          },
        ],
      ],
    ],
    examples: [],
  },
  {
    name: "Separator",
    icon: <DotsHorizontalIcon />,
    template: `<Separator />`,
    description: "A horizontal text separator for separation of context.",
    anatomy: <Pre>{`<Separator />`}</Pre>,
    elements: [
      [
        "Root",
        [
          {
            name: "variant",
            type: "enum",
            description:
              "The type of the separator. When passed nothing, the component will fallback to <span class='text-cool-lime-300 font-mono'>dots</span> variant.",
            optional: true,
            enum: ["dots", "ghost", "line"],
            default: "dots",
          },
        ],
      ],
    ],
  },
  {
    name: "Link",
    icon: <Link2Icon />,
    template: `<Link>{}</Link>`,
    description:
      "A customized link component to handle internal and external linkage.",
    anatomy: <Pre>{`<Link></Link>`}</Pre>,
    elements: [
      [
        "Root",
        [
          {
            name: "to",
            type: "string",
            description:
              "The url of the link. To mention a heading in the same document, use <span class='text-cool-lime-300 font-mono'>`#heading-in-kebab-case`</span> convention.",
            optional: false,
          },
          {
            name: "internal",
            type: "boolean",
            description:
              "Indicates whether the link is internal or external. Default value is <span class='text-cool-lime-300 font-mono'>false</span>.",
            optional: true,
            default: false,
          },
          {
            name: "target",
            type: "enum",
            description: "The behaviour of the link action.",
            optional: true,
            enum: ["current-tab", "new-tab"],
            default: "new-tab",
          },
        ],
      ],
    ],
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
