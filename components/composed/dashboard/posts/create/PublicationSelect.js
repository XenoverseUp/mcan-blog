import {
  Select,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
} from "@/components/primitives/Select"
import capitalize from "@/utils/capitalize"
import { PostType, Publication } from "@prisma/client"

import { Controller } from "react-hook-form"
import colors from "tailwindcss/colors"

const PublicationSelect = ({ control, publication }) => (
  <div className="flex gap-3">
    <Controller
      control={control}
      name="publication"
      render={({ field }) => (
        <Select
          label="Publication"
          {...field}
          placeholder="Select a publication"
        >
          <SelectGroup>
            <SelectGroupLabel>Publication</SelectGroupLabel>
            {Object.keys(Publication).map(key => (
              <SelectItem
                value={key}
                text={capitalize(key)}
                key={`select-${key}`}
              />
            ))}
          </SelectGroup>
        </Select>
      )}
    />
    <Controller
      control={control}
      name="type"
      render={({ field }) => (
        <Select label="Post Type" {...field} placeholder="Select a type">
          <SelectGroup>
            <SelectGroupLabel>Post Type</SelectGroupLabel>
            {Object.keys(PostType).map(key => (
              <SelectItem
                value={key}
                text={capitalize(key)}
                key={`post-type-${key}`}
              />
            ))}
          </SelectGroup>
        </Select>
      )}
    />
  </div>
)

export default PublicationSelect
