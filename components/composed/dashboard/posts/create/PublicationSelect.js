import capitalize from "@/utils/capitalize"
import { Publication } from "@prisma/client"
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons"
import * as Select from "@radix-ui/react-select"

const PublicationSelect = ({}) => (
  <div className="flex gap-3">
    <Select.Root>
      <Select.Trigger
        className="inline-flex items-center bg-neutral-950 border border-border justify-center rounded-lg px-[15px] text-[13px] leading-none h-[35px] gap-1 hover:bg-white/5 text-violet-300 data-[placeholder]:text-violet-300 outline-none"
        aria-label="Publication"
      >
        <Select.Value placeholder="Select a publication" />
        <Select.Icon className="text-violet-300">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden bg-neutral-950 rounded-lg border border-border shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.ScrollUpButton className="flex items-center justify-center h-[25px] text-violet-300 cursor-default">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="rounded-lg text-sm overflow-hidden select-none min-w-[7.5rem]">
            <Select.Group>
              <Select.Label className="py-[6px] text-background p-4 text-xs bg-violet-300">
                Publication
              </Select.Label>
              {Object.keys(Publication).map(key => (
                <Select.Item
                  value={key}
                  key={`select-${key}`}
                  className="whitespace-nowrap group text-[13px] gap-2 items-center hover:bg-white/5 hover:text-violet-300 focus-visible:text-violet-300 focus-visible:bg-white/5 hover:opacity-100 focus-visible:opacity-100 opacity-90 transition w-full flex py-2 px-8 cursor-pointer"
                >
                  <Select.ItemIndicator className="absolute left-1 w-[25px] inline-flex items-center justify-center">
                    <CheckIcon />
                  </Select.ItemIndicator>
                  <div className="absolute left-1 w-[25px] inline-flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity !text-white">
                    <CheckIcon />
                  </div>
                  <Select.ItemText>{capitalize(key)}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet-300 cursor-default">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  </div>
)

export default PublicationSelect
